---
layout: earth-vision
permalink: /research-vision/
title: "Research Vision"
seo_title: "Research Vision | Peijun Li"
description: "A research vision connecting multi-source Earth observations, scientific discovery, process understanding, and hybrid hydrological modeling through an iterative learning cycle."
author_profile: false
---

<section class="research-vision-intro" aria-labelledby="research-vision-intro-title">
  <h2 id="research-vision-intro-title">Observation, Discovery, and Modeling</h2>
  <p class="earth-vision-page__summary">
    This future-facing framework connects complementary observations with scientific and process discovery,
    model refinement, and hybrid hydrological modeling. The goal is an iterative learning cycle in which
    observations improve understanding and models, while model behavior and uncertainty reveal what should be observed next.
  </p>
  <p>
    Individual parts of this vision are grounded in completed and ongoing research, but the full closed-loop framework
    represents a direction for future research rather than an operational system that has already been implemented.
  </p>
</section>

<section class="research-vision-cycle" aria-labelledby="research-vision-cycle-title">
  <header class="research-vision-cycle__heading">
    <p class="earth-observatory__kicker">Scientific learning cycle</p>
    <h2 id="research-vision-cycle-title">A closed scientific learning cycle</h2>
    <p>
      Each stage passes distinct scientific information to the next. Observations support discovery and model
      development, while diagnosis exposes unresolved processes, uncertainty, and observational gaps.
    </p>
  </header>

  <div class="research-vision-cycle__diagram">
    <svg class="research-vision-cycle__arrows" viewBox="0 0 900 520" aria-hidden="true" focusable="false">
      <defs>
        <marker id="research-vision-arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 z"></path>
        </marker>
      </defs>
      <path d="M 555 75 C 650 85, 720 125, 755 175"></path>
      <path d="M 800 285 C 790 350, 750 395, 710 420"></path>
      <path d="M 590 475 C 500 505, 400 505, 310 475"></path>
      <path d="M 190 420 C 130 380, 100 330, 105 285"></path>
      <path d="M 145 175 C 210 105, 300 80, 345 75"></path>
      <text x="655" y="125">Evidence &amp; constraints</text>
      <text x="742" y="354">Process hypotheses</text>
      <text x="450" y="506" text-anchor="middle">Structure &amp; parameters</text>
      <text x="78" y="354">Simulations &amp; estimates</text>
      <text x="185" y="125">Observation priorities</text>
    </svg>

    <ol class="research-vision-cycle__stages">
      <li>
        <article class="research-vision-cycle__stage research-vision-cycle__stage--observe">
          <span>01</span>
          <h3>Observe</h3>
          <p>Multi-source measurements across spatial and temporal scales.</p>
        </article>
        <p class="research-vision-cycle__transition">
          <span>Evidence &amp; constraints</span>
          <span class="visually-hidden">lead to Discover</span>
          <i aria-hidden="true">↓</i>
        </p>
      </li>
      <li>
        <article class="research-vision-cycle__stage research-vision-cycle__stage--discover">
          <span>02</span>
          <h3>Discover</h3>
          <p>Patterns, process hypotheses, biases, scale dependencies, and uncertainty.</p>
        </article>
        <p class="research-vision-cycle__transition">
          <span>Process hypotheses</span>
          <span class="visually-hidden">lead to Refine</span>
          <i aria-hidden="true">↓</i>
        </p>
      </li>
      <li>
        <article class="research-vision-cycle__stage research-vision-cycle__stage--refine">
          <span>03</span>
          <h3>Refine</h3>
          <p>Process understanding, structure, parameters, representations, human influences, and scale relationships.</p>
        </article>
        <p class="research-vision-cycle__transition">
          <span>Structure &amp; parameters</span>
          <span class="visually-hidden">lead to Model</span>
          <i aria-hidden="true">↓</i>
        </p>
      </li>
      <li>
        <article class="research-vision-cycle__stage research-vision-cycle__stage--model">
          <span>04</span>
          <h3>Model</h3>
          <p>Process-based, statistical, differentiable, physics-informed, and hybrid approaches.</p>
        </article>
        <p class="research-vision-cycle__transition">
          <span>Simulations &amp; estimates</span>
          <span class="visually-hidden">lead to Diagnose and Learn</span>
          <i aria-hidden="true">↓</i>
        </p>
      </li>
      <li>
        <article class="research-vision-cycle__stage research-vision-cycle__stage--diagnose">
          <span>05</span>
          <h3>Diagnose &amp; Learn</h3>
          <p>Evaluate simulations, reconstructed states, estimates, uncertainty, deficiencies, and information needs.</p>
        </article>
        <p class="research-vision-cycle__transition research-vision-cycle__transition--return">
          <span>Observation priorities</span>
          <span class="visually-hidden">guide the next Observe stage</span>
          <i aria-hidden="true">↻ Observe</i>
        </p>
      </li>
    </ol>

    <div class="research-vision-cycle__core" aria-hidden="true">
      <strong>Hydrological understanding</strong>
      <span>States · processes · uncertainty</span>
    </div>
  </div>

  <p class="research-vision-cycle__feedback">
    <strong>Close the loop:</strong> Model–data mismatch, uncertainty, and missing processes identify the variables,
    locations, scales, and times where additional observations may be most informative.
  </p>
  <a class="research-vision-cycle__explore" href="#earth-observatory-title">Explore the Observe component <span aria-hidden="true">↓</span></a>
