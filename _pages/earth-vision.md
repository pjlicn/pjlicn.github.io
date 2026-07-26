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
</p>

<section class="earth-observatory" data-earth-vision aria-labelledby="earth-observatory-title">
  <div class="earth-observatory__heading">
    <div>
      <p class="earth-observatory__kicker">Simulated multi-platform observatory</p>
      <h2 id="earth-observatory-title">Observe, integrate, and model the Earth system</h2>
    </div>
    <p class="earth-observatory__disclaimer">
      Concept visualization only. Positions, trajectories, observation windows, and data flows are simulated and not to scale.
    </p>
  </div>

  <div class="earth-observatory__toolbar" aria-label="Visualization controls">
    <fieldset class="earth-observatory__control-group">
      <legend>Spatial scale</legend>
      <div class="earth-observatory__segmented" role="group" aria-label="Spatial scale preset">
        <button type="button" class="is-active" data-scale="global" aria-pressed="true">Global</button>
        <button type="button" data-scale="regional" aria-pressed="false">Regional</button>
        <button type="button" data-scale="local" aria-pressed="false">Local</button>
      </div>
    </fieldset>

    <fieldset class="earth-observatory__control-group earth-observatory__layers">
      <legend>Observation layers</legend>
      <div class="earth-observatory__layer-options">
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
            <li>Satellite: surface water, soil moisture, and terrestrial water storage</li>
            <li>Ground: groundwater, soil moisture, and river monitoring networks</li>
            <li>Low altitude: near-surface, UAV survey, and regional sensing layers</li>
          </ul>
          <p class="earth-observatory__fallback-note">
            The interactive WebGL view will replace this diagram when supported.
          </p>
        </div>
      </div>

      <div class="earth-observatory__legend" aria-label="Visualization legend">
        <span><i class="legend-satellite"></i> Satellite</span>
        <span><i class="legend-ground"></i> Ground</span>
        <span><i class="legend-uav"></i> UAV</span>
        <span><i class="legend-flow"></i> Data flow</span>
      </div>
    </div>

    <aside class="earth-observatory__info" data-object-info aria-live="polite" tabindex="0">
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
    </aside>
  </div>

  <div class="earth-observatory__timeline">
    <button type="button" class="earth-observatory__play" data-play aria-pressed="false">
      <span data-play-label>Play</span>
    </button>
    <label for="earth-vision-time">Simulated UTC</label>
    <input
      id="earth-vision-time"
      data-time
      type="range"
      min="0"
      max="1440"
      step="15"
      value="360"
    >
    <output for="earth-vision-time" data-time-output>06:00</output>
  </div>

  <p id="earth-vision-instructions" class="earth-observatory__instructions">
    Drag to rotate, use the wheel or pinch gesture to zoom, select an object for details,
    or use the controls to change scale, layers, and simulated time.
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
