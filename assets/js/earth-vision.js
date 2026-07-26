import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const root = document.querySelector("[data-earth-vision]");

if (root) {
  initializeEarthVision(root).catch((error) => {
    console.error("Earth Vision could not be initialized.", error);
    showFallback(root, "Interactive view unavailable. The static research overview remains available below.");
  });
}

async function initializeEarthVision(container) {
  const canvas = container.querySelector("[data-earth-canvas]");
  const fallback = container.querySelector("[data-earth-fallback]");
  const status = container.querySelector("[data-earth-status]");
  const timeline = container.querySelector("[data-time]");
  const timeOutput = container.querySelector("[data-time-output]");
  const playButton = container.querySelector("[data-play]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || !supportsWebGL2()) {
    showFallback(container, "WebGL 2 is unavailable. Showing the accessible static research overview.");
    return;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: window.innerWidth > 680,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 680 ? 1.5 : 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x061321, 0.027);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(6.8, 3.5, 7.4);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.minDistance = 4.3;
  controls.maxDistance = 15;
  controls.autoRotate = !reducedMotion;
  controls.autoRotateSpeed = 0.32;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.HemisphereLight(0xa9e8ff, 0x07101c, 1.7));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
  keyLight.position.set(6, 5, 8);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0x39c6ff, 24, 18);
  rimLight.position.set(-5, 1, -4);
  scene.add(rimLight);

  const world = new THREE.Group();
  scene.add(world);

  const earth = createEarth();
  world.add(earth);
  world.add(createStarField(window.innerWidth < 680 ? 260 : 520));

  const groups = {
    satellites: new THREE.Group(),
    ground: new THREE.Group(),
    uav: new THREE.Group(),
    lowAltitude: new THREE.Group(),
    dataFlows: new THREE.Group(),
  };
  Object.values(groups).forEach((group) => world.add(group));

  const interactables = [];
  const satellites = createSatellites(groups.satellites, interactables);
  const stations = createGroundStations(groups.ground, interactables);
  const uavs = createUavs(groups.uav, interactables);
  createLowAltitudeLayers(groups.lowAltitude);
  const flows = createDataFlows(groups.dataFlows, stations);

  let simulatedMinutes = Number(timeline?.value || 600);
  let isPlaying = !reducedMotion;
  let lastFrame = performance.now();
  let selectedObject = null;
  let cameraTween = null;
  let pointerStart = null;
  let disposed = false;

  canvas.hidden = false;
  fallback.hidden = true;
  setStatus(status, reducedMotion
    ? "Interactive scene ready. Automatic motion is paused to respect your reduced-motion preference."
    : "Interactive scene ready. Drag to rotate, scroll or pinch to zoom, and select an observation platform.");
  updateTimeDisplay(simulatedMinutes, timeline, timeOutput);
  updatePlayButton(playButton, isPlaying);

  const resize = () => {
    const width = Math.max(canvas.clientWidth, 1);
    const height = Math.max(canvas.clientHeight, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 680 ? 1.5 : 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  container.querySelectorAll("[data-layer]").forEach((input) => {
    input.addEventListener("change", () => {
      const group = groups[input.dataset.layer];
      if (group) group.visible = input.checked;
      setStatus(status, `${input.dataset.label || input.parentElement.textContent.trim()} layer ${input.checked ? "shown" : "hidden"}.`);
    });
  });

  container.querySelectorAll("[data-scale]").forEach((button) => {
    button.addEventListener("click", () => {
      container.querySelectorAll("[data-scale]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
        item.classList.toggle("is-active", item === button);
      });
      const presets = {
        global: { position: new THREE.Vector3(6.8, 3.5, 7.4), target: new THREE.Vector3(0, 0, 0) },
        regional: { position: new THREE.Vector3(4.2, 2.7, 4.5), target: new THREE.Vector3(0.25, 0.15, 0.1) },
        local: { position: new THREE.Vector3(3.25, 1.7, 2.65), target: stations[0].position.clone().multiplyScalar(0.72) },
      };
      const preset = presets[button.dataset.scale];
      if (preset) {
        cameraTween = {
          fromPosition: camera.position.clone(),
          toPosition: preset.position,
          fromTarget: controls.target.clone(),
          toTarget: preset.target,
          start: performance.now(),
          duration: reducedMotion ? 1 : 700,
        };
        setStatus(status, `${button.textContent.trim()} scale selected.`);
      }
    });
  });

  playButton?.addEventListener("click", () => {
    isPlaying = !isPlaying;
    updatePlayButton(playButton, isPlaying);
    setStatus(status, `Simulation ${isPlaying ? "playing" : "paused"} at ${formatTime(simulatedMinutes)}.`);
  });

  timeline?.addEventListener("input", () => {
    simulatedMinutes = Number(timeline.value);
    updateTimeDisplay(simulatedMinutes, timeline, timeOutput);
    updateScene(simulatedMinutes / 1440, satellites, uavs, flows, false);
    setStatus(status, `Simulated time set to ${formatTime(simulatedMinutes)}.`);
  });

  canvas.addEventListener("pointerdown", (event) => {
    pointerStart = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!pointerStart || Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 6) {
      pointerStart = null;
      return;
    }
    pointerStart = null;
    const selected = pickObject(event, canvas, camera, interactables);
    if (!selected) return;
    if (selectedObject?.userData.visual) selectedObject.userData.visual.scale.setScalar(1);
    selectedObject = selected;
    if (selectedObject.userData.visual) selectedObject.userData.visual.scale.setScalar(1.18);
    updateInfoPanel(container, selectedObject.userData.info);
    setStatus(status, `${selectedObject.userData.info.name} selected. Details updated.`);
  });

  canvas.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const nextIndex = selectedObject ? (interactables.indexOf(selectedObject) + 1) % interactables.length : 0;
    if (selectedObject?.userData.visual) selectedObject.userData.visual.scale.setScalar(1);
    selectedObject = interactables[nextIndex];
    if (selectedObject.userData.visual) selectedObject.userData.visual.scale.setScalar(1.18);
    updateInfoPanel(container, selectedObject.userData.info);
    setStatus(status, `${selectedObject.userData.info.name} selected. Press Enter or Space to inspect the next platform.`);
  });

  const animate = (now) => {
    if (disposed) return;
    requestAnimationFrame(animate);
    const deltaSeconds = Math.min((now - lastFrame) / 1000, 0.1);
    lastFrame = now;

    if (isPlaying && !document.hidden) {
      simulatedMinutes = (simulatedMinutes + deltaSeconds * 42) % 1440;
      updateTimeDisplay(simulatedMinutes, timeline, timeOutput);
    }

    updateScene(simulatedMinutes / 1440, satellites, uavs, flows, isPlaying && !reducedMotion);
    if (!reducedMotion) {
      earth.rotation.y += deltaSeconds * 0.018;
    }
    updateCameraTween(now);
    controls.update();
    renderer.render(scene, camera);
  };

  function updateCameraTween(now) {
    if (!cameraTween) return;
    const progress = Math.min((now - cameraTween.start) / cameraTween.duration, 1);
    const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    camera.position.lerpVectors(cameraTween.fromPosition, cameraTween.toPosition, eased);
    controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, eased);
    if (progress >= 1) cameraTween = null;
  }

  updateScene(simulatedMinutes / 1440, satellites, uavs, flows, false);
  requestAnimationFrame(animate);

  window.addEventListener("pagehide", () => {
    disposed = true;
    resizeObserver.disconnect();
    controls.dispose();
    renderer.dispose();
  }, { once: true });
}

