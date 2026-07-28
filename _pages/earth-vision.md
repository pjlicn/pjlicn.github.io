---
layout: earth-vision
permalink: /earth-vision/
title: "Future Earth Observation Vision"
seo_title: "Future Earth Observation Vision | Peijun Li"
description: "A conceptual interactive vision for integrating satellite, ground, UAV, and low-altitude observations across space and time."
author_profile: false
---

<p class="earth-vision-page__summary">
  This conceptual interface explores how satellite, ground, and low-altitude observations could work together with data assimilation, machine learning, and process-based models to study a changing Earth across spatial and temporal scales.
  Simplified geographic land outlines provide spatial context without using satellite imagery or a live map service.
</p>

<section class="earth-observatory" data-earth-vision aria-labelledby="earth-observatory-title">
  <div class="earth-observatory__heading">
    <div>
      <p class="earth-observatory__kicker">Simulated multi-platform observatory</p>
      <h2 id="earth-observatory-title">Observe, integrate, and model the Earth system</h2>
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

<section class="earth-vision-process" aria-labelledby="earth-vision-process-title">
  <h2 id="earth-vision-process-title">From observation to Earth-system understanding</h2>
  <ol>
    <li>
      <strong>Observe</strong>
      <span>Coordinate satellite, ground, and low-altitude measurements across scales.</span>
    </li>
    <li>
      <strong>Integrate</strong>
      <span>Detect bias, harmonize resolution, and assimilate complementary observations.</span>
    </li>
    <li>
      <strong>Model</strong>
      <span>Combine process understanding with differentiable and data-driven models.</span>
    </li>
    <li>
      <strong>Anticipate</strong>
      <span>Explore evolving water-system states, uncertainty, and human influence.</span>
    </li>
  </ol>
</section>
