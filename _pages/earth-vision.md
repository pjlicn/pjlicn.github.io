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
    <h2 id="research-vision-cycle-title">A reciprocal observation–discovery–modeling loop</h2>
    <p>
      Observations do more than constrain models. Scientific discovery and model diagnosis can expose unresolved
      processes, uncertainty, and observational gaps, guiding where, when, and what to observe next.
    </p>
  </header>

  <div class="research-vision-cycle__diagram">
    <svg class="research-vision-cycle__arrows" viewBox="0 0 900 600" aria-hidden="true" focusable="false">
      <defs>
        <marker id="research-vision-arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 z"></path>
        </marker>
      </defs>
      <path d="M 515 96 C 620 105, 700 155, 735 225"></path>
      <path d="M 755 315 C 735 410, 675 475, 590 505"></path>
      <path d="M 530 530 C 450 558, 365 558, 285 530"></path>
      <path d="M 220 500 C 130 460, 80 385, 95 295"></path>
      <path d="M 115 220 C 165 135, 260 95, 365 92"></path>
    </svg>

    <article class="research-vision-cycle__stage research-vision-cycle__stage--observe">
      <span>01</span>
      <h3>Observe</h3>
      <p>Complementary measurements across spatial and temporal scales.</p>
    </article>
    <article class="research-vision-cycle__stage research-vision-cycle__stage--discover">
      <span>02</span>
      <h3>Discover</h3>
      <p>Patterns, processes, biases, scale dependencies, and uncertainty.</p>
    </article>
    <article class="research-vision-cycle__stage research-vision-cycle__stage--refine">
      <span>03</span>
      <h3>Refine</h3>
      <p>Process understanding, structure, parameters, and representations.</p>
    </article>
    <article class="research-vision-cycle__stage research-vision-cycle__stage--model">
      <span>04</span>
      <h3>Model</h3>
      <p>Process-based, statistical, differentiable, and hybrid approaches.</p>
    </article>
    <article class="research-vision-cycle__stage research-vision-cycle__stage--learn">
      <span>05</span>
      <h3>Learn</h3>
      <p>Improved estimates, uncertainty, diagnosis, and observation guidance.</p>
    </article>
    <div class="research-vision-cycle__core" aria-hidden="true">
      <strong>Iterative learning</strong>
      <span>Observation ↔ discovery ↔ modeling</span>
    </div>
  </div>

  <p class="research-vision-cycle__feedback">
    <strong>Close the loop:</strong> Remaining errors, missing processes, and uncertainty identify the locations,
    variables, and times where new observations may be most informative.
  </p>

  <div class="research-vision-cycle__details">
    <article>
      <h3>Observe</h3>
      <p>Combine satellites, in-situ monitoring networks, UAV and low-altitude sensing, and hydrometeorological datasets.</p>
    </article>
    <article>
      <h3>Discover</h3>
      <p>Use statistical and mathematical analysis, machine learning, process-based models, data assimilation, and uncertainty analysis for scientific and process discovery.</p>
    </article>
    <article>
      <h3>Refine</h3>
      <p>Translate discoveries into improved model structure, parameterization, state and process representations, scale relationships, and treatment of human influences.</p>
    </article>
    <article>
      <h3>Model</h3>
      <p>Couple physical understanding with process-based, statistical, data-driven, differentiable, physics-informed, and hybrid modeling approaches.</p>
    </article>
    <article>
      <h3>Learn</h3>
      <p>Generate improved simulations, reconstructed states, state and parameter estimates, and uncertainty estimates, then diagnose limitations and guide future observations.</p>
    </article>
  </div>
</section>