function supportsWebGL2() {
  try {
    const probe = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && probe.getContext("webgl2"));
  } catch {
    return false;
  }
}

function showFallback(container, message) {
  const canvas = container.querySelector("[data-earth-canvas]");
  const fallback = container.querySelector("[data-earth-fallback]");
  if (canvas) canvas.hidden = true;
  if (fallback) fallback.hidden = false;
  setStatus(container.querySelector("[data-earth-status]"), message);
}

function createEarth() {
  const group = new THREE.Group();
  const ocean = new THREE.Mesh(
    new THREE.SphereGeometry(2, 64, 48),
    new THREE.MeshStandardMaterial({
      color: 0x082c4b,
      emissive: 0x031527,
      emissiveIntensity: 0.7,
      roughness: 0.76,
      metalness: 0.18,
    }),
  );
  group.add(ocean);

  const graticule = new THREE.LineSegments(
    createGraticuleGeometry(2.015),
    new THREE.LineBasicMaterial({ color: 0x60d9ff, transparent: true, opacity: 0.24 }),
  );
  group.add(graticule);

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.08, 48, 36),
    new THREE.MeshBasicMaterial({
      color: 0x31b7ed,
      transparent: true,
      opacity: 0.085,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(atmosphere);
  return group;
}

function createGraticuleGeometry(radius) {
  const points = [];
  for (let latitude = -60; latitude <= 60; latitude += 30) {
    for (let longitude = 0; longitude < 360; longitude += 4) {
      points.push(latLonToVector(latitude, longitude, radius), latLonToVector(latitude, longitude + 4, radius));
    }
  }
  for (let longitude = 0; longitude < 360; longitude += 30) {
    for (let latitude = -90; latitude < 90; latitude += 4) {
      points.push(latLonToVector(latitude, longitude, radius), latLonToVector(latitude + 4, longitude, radius));
    }
  }
  return new THREE.BufferGeometry().setFromPoints(points);
}

function createStarField(count) {
  const points = [];
  for (let index = 0; index < count; index += 1) {
    const direction = new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    ).normalize();
    points.push(direction.multiplyScalar(14 + Math.random() * 18));
  }
  return new THREE.Points(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.PointsMaterial({ color: 0xb8e9ff, size: 0.035, transparent: true, opacity: 0.68 }),
  );
}