</section>

<section class="earth-observatory" data-earth-vision aria-labelledby="earth-observatory-title">
  <div class="earth-observatory__heading">
    <div class="earth-observatory__heading-copy">
      <p class="earth-observatory__kicker">Observe / Earth Observation</p>
      <h2 id="earth-observatory-title">Connecting multi-source observations across scales</h2>
      <p class="earth-observatory__purpose">
        Satellites, in-situ networks, UAV and low-altitude sensing, and hydrometeorological forcing provide
        complementary evidence at global, regional, and local scales. This concept explores how these observations
        could be integrated to characterize water-storage dynamics, constrain hydrological states and parameters,
        and support scale-aware model learning.
      </p>
    </div>
    <aside class="earth-observatory__disclaimer" aria-label="Visualization data status">
      <strong>Synthetic research concept</strong>
      <p>
        This is not an operational monitoring or forecasting system and does not ingest live or mission-derived data.
        Water-state indices and uncertainty ranges are deterministic conceptual scenarios. Platform positions,
        trajectories, coverage, observation windows, and data flows are schematic and not to scale. Mission labels
        identify representative measurement types only.
      </p>
    </aside>
  </div>

  <section class="earth-observatory__pathway" aria-labelledby="observation-pathway-title">
    <div class="earth-observatory__pathway-heading">
      <div>
        <p class="earth-observatory__info-type">Interactive scientific pathway</p>
        <h3 id="observation-pathway-title">From measurement to model-ready information</h3>
      </div>
      <p data-observation-step-description aria-live="polite">
        Highlight platforms, spatial footprints, and the hydrological variables they represent.
      </p>
    </div>
    <ol class="earth-observatory__pathway-steps">
      <li>
        <button type="button" class="is-active" data-observation-step="measure" aria-pressed="true">
          <span>01</span><strong>Measure</strong><small>Platforms &amp; footprints</small>
        </button>
      </li>
      <li>
        <button type="button" data-observation-step="integrate" aria-pressed="false">
          <span>02</span><strong>Integrate</strong><small>Complementary evidence</small>
        </button>
      </li>
      <li>
        <button type="button" data-observation-step="estimate" aria-pressed="false">
          <span>03</span><strong>Estimate</strong><small>States &amp; uncertainty</small>
        </button>
      </li>
      <li>
        <button type="button" data-observation-step="inform" aria-pressed="false">
          <span>04</span><strong>Inform models</strong><small>Constraints downstream</small>
        </button>
      </li>
    </ol>
  </section>

  <div class="earth-observatory__toolbar" aria-label="Visualization controls">
    <fieldset class="earth-observatory__control-group">
      <legend>Spatial scale</legend>
      <div class="earth-observatory__scale-actions">
        <div class="earth-observatory__segmented" role="group" aria-label="Spatial scale preset">
          <button type="button" class="is-active" data-scale="global" aria-pressed="true">Global</button>
          <button type="button" data-scale="regional" aria-pressed="false">Regional</button>
          <button type="button" data-scale="local" aria-pressed="false">Local</button>
        </div>
        <button type="button" class="earth-observatory__reset" data-reset-view>
          Reset view
        </button>
      </div>
    </fieldset>

    <fieldset class="earth-observatory__control-group earth-observatory__layers">
      <legend>Observation layers</legend>
      <div class="earth-observatory__layer-options">
        <label><input type="checkbox" data-layer="waterStates" data-label="Water states" checked> Water states</label>
        <label><input type="checkbox" data-layer="satellites" data-label="Satellites" checked> Satellites</label>
        <label><input type="checkbox" data-layer="ground" data-label="Ground stations" checked> Ground stations</label>
        <label><input type="checkbox" data-layer="uav" data-label="UAV" checked> UAV</label>
        <label><input type="checkbox" data-layer="lowAltitude" data-label="Low-altitude layers" checked> Low-altitude layers</label>
        <label><input type="checkbox" data-layer="dataFlows" data-label="Data flows" checked> Data flows</label>
      </div>
    </fieldset>
  </div>

  <div class="earth-observatory__workspace">
    <div class="earth-observatory__stage" data-stage>
      <canvas
        data-earth-canvas
        hidden
        tabindex="0"
        aria-label="Interactive three-dimensional conceptual Earth observation model"
        aria-describedby="earth-vision-instructions earth-vision-status"
      ></canvas>

      <div class="earth-observatory__fallback" data-earth-fallback>
        <div class="earth-observatory__fallback-globe" aria-hidden="true">
          <span class="earth-observatory__fallback-orbit"></span>
          <span class="earth-observatory__fallback-satellite"></span>
          <span class="earth-observatory__fallback-station"></span>
          <span class="earth-observatory__fallback-uav"></span>
        </div>
        <div>
          <h3>Multi-scale observation concept</h3>
          <p>
            The accessible concept follows four steps: measure with complementary platforms, integrate their spatially
            different evidence, estimate hydrological states and conceptual uncertainty, and pass model-ready information
            downstream.
          </p>
          <ul>
            <li>Basemap: simplified geographic land outlines over a distinct ocean surface</li>
            <li>Global: representative satellite coverage and four synthetic water-state regions</li>
            <li>Regional: a conceptual basin integrates satellite, ground-network, and UAV evidence</li>
            <li>Local: a process cross-section links surface water, soil moisture, groundwater, and sensors</li>
            <li>Estimate: deterministic annual states, observation samples, and conceptual uncertainty</li>
            <li>Inform: states, constraints, and uncertainty are passed toward downstream model learning</li>
          </ul>
          <p class="earth-observatory__fallback-note">
            The interactive WebGL view will replace this diagram when supported.
          </p>
        </div>
      </div>

      <div class="earth-observatory__legend" aria-label="Visualization legend">
        <span><i class="legend-land"></i> Land</span>
        <span><i class="legend-ocean"></i> Ocean</span>
        <span><i class="legend-observation"></i> Observation</span>
        <span><i class="legend-footprint"></i> Spatial support</span>
        <span><i class="legend-flow"></i> Information transfer</span>
        <span><i class="legend-water"></i> Integrated state</span>
        <span><i class="legend-uncertainty"></i> Conceptual uncertainty</span>
        <span><i class="legend-output"></i> Downstream information</span>
      </div>

      <div class="earth-observatory__scene-status" data-scene-status aria-hidden="true" hidden>
        <span data-scene-scale>Global view</span>
        <strong data-scene-region>North China Plain Concept</strong>
        <span data-scene-state>Total Water Storage · Apr 1</span>
        <small data-scene-context>All configured observing systems</small>
      </div>
      <div class="earth-observatory__model-output" data-model-output-label hidden>
        <span>States · constraints · uncertainty</span>
        <strong>Model learning →</strong>
      </div>
      <figure class="earth-observatory__process-section" data-local-cross-section hidden>
        <figcaption>
          <strong>Local process cross-section</strong>
          <span data-cross-section-date>Apr 1 · deterministic concept state</span>
        </figcaption>
        <div class="process-section__surface">
          <span class="process-section__rain" aria-hidden="true">↓ ↓ ↓</span>
          <span class="process-section__river"><i></i> Surface water</span>
          <span class="process-section__gauge">River gauge</span>
        </div>
        <div class="process-section__soil">
          <span class="process-section__probe">Soil probe</span>
          <span>Vadose zone · <strong data-cross-section-soil>soil moisture +0.00</strong></span>
        </div>
        <div class="process-section__aquifer">
          <span class="process-section__well">Observation well</span>
          <span class="process-section__water-table"></span>
          <span>Groundwater · <strong data-cross-section-groundwater>state +0.00</strong></span>
        </div>
        <div class="process-section__uncertainty">
          Conceptual uncertainty <strong data-cross-section-uncertainty>±0.00</strong>
        </div>
      </figure>
    </div>

    <aside class="earth-observatory__info" data-object-info tabindex="0">
      <p class="earth-observatory__info-type" data-info="type">System view</p>
      <h3 data-info="name">Integrated Earth observation</h3>
      <p data-info="description">
        Select a satellite, station, or UAV in the globe to inspect its conceptual role.
      </p>
      <dl>
        <div>
          <dt>Variable</dt>
          <dd data-info="variable">Multi-source hydrological states</dd>
        </div>
        <div>
          <dt>Spatial scale</dt>
          <dd data-info="spatial">Global to local</dd>
        </div>
        <div>
          <dt>Temporal scale</dt>
          <dd data-info="temporal">Event to long-term</dd>
        </div>
        <div>
          <dt>Model role</dt>
          <dd data-info="role">Observation integration and state estimation</dd>
        </div>
      </dl>

      <section class="earth-observatory__scale-summary" aria-labelledby="scale-summary-title">
        <p class="earth-observatory__info-type">Scale-aware detail</p>
        <h3 id="scale-summary-title" data-scale-summary-title>Global synthesis</h3>
        <p data-scale-summary-description>
          Compare four synthetic water regions with satellite, ground, UAV, and low-altitude observing systems.
        </p>
        <div class="earth-observatory__observation-key" aria-label="Regional and local observation symbols">
          <span><i class="observation-key__well"></i> Groundwater well</span>
          <span><i class="observation-key__soil"></i> Soil sensor</span>
          <span><i class="observation-key__river"></i> River gauge</span>
          <span><i class="observation-key__uav"></i> UAV survey</span>
        </div>
        <div class="earth-observatory__local-layer-key" data-local-layer-key hidden>
          <span>Surface: water extent and level</span>
          <span>Vadose zone: soil-water state</span>
          <span>Aquifer: groundwater-table response</span>
        </div>
      </section>

      <section class="earth-observatory__local-reading" data-local-observation-panel hidden aria-labelledby="local-reading-title">
        <p class="earth-observatory__info-type">Local observation illustration</p>
        <h3 id="local-reading-title">Observation and integrated state</h3>
        <dl>
          <div><dt>Synthetic raw sensor</dt><dd data-local-raw>+0.00</dd></div>
          <div><dt>Integrated state</dt><dd data-local-integrated>+0.00</dd></div>
          <div><dt>Conceptual uncertainty</dt><dd data-local-uncertainty>±0.00</dd></div>
        </dl>
        <p>
          The deterministic offset illustrates possible observation bias; it is not a reproduction of a cited experiment.
          Related method: <a href="https://doi.org/10.1016/j.geoderma.2020.114432">Li et al. (2020)</a>.
        </p>
      </section>

      <section class="earth-observatory__research-context" aria-labelledby="research-context-title">
        <p class="earth-observatory__info-type">Research connection</p>
        <h3 id="research-context-title">Grounded in related research</h3>
        <div class="earth-observatory__research-group">
          <h4>Representative observing systems</h4>
          <p>
            <span class="earth-observatory__citation-label">Selected foundations</span>
            <a href="https://doi.org/10.1109/JPROC.2010.2043918">SMAP soil moisture</a>,
            <a href="https://doi.org/10.1007/s10712-015-9346-y">SWOT surface water</a>, and
            <a href="https://doi.org/10.1038/s41558-019-0456-2">GRACE/GRACE-FO water storage</a>.
          </p>
        </div>
        <div class="earth-observatory__research-group">
          <h4>Observation and state estimation</h4>
          <p>
            <span class="earth-observatory__citation-label earth-observatory__citation-label--own">My research</span>
            <a href="https://doi.org/10.1016/j.geoderma.2020.114432">bias-aware assimilation of local soil-moisture observations</a>;
            <span class="earth-observatory__citation-label">foundation</span>
            <a href="https://doi.org/10.1029/2006WR005756">integrated data assimilation and uncertainty</a>.
          </p>
        </div>
        <div class="earth-observatory__research-group">
          <h4>Observation-to-model learning</h4>
          <p>
            <span class="earth-observatory__citation-label earth-observatory__citation-label--own">My research</span>
            <a href="https://doi.org/10.1016/j.jhydrol.2020.124692">process model, assimilation, and machine-learning comparison</a>
            and <a href="https://doi.org/10.5194/hess-29-6829-2025">multi-forcing differentiable and data-driven ensembles</a>;
            <span class="earth-observatory__citation-label">foundation</span>
            <a href="https://doi.org/10.1029/2005WR004362">measurements–analysis–models linkage</a>.
          </p>
        </div>
        <div class="earth-observatory__research-group earth-observatory__research-group--contextual">
          <h4>Regional and scale-aware examples</h4>
        <p data-research-ncp>
          This concept is informed by research on separating terrestrial water-storage components
          and reconstructing GRACE-derived storage anomalies with groundwater and meteorological observations.
          <a href="https://doi.org/10.1016/j.ejrh.2021.100955">North China Plain TWS components (2021)</a>
          and
          <a href="https://doi.org/10.1016/j.ejrh.2023.101528">GRACE-TWS reconstruction (2023)</a>.
        </p>
        <p data-research-scale hidden>
          The multi-scale framing is related to research on deep-learning-based cross-scale parameter transfer:
          <a href="https://doi.org/10.1029/2023WR035543">cross-scale hydrological modeling (2024)</a>.
        </p>
        </div>
        <p class="earth-observatory__research-project">
          Related open-source implementation:
          <a href="https://percyleemaxwell.github.io/ReconstructedTWS/">ReconstructedTWS</a>.
        </p>
        <p class="earth-observatory__research-note">
          These references provide research context. All states and trajectories shown here are synthetic.
        </p>
      </section>

      <section class="earth-observatory__water-panel" aria-labelledby="water-state-title">
        <div class="earth-observatory__water-heading">
          <div>
            <p class="earth-observatory__info-type">Synthetic annual cycle</p>
            <h3 id="water-state-title">Simulated water state</h3>
          </div>
          <output data-water-date>Apr 1</output>
        </div>

        <div class="earth-observatory__water-controls">
          <label for="earth-water-region">
            Concept region
            <select id="earth-water-region" data-water-region>
              <option value="north-china-plain">North China Plain Concept</option>
              <option value="temperate-agriculture">Temperate Agricultural Basin</option>
              <option value="tropical-river">Tropical River Basin</option>
              <option value="managed-reservoir">Managed Reservoir Basin</option>
            </select>
          </label>
          <label for="earth-water-variable">
            Water variable
            <select id="earth-water-variable" data-water-variable>
              <option value="totalWaterStorage">Total Water Storage</option>
              <option value="surfaceWater">Surface Water</option>
              <option value="soilMoisture">Soil Moisture</option>
              <option value="groundwater">Groundwater</option>
            </select>
          </label>
        </div>

        <div class="earth-observatory__water-reading">
          <span>Relative water-state index</span>
          <output data-water-value>+0.00</output>
          <strong data-water-condition>Near normal</strong>
        </div>

        <svg
          class="earth-observatory__water-chart"
          data-water-chart
          viewBox="0 0 320 122"
          role="img"
          aria-label="Synthetic annual total water storage cycle for North China Plain Concept"
        >
          <defs>
            <pattern id="water-chart-uncertainty-pattern" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6"></line>
            </pattern>
          </defs>
          <path class="water-chart__uncertainty" data-water-chart-band d=""></path>
          <line class="water-chart__zero" x1="8" y1="56" x2="312" y2="56"></line>
          <g class="water-chart__events" data-water-chart-events aria-hidden="true"></g>
          <g class="water-chart__samples" data-water-chart-samples aria-hidden="true"></g>
          <path class="water-chart__line" data-water-chart-line d=""></path>
          <line class="water-chart__marker" data-water-chart-marker x1="84" y1="8" x2="84" y2="104"></line>
          <circle class="water-chart__point" data-water-chart-point cx="84" cy="56" r="4"></circle>
          <text x="8" y="118">Jan</text>
          <text x="85" y="118">Apr</text>
          <text x="161" y="118">Jul</text>
          <text x="237" y="118">Oct</text>
          <text x="298" y="118">Dec</text>
        </svg>

        <div class="earth-observatory__water-scale" aria-label="Relative water-state color scale">
          <span><i class="water-scale__dry"></i> Drier</span>
          <span><i class="water-scale__normal"></i> Near normal</span>
          <span><i class="water-scale__wet"></i> Wetter</span>
        </div>
        <p class="earth-observatory__water-note">
          Values are deterministic normalized indices from −1 to +1. They are not measurements,
          forecasts, or reconstructions for the named regions.
        </p>
      </section>
    </aside>
  </div>

  <div class="earth-observatory__timeline">
    <button type="button" class="earth-observatory__play" data-play aria-pressed="false">
      <span data-play-label>Play</span>
    </button>
    <div class="earth-observatory__speed" role="group" aria-label="Playback speed">
      <span>Playback speed</span>
      <button type="button" data-playback-speed="1" aria-pressed="true">1×</button>
      <button type="button" data-playback-speed="4" aria-pressed="false">4×</button>
      <button type="button" data-playback-speed="12" aria-pressed="false">12×</button>
    </div>
    <label for="earth-vision-time">Simulated annual cycle</label>
    <input
      id="earth-vision-time"
      data-time
      type="range"
      min="0"
      max="364"
      step="1"
      value="90"
    >
    <output for="earth-vision-time" data-time-output>Apr 1 · Day 91</output>
  </div>

  <p id="earth-vision-instructions" class="earth-observatory__instructions">
    Drag to rotate, use the wheel or pinch gesture to zoom, select an object for details,
    or use the controls to change scale, layers, water variable, concept region, simulated date, and playback speed.
    Regional and Local progressively focus on the same selected region; Reset view restores the current scale preset.
  </p>
  <p id="earth-vision-status" class="visually-hidden" data-earth-status aria-live="polite">
    Static concept view shown.
  </p>