<section class="earth-observatory" data-earth-vision aria-labelledby="earth-observatory-title">
  <div class="earth-observatory__heading">
    <div>
      <p class="earth-observatory__kicker">Observe / Earth Observation</p>
      <h2 id="earth-observatory-title">Multi-source observations across scales</h2>
    </div>
    <p class="earth-observatory__disclaimer">
      Concept visualization only. Water states, positions, trajectories, observation windows,
      and data flows are synthetic, simulated, and not to scale.
    </p>
  </div>

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
            Satellites provide broad coverage, ground networks constrain local states,
            and UAV surveys connect regional and near-surface observations.
          </p>
          <ul>
            <li>Basemap: simplified geographic land outlines over a distinct ocean surface</li>
            <li>Satellite: surface water, soil moisture, and terrestrial water storage</li>
            <li>Ground: groundwater, soil moisture, and river monitoring networks</li>
            <li>Low altitude: near-surface, UAV survey, and regional sensing layers</li>
            <li>Water states: synthetic annual wet and dry cycles across four concept regions</li>
          </ul>
          <p class="earth-observatory__fallback-note">
            The interactive WebGL view will replace this diagram when supported.
          </p>
        </div>
      </div>

      <div class="earth-observatory__legend" aria-label="Visualization legend">
        <span><i class="legend-land"></i> Land</span>
        <span><i class="legend-ocean"></i> Ocean</span>
        <span><i class="legend-water"></i> Water state</span>
        <span><i class="legend-satellite"></i> Satellite</span>
        <span><i class="legend-ground"></i> Ground</span>
        <span><i class="legend-uav"></i> UAV</span>
        <span><i class="legend-flow"></i> Data flow</span>
      </div>

      <div class="earth-observatory__scene-status" data-scene-status aria-hidden="true" hidden>
        <span data-scene-scale>Global view</span>
        <strong data-scene-region>North China Plain Concept</strong>
        <span data-scene-state>Total Water Storage · Apr 1</span>
        <small data-scene-context>All configured observing systems</small>
      </div>
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
          <span>Outer ring: surface water</span>
          <span>Middle ring: soil moisture</span>
          <span>Center: groundwater</span>
        </div>
      </section>

      <section class="earth-observatory__research-context" aria-labelledby="research-context-title">
        <p class="earth-observatory__info-type">Research connection</p>
        <h3 id="research-context-title">Grounded in related research</h3>
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
          <line class="water-chart__zero" x1="8" y1="56" x2="312" y2="56"></line>
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
    or use the controls to change scale, layers, water variable, concept region, and simulated date.
    Regional and Local progressively focus on the same selected region; Reset view restores the current scale preset.
  </p>
  <p id="earth-vision-status" class="visually-hidden" data-earth-status aria-live="polite">
    Static concept view shown.
  </p>
</section>

<section class="earth-vision-research" aria-labelledby="earth-vision-research-title">
  <h2 id="earth-vision-research-title">Research grounding</h2>
  <p>
    Published studies and an open-source reconstruction project ground individual parts of this vision.
    The complete feedback cycle represents a broader future research direction.
  </p>
  <div class="earth-vision-research__grid">
    <article>
      <h3>Regional water-storage dynamics</h3>
      <p>
        North China Plain studies of terrestrial water-storage components and GRACE-derived storage reconstruction.
      </p>
      <p>
        <a href="https://doi.org/10.1016/j.ejrh.2021.100955">Li et al. (2021)</a> ·
        <a href="https://doi.org/10.1016/j.ejrh.2023.101528">Li et al. (2023)</a>
      </p>
    </article>
    <article>
      <h3>Cross-scale modeling</h3>
      <p>
        Deep-learning-based parameter transfer for hydrological modeling across spatial scales.
      </p>
      <p><a href="https://doi.org/10.1029/2023WR035543">Li et al. (2024)</a></p>
    </article>
    <article>
      <h3>Open-source implementation</h3>
      <p>
        A related open-source project for reconstructing GRACE-derived terrestrial water-storage anomalies.
      </p>
      <p><a href="https://percyleemaxwell.github.io/ReconstructedTWS/">ReconstructedTWS</a></p>
    </article>
  </div>
  <p class="earth-vision-research__note">
    These references provide research grounding rather than evidence that the full framework is already implemented.
    The interactive water states are deterministic simulations, not measurements, forecasts, or reproductions of the cited studies.
  </p>
</section>