function createSatellites(group, interactables) {
  const configs = [
    {
      name: "SWOT-type Altimetry",
      variable: "Surface-water elevation and extent",
      spatial: "Regional to global water bodies",
      temporal: "Repeat-orbit sampling",
      role: "Constrain river, lake, and floodplain states in multiscale hydrologic models.",
      radius: 3.2,
      inclination: 1.05,
      speed: 1,
      phase: 0.12,
      color: 0x5ee8ff,
    },
    {
      name: "SMAP-type Radiometry",
      variable: "Near-surface soil moisture",
      spatial: "Landscape to continental patterns",
      temporal: "Frequent revisit sampling",
      role: "Link land-surface wetness to groundwater recharge and drought evolution.",
      radius: 2.95,
      inclination: 0.72,
      speed: 1.28,
      phase: 0.48,
      color: 0x7dffc5,
    },
    {
      name: "GRACE-FO-type Gravimetry",
      variable: "Terrestrial water-storage anomalies",
      spatial: "Basin to continental mass change",
      temporal: "Monthly-scale synthesis",
      role: "Provide integrated water-storage constraints for reconstruction and attribution.",
      radius: 3.42,
      inclination: 1.32,
      speed: 0.82,
      phase: 0.76,
      color: 0xc5a8ff,
    },
  ];

  return configs.map((config) => {
    const orbit = createOrbit(config.radius, config.inclination, config.color);
    group.add(orbit);
    const anchor = new THREE.Group();
    const visual = createSatelliteVisual(config.color);
    anchor.add(visual);
    anchor.add(createObservationBeam(config.color, config.radius - 2.08));
    anchor.userData.info = {
      type: "Simulated satellite",
      name: config.name,
      description: "A conceptual orbital observation platform. Position and coverage are simulated for this research vision.",
      variable: config.variable,
      spatial: config.spatial,
      temporal: config.temporal,
      role: config.role,
    };
    anchor.userData.visual = visual;
    anchor.userData.config = config;
    group.add(anchor);
    interactables.push(anchor);
    return anchor;
  });
}

function createSatelliteVisual(color) {
  const visual = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.13, 0.25),
    new THREE.MeshStandardMaterial({ color: 0xe8f7ff, emissive: color, emissiveIntensity: 0.28, metalness: 0.6 }),
  );
  const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x176a98, emissive: 0x0a3550, emissiveIntensity: 0.7 });
  const panelGeometry = new THREE.BoxGeometry(0.34, 0.018, 0.14);
  const panelLeft = new THREE.Mesh(panelGeometry, panelMaterial);
  const panelRight = panelLeft.clone();
  panelLeft.position.x = -0.25;
  panelRight.position.x = 0.25;
  visual.add(body, panelLeft, panelRight);
  return visual;
}

function createObservationBeam(color, length) {
  const beam = new THREE.Mesh(
    new THREE.ConeGeometry(0.32, length, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.085,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  beam.position.y = -length / 2;
  return beam;
}

function createOrbit(radius, inclination, color) {
  const points = [];
  for (let step = 0; step <= 128; step += 1) {
    const angle = (step / 128) * Math.PI * 2;
    points.push(orbitPosition(radius, inclination, angle));
  }
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.27 }),
  );
}