</section>

<section class="earth-vision-research" aria-labelledby="earth-vision-research-title">
  <h2 id="earth-vision-research-title">Research grounding</h2>
  <p>
    Selected observation systems, published studies, and an open-source reconstruction project ground
    the measurement, state-estimation, scale, and model-learning elements of this concept. Accelerated
    playback makes the same deterministic seasonal trajectory easier to inspect; it does not alter the
    synthetic states or represent faster physical processes.
  </p>
  <div class="earth-vision-research__grid">
    <article>
      <h3>Observation systems</h3>
      <p>
        Representative satellite perspectives on soil moisture, surface-water elevation, and terrestrial water storage.
      </p>
      <p>
        <a href="https://doi.org/10.1109/JPROC.2010.2043918">SMAP</a> ·
        <a href="https://doi.org/10.1007/s10712-015-9346-y">SWOT</a> ·
        <a href="https://doi.org/10.1038/s41558-019-0456-2">GRACE/GRACE-FO</a>
      </p>
    </article>
    <article>
      <h3>State estimation through time</h3>
      <p>
        Data assimilation and complementary process-based and machine-learning pathways for interpreting evolving water states.
      </p>
      <p>
        <a href="https://doi.org/10.1016/j.geoderma.2020.114432">Li et al. (2020), Geoderma</a> ·
        <a href="https://doi.org/10.1016/j.jhydrol.2020.124692">Li et al. (2020), Journal of Hydrology</a>
      </p>
    </article>
    <article>
      <h3>Regional and cross-scale dynamics</h3>
      <p>
        Water-storage reconstruction and process or parameter relationships across regional and spatial scales.
      </p>
      <p>
        <a href="https://doi.org/10.1016/j.ejrh.2021.100955">Li et al. (2021)</a> ·
        <a href="https://doi.org/10.1016/j.ejrh.2023.101528">Li et al. (2023)</a> ·
        <a href="https://doi.org/10.1029/2023WR035543">Li et al. (2024)</a>
      </p>
    </article>
    <article>
      <h3>Model learning and reconstruction</h3>
      <p>
        Multi-source model learning and an open implementation for reconstructing terrestrial water-storage anomalies.
      </p>
      <p>
        <a href="https://doi.org/10.5194/hess-29-6829-2025">Li et al. (2025)</a> ·
        <a href="https://percyleemaxwell.github.io/ReconstructedTWS/">ReconstructedTWS</a>
      </p>
    </article>
  </div>
  <p class="earth-vision-research__note">
    These references provide research grounding rather than evidence that the full framework is already implemented.
    The interactive water states are deterministic simulations, not measurements, forecasts, or reproductions of the cited studies.
    Playback speed changes only how quickly the annual concept is displayed; it does not change values, uncertainty, sampling support,
    or observation-platform motion.
  </p>
</section>