function createGroundStations(group, interactables) {
  const configs = [
    {
      name: "Groundwater Observation Network",
      latitude: 38,
      longitude: -96,
      color: 0x5ee8ff,
      variable: "Groundwater level and storage proxies",
      spatial: "Well to aquifer network",
      temporal: "Hourly to seasonal records",
      role: "Anchor storage reconstruction and diagnose groundwater response.",
    },
    {
      name: "Soil Moisture Network",
      latitude: 18,
      longitude: 77,
      color: 0x7dffc5,
      variable: "Profile soil moisture",
      spatial: "Plot to landscape network",
      temporal: "Sub-daily monitoring",
      role: "Bridge point measurements and satellite soil-moisture footprints.",
    },
    {
      name: "River Gauge Network",
      latitude: -8,
      longitude: -58,
      color: 0xffce72,
      variable: "River stage and discharge",
      spatial: "Reach to river-basin network",
      temporal: "Continuous to daily records",
      role: "Evaluate surface-water routing and basin-scale water balance.",
    },
    {
      name: "Integrated Field Observatory",
      latitude: 42,
      longitude: 12,
      color: 0xff8fc7,
      variable: "Meteorology, soil water, and streamflow",
      spatial: "Catchment observatory",
      temporal: "Event to interannual records",
      role: "Support cross-scale process understanding and model evaluation.",
    },
  ];

  return configs.map((config) => {
    const anchor = new THREE.Group();
    anchor.position.copy(latLonToVector(config.latitude, config.longitude, 2.035));
    anchor.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), anchor.position.clone().normalize());
    const visual = createStationVisual(config.color);
    anchor.add(visual);
    anchor.userData.info = {
      type: "Simulated ground network",
      name: config.name,
      description: "A representative in-situ observing network used to connect local processes with regional and global observations.",
      variable: config.variable,
      spatial: config.spatial,
      temporal: config.temporal,
      role: config.role,
    };
    anchor.userData.visual = visual;
    group.add(anchor);
    interactables.push(anchor);
    return anchor;
  });
}

function createStationVisual(color) {
  const visual = new THREE.Group();
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.026, 0.2, 10),
    new THREE.MeshStandardMaterial({ color: 0xd7f7ff, emissive: color, emissiveIntensity: 0.35 }),
  );
  mast.position.y = 0.1;
  const pulse = new THREE.Mesh(
    new THREE.RingGeometry(0.08, 0.13, 24),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82, side: THREE.DoubleSide }),
  );
  pulse.rotation.x = -Math.PI / 2;
  pulse.position.y = 0.01;
  visual.add(mast, pulse);
  return visual;
}

function createUavs(group, interactables) {
  const configs = [
    {
      name: "UAV Survey Alpha",
      center: latLonToVector(34, -83, 2.22),
      color: 0xffce72,
      phase: 0.05,
      variable: "Thermal, multispectral, and terrain observations",
      spatial: "Field to catchment survey",
      temporal: "Event-based missions",
      role: "Resolve fine-scale heterogeneity between ground sensors and satellite footprints.",
    },
    {
      name: "UAV Survey Beta",
      center: latLonToVector(-18, 133, 2.24),
      color: 0xff8fc7,
      phase: 0.56,
      variable: "Vegetation condition and surface-water extent",
      spatial: "Corridor to landscape survey",
      temporal: "Targeted campaign sampling",
      role: "Test adaptive sampling strategies for rapidly changing hydrologic conditions.",
    },
  ];

  return configs.map((config) => {
    const anchor = new THREE.Group();
    const visual = createUavVisual(config.color);
    anchor.add(visual);
    anchor.add(createObservationBeam(config.color, 0.25));
    anchor.userData.info = {
      type: "Simulated UAV",
      name: config.name,
      description: "A conceptual low-altitude mobile platform following a simulated survey path.",
      variable: config.variable,
      spatial: config.spatial,
      temporal: config.temporal,
      role: config.role,
    };
    anchor.userData.visual = visual;
    anchor.userData.config = config;
    group.add(anchor);
    interactables.push(anchor);
    return anchor;
  });
}

function createUavVisual(color) {
  const visual = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({ color: 0xe9f8ff, emissive: color, emissiveIntensity: 0.25 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.045, 0.08), material);
  const armGeometry = new THREE.BoxGeometry(0.28, 0.018, 0.018);
  const armA = new THREE.Mesh(armGeometry, material);
  const armB = armA.clone();
  armA.rotation.y = Math.PI / 4;
  armB.rotation.y = -Math.PI / 4;
  visual.add(body, armA, armB);
  return visual;
}

function createLowAltitudeLayers(group) {
  [
    { radius: 2.12, color: 0x7dffc5, opacity: 0.045 },
    { radius: 2.23, color: 0xffce72, opacity: 0.038 },
    { radius: 2.36, color: 0xff8fc7, opacity: 0.03 },
  ].forEach((layer) => {
    group.add(new THREE.Mesh(
      new THREE.SphereGeometry(layer.radius, 36, 24),
      new THREE.MeshBasicMaterial({
        color: layer.color,
        wireframe: true,
        transparent: true,
        opacity: layer.opacity,
        depthWrite: false,
      }),
    ));
  });
}

function createDataFlows(group, stations) {
  const colors = [0x5ee8ff, 0x7dffc5, 0xffce72, 0xff8fc7];
  return stations.map((station, index) => {
    const start = station.position.clone().multiplyScalar(1.01);
    const end = orbitPosition(3.05 + index * 0.08, 0.7 + index * 0.13, index * 1.4);
    const midpoint = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(3.25);
    const curve = new THREE.QuadraticBezierCurve3(start, midpoint, end);
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)),
      new THREE.LineBasicMaterial({ color: colors[index], transparent: true, opacity: 0.3 }),
    );
    const particle = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 10, 8),
      new THREE.MeshBasicMaterial({ color: colors[index] }),
    );
    group.add(line, particle);
    return { curve, particle, phase: index / stations.length };
  });
}

function updateScene(dayFraction, satellites, uavs, flows, animateFlows) {
  const fullTurn = Math.PI * 2;
  satellites.forEach((satellite) => {
    const config = satellite.userData.config;
    const angle = fullTurn * (config.phase + dayFraction * config.speed);
    satellite.position.copy(orbitPosition(config.radius, config.inclination, angle));
    satellite.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), satellite.position.clone().negate().normalize());
  });

  uavs.forEach((uav) => {
    const config = uav.userData.config;
    const normal = config.center.clone().normalize();
    const tangentA = new THREE.Vector3().crossVectors(normal, new THREE.Vector3(0, 1, 0));
    if (tangentA.lengthSq() < 0.01) tangentA.set(1, 0, 0);
    tangentA.normalize();
    const tangentB = new THREE.Vector3().crossVectors(normal, tangentA).normalize();
    const angle = fullTurn * (dayFraction * 2.4 + config.phase);
    uav.position.copy(config.center)
      .addScaledVector(tangentA, Math.cos(angle) * 0.18)
      .addScaledVector(tangentB, Math.sin(angle) * 0.11);
    uav.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
  });

  flows.forEach((flow) => {
    const progress = animateFlows ? (dayFraction * 8 + flow.phase) % 1 : (dayFraction + flow.phase) % 1;
    flow.particle.position.copy(flow.curve.getPoint(progress));
  });
}

function orbitPosition(radius, inclination, angle) {
  return new THREE.Vector3(
    radius * Math.cos(angle),
    radius * Math.sin(angle) * Math.sin(inclination),
    radius * Math.sin(angle) * Math.cos(inclination),
  );
}

function latLonToVector(latitude, longitude, radius) {
  const phi = THREE.MathUtils.degToRad(90 - latitude);
  const theta = THREE.MathUtils.degToRad(longitude + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function pickObject(event, canvas, camera, interactables) {
  const bounds = canvas.getBoundingClientRect();
  const pointer = new THREE.Vector2(
    ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
    -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
  );
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(interactables, true);
  if (!hits.length) return null;
  let object = hits[0].object;
  while (object && !object.userData.info) object = object.parent;
  return object || null;
}

function updateInfoPanel(container, info) {
  if (!info) return;
  Object.entries(info).forEach(([key, value]) => {
    const field = container.querySelector(`[data-info="${key}"]`);
    if (field) field.textContent = value;
  });
}

function updateTimeDisplay(minutes, input, output) {
  if (input) input.value = String(Math.round(minutes));
  if (output) output.textContent = formatTime(minutes);
}

function formatTime(minutes) {
  const normalized = Math.round(minutes) % 1440;
  const hours = Math.floor(normalized / 60);
  const remainingMinutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;
}

function updatePlayButton(button, isPlaying) {
  if (!button) return;
  button.setAttribute("aria-pressed", String(isPlaying));
  const label = button.querySelector("[data-play-label]");
  if (label) label.textContent = isPlaying ? "Pause" : "Play";
  else button.textContent = isPlaying ? "Pause" : "Play";
}

function setStatus(element, message) {
  if (element) element.textContent = message;
}
