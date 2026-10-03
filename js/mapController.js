/**
 * OLD TESTAMENT GEOGRAPHY - MAP CONTROLLER
 * Manages Leaflet Map, Tile Providers, Ancient Cartographic Layers,
 * Custom Biblical Markers, 12 Tribes Polygons, Polylines, and Camera Transitions.
 */

class MapController {
  constructor() {
    this.map = null;
    this.currentTheme = "parchment"; // 'parchment', 'satellite', 'modern'

    // Layer Groups
    this.layers = {
      hydrography: L.layerGroup(),
      cities: L.layerGroup(),
      tribes: L.layerGroup(),
      dividedKingdoms: L.layerGroup(),
      abrahamJourney: L.layerGroup(),
      exodusRoute: L.layerGroup(),
      arkJourney: L.layerGroup(),
      elijahJourney: L.layerGroup(),
      jerusalemSites: L.layerGroup(),
      lehiJourney: L.layerGroup(),
      activeHighlights: L.layerGroup()
    };

    // Tile layers
    this.tileLayers = {
      parchment: null,
      satellite: null,
      modern: null
    };

    // Filter toggles
    this.filterState = {
      all: true,
      tribes: true,
      "divided-kingdoms": true,
      abraham: true,
      exodus: true,
      ark: true,
      cities: true,
      jerusalem: true,
      hydrography: true,
      lehi: true,
      prophecies: true
    };

    this.currentYear = -1000; // ~1000 BC (Reign of King David)
    this.markersMap = {};
  }

  init(containerId = "map") {
    console.log("🗺️ Initializing Old Testament Map Controller...");

    // Initial center on the Promised Land / Canaan, encompassing Egypt to Mesopotamia
    this.map = L.map(containerId, {
      center: [31.77, 35.23],
      zoom: 7,
      minZoom: 4,
      maxZoom: 18,
      zoomControl: true,
      attributionControl: false
    });

    // Custom attribution
    L.control.attribution({ position: "bottomright", prefix: false })
      .addAttribution('Old Testament Atlas • Cartography: Esri & OSM • Content: Church of Jesus Christ Scriptures & Pearl of Great Price')
      .addTo(this.map);

    this.setupTileLayers();

    // Attach all base layers
    Object.values(this.layers).forEach(layer => layer.addTo(this.map));

    // Render geographic data
    this.drawHydrography();
    this.drawTribes();
    this.drawDividedKingdoms();
    this.drawJourneys();
    this.drawJerusalemSites();
    this.drawCities();

    // Click on blank spot on the map to close flyout menu / sidebar
    this.map.on("click", (e) => {
      if (window.app && window.app.ui && window.app.ui.isDossierOpen()) {
        window.app.ui.closeDossier();
      }
      this.clearHighlight();
    });

    return this.map;
  }

  setupTileLayers() {
    // 1. Clean Ancient Shaded Relief (Esri World Shaded Relief - Pure historical terrain without modern clutter)
    this.tileLayers.parchment = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
      {
        maxNativeZoom: 13,
        maxZoom: 18,
        opacity: 0.96,
        attribution: "Cartography &copy; Esri World Shaded Relief",
        className: "parchment-tiles"
      }
    );

    // 2. Pure Satellite Earth Imagery (Esri World Imagery)
    this.tileLayers.satellite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        maxNativeZoom: 18,
        maxZoom: 18,
        opacity: 1.0,
        attribution: "Cartography &copy; Esri World Satellite Imagery"
      }
    );

    // 3. Full Modern Street Map (OpenStreetMap with roads, cities, and borders)
    this.tileLayers.modern = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxNativeZoom: 18,
        maxZoom: 18,
        opacity: 1.0,
        attribution: "&copy; OpenStreetMap contributors"
      }
    );

    // Set initial active tile
    this.setMapTheme("parchment");
  }

  setMapTheme(themeName) {
    this.currentTheme = themeName;

    // Remove existing tile layers
    Object.values(this.tileLayers).forEach(layer => {
      if (layer && this.map.hasLayer(layer)) {
        this.map.removeLayer(layer);
      }
    });

    const mapContainer = document.getElementById("map");
    if (mapContainer) {
      mapContainer.classList.remove("theme-parchment", "theme-satellite", "theme-modern");
      mapContainer.classList.add(`theme-${themeName}`);
    }

    if (themeName === "parchment") {
      this.tileLayers.parchment.addTo(this.map);
    } else if (themeName === "satellite") {
      this.tileLayers.satellite.addTo(this.map);
    } else if (themeName === "modern") {
      this.tileLayers.modern.addTo(this.map);
    }
  }

  // Draw ancient rivers & seas
  drawHydrography() {
    this.layers.hydrography.clearLayers();
    if (typeof HYDROGRAPHY_DATA === "undefined") return;

    HYDROGRAPHY_DATA.forEach(water => {
      if (water.type === "river") {
        const polyline = L.polyline(water.coordinates, {
          color: water.color,
          weight: water.weight || 3,
          opacity: 0.78,
          smoothFactor: 1.2
        }).bindTooltip(`<b>${water.name}</b><br><span style="direction:rtl;font-family:serif;">${water.hebrew}</span>`, {
          sticky: true,
          className: "ot-map-label"
        });
        polyline.addTo(this.layers.hydrography);
      } else if (water.type === "waterbody") {
        const polygon = L.polygon(water.coordinates, {
          color: water.color,
          fillColor: water.fillColor,
          fillOpacity: water.fillOpacity || 0.35,
          weight: 2
        }).bindTooltip(`<b>${water.name}</b><br><span style="direction:rtl;font-family:serif;">${water.hebrew}</span>`, {
          sticky: true,
          className: "ot-map-label"
        });
        polygon.addTo(this.layers.hydrography);
      }
    });
  }

  // Draw 12 Tribal Allotments of Israel
  drawTribes() {
    this.layers.tribes.clearLayers();
    if (typeof REGIONS_DATA === "undefined" || !REGIONS_DATA.tribes) return;

    REGIONS_DATA.tribes.forEach(tribe => {
      const polygon = L.polygon(tribe.coordinates, {
        color: tribe.color,
        fillColor: tribe.color,
        fillOpacity: 0.22,
        weight: 2,
        dashArray: "4, 4"
      });

      polygon.bindTooltip(`
        <div style="text-align:center;">
          <strong style="color:${tribe.color}; font-size:0.85rem;">${tribe.name}</strong><br>
          <span style="font-family:'Frank Ruhl Libre', serif; font-size:0.95rem; direction:rtl; font-weight:700;">${tribe.hebrew}</span><br>
          <small style="font-style:italic;">${tribe.symbol}</small>
        </div>
      `, {
        permanent: false,
        sticky: true,
        className: "ot-map-label"
      });

      polygon.on("click", (e) => {
        // If sidebar is currently open, clicking in territory closes it
        if (window.app && window.app.ui && window.app.ui.isDossierOpen()) {
          window.app.ui.closeDossier();
          if (e && e.originalEvent) L.DomEvent.stopPropagation(e);
          return;
        }
        if (e && e.originalEvent) L.DomEvent.stopPropagation(e);
        if (window.app && window.app.ui) {
          window.app.ui.showTribeDossier(tribe);
        }
      });

      polygon.addTo(this.layers.tribes);
    });
  }

  // Draw the Divided Kingdoms of Israel (North) and Judah (South)
  drawDividedKingdoms() {
    this.layers.dividedKingdoms.clearLayers();
    if (typeof REGIONS_DATA === "undefined" || !REGIONS_DATA.dividedKingdoms) return;

    // 1. Draw Northern & Southern Kingdoms Polygons
    REGIONS_DATA.dividedKingdoms.forEach(kingdom => {
      const polygon = L.polygon(kingdom.coordinates, {
        color: kingdom.borderColor || kingdom.color,
        weight: 3.5,
        dashArray: kingdom.id === "northern-kingdom" ? "7, 5" : null,
        fillColor: kingdom.fillColor,
        fillOpacity: kingdom.fillOpacity || 0.22
      });

      polygon.bindTooltip(`
        <div style="text-align:center; min-width:200px; padding:4px;">
          <div style="font-weight:800; font-size:0.88rem; color:${kingdom.color}; text-transform:uppercase; letter-spacing:0.04em;">${kingdom.name}</div>
          <div style="font-family:'Frank Ruhl Libre', serif; font-size:1.25rem; font-weight:700; color:#1a1a1a; direction:rtl; margin:2px 0;">${kingdom.hebrew}</div>
          <div style="font-size:0.75rem; color:#444; margin:2px 0;"><strong>Capital:</strong> ${kingdom.capital}</div>
          <div style="font-size:0.72rem; color:#666; font-style:italic;">${kingdom.era}</div>
          <div style="font-size:0.7rem; color:${kingdom.color}; font-weight:700; margin-top:4px; border-top:1px solid #ddd; padding-top:2px;">Click to view full Kingdom Dossier</div>
        </div>
      `, {
        sticky: true,
        className: "ot-map-label"
      });

      polygon.on("click", (e) => {
        // If sidebar is currently open, clicking in territory closes it
        if (window.app && window.app.ui && window.app.ui.isDossierOpen()) {
          window.app.ui.closeDossier();
          if (e && e.originalEvent) L.DomEvent.stopPropagation(e);
          return;
        }
        if (e && e.originalEvent) L.DomEvent.stopPropagation(e);
        if (window.app && window.app.ui) {
          window.app.ui.showKingdomDossier(kingdom);
        }
      });

      polygon.addTo(this.layers.dividedKingdoms);

      // Add center banner badge on the map
      const labelIcon = L.divIcon({
        className: "kingdom-banner-icon",
        html: `
          <div style="background:rgba(255,253,248,0.94); border:2.5px solid ${kingdom.color}; border-radius:6px; padding:5px 10px; box-shadow:0 3px 8px rgba(0,0,0,0.3); text-align:center; white-space:nowrap; pointer-events:auto; cursor:pointer;" onclick="if(window.app && window.app.ui) window.app.ui.showKingdomDossier(REGIONS_DATA.dividedKingdoms.find(k=>k.id==='${kingdom.id}'));">
            <div style="font-size:0.72rem; font-weight:800; color:${kingdom.color}; letter-spacing:0.06em; text-transform:uppercase;">${kingdom.shortName}</div>
            <div style="font-family:'Frank Ruhl Libre', serif; font-size:1.05rem; font-weight:700; color:#1a1a1a; direction:rtl;">${kingdom.hebrew}</div>
            <div style="font-size:0.65rem; color:#555; font-weight:600;">Capital: ${kingdom.capital.split(' ')[0]} • ${kingdom.era.split(' ')[2]}</div>
          </div>
        `,
        iconAnchor: [70, 24]
      });

      const bannerMarker = L.marker(kingdom.center, { icon: labelIcon });
      bannerMarker.on("click", (e) => {
        if (e && e.originalEvent) L.DomEvent.stopPropagation(e);
        if (window.app && window.app.ui) {
          window.app.ui.showKingdomDossier(kingdom);
        }
      });
      bannerMarker.addTo(this.layers.dividedKingdoms);
    });

    // 2. Draw Historical Frontier Border Line between Israel and Judah
    if (REGIONS_DATA.kingdomBorderLine) {
      const borderLine = L.polyline(REGIONS_DATA.kingdomBorderLine, {
        color: "#D97706",
        weight: 4,
        dashArray: "4, 6",
        opacity: 0.95
      });

      borderLine.bindTooltip(`
        <div style="text-align:center; padding:3px 6px;">
          <strong style="color:#B45309; font-size:0.82rem;">⚔️ Israel–Judah Historical Frontier</strong><br>
          <span style="font-size:0.75rem; color:#333;">Contested border between Bethel (Israel) & Ramah/Mizpah (Judah)</span><br>
          <small style="color:#666;">Fortified by King Asa of Judah (1 Kings 15)</small>
        </div>
      `, { sticky: true, className: "ot-map-label" });

      borderLine.addTo(this.layers.dividedKingdoms);
    }
  }

  // Draw Biblical Journeys & Routes
  drawJourneys() {
    if (typeof JOURNEYS_DATA === "undefined") return;

    this.layers.abrahamJourney.clearLayers();
    this.layers.exodusRoute.clearLayers();
    this.layers.arkJourney.clearLayers();
    this.layers.elijahJourney.clearLayers();
    this.layers.lehiJourney.clearLayers();

    JOURNEYS_DATA.forEach(journey => {
      const coords = journey.waypoints.map(w => w.coords);
      let targetGroup = this.layers.abrahamJourney;

      if (journey.id === "exodus-route") targetGroup = this.layers.exodusRoute;
      else if (journey.id === "ark-covenant-journey") targetGroup = this.layers.arkJourney;
      else if (journey.id === "elijah-ministry") targetGroup = this.layers.elijahJourney;
      else if (journey.id === "lehi-journey") targetGroup = this.layers.lehiJourney;

      // Draw route line
      const polyline = L.polyline(coords, {
        color: journey.color,
        weight: journey.weight,
        dashArray: journey.dashArray,
        opacity: 0.85,
        smoothFactor: 1.2
      });

      polyline.bindTooltip(`
        <div>
          <strong style="color:${journey.color};">${journey.name}</strong><br>
          <span style="direction:rtl; font-family:'Frank Ruhl Libre', serif;">${journey.hebrew}</span><br>
          <small>${journey.era}</small>
        </div>
      `, { sticky: true, className: "ot-map-label" });

      polyline.addTo(targetGroup);

      // Draw numbered waypoint dots
      journey.waypoints.forEach((wp, index) => {
        const dotIcon = L.divIcon({
          className: "journey-waypoint-dot",
          html: `<div style="background:${journey.color}; color:#FFF; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:bold; border:1px solid #FFF; box-shadow:0 1px 4px rgba(0,0,0,0.3);">${index + 1}</div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        });

        const marker = L.marker(wp.coords, { icon: dotIcon });
        marker.bindPopup(`
          <div class="popup-container">
            <div class="popup-header">
              <span style="font-size:0.75rem; font-weight:700; color:${journey.color}; text-transform:uppercase;">${journey.name} • Stop ${index + 1}</span>
              <h4 style="margin:2px 0 0 0; font-family:'Cinzel', serif;">${wp.name}</h4>
            </div>
            <p class="popup-desc">${wp.note}</p>
          </div>
        `);
        marker.addTo(targetGroup);
      });
    });
  }

  // Draw Cities & Holy Sites
  drawCities() {
    this.layers.cities.clearLayers();
    this.markersMap = {};
    if (typeof CITIES_DATA === "undefined") return;

    CITIES_DATA.forEach(city => {
      let markerClass = "marker-sanctuary";
      let iconSymbol = "🏛️";

      if (city.category === "royal-city") {
        markerClass = "marker-royal-city";
        iconSymbol = "👑";
      } else if (city.category === "mountain") {
        markerClass = "marker-mountain";
        iconSymbol = "🏔️";
      } else if (city.category === "patriarch") {
        markerClass = "marker-patriarch";
        iconSymbol = "📜";
      } else if (city.category === "exile") {
        markerClass = "marker-exile";
        iconSymbol = "🏺";
      }

      const customIcon = L.divIcon({
        className: `ot-marker ${markerClass}`,
        html: `
          <div class="marker-inner" style="width:28px; height:28px; font-size:13px;" title="${city.name} (${city.hebrew})">
            ${iconSymbol}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([city.lat, city.lng], { icon: customIcon });

      // Label
      marker.bindTooltip(`
        <div style="text-align:center;">
          <strong>${city.name}</strong>
          <span class="hebrew-sub">${city.hebrew}</span>
        </div>
      `, {
        permanent: false,
        direction: "top",
        offset: [0, -14],
        className: "ot-map-label"
      });

      // Click to open 5-tab Sidebar Dossier
      marker.on("click", (e) => {
        if (e && e.originalEvent) {
          L.DomEvent.stopPropagation(e);
        }
        this.highlightSite(city.id, [city.lat, city.lng]);
        if (window.app && window.app.ui) {
          window.app.ui.openDossier(city.id);
        }
      });

      marker.addTo(this.layers.cities);
      this.markersMap[city.id] = marker;
    });
  }

  // Draw First Temple Jerusalem Inset sites
  drawJerusalemSites() {
    this.layers.jerusalemSites.clearLayers();
    if (typeof JERUSALEM_SITES === "undefined") return;

    JERUSALEM_SITES.forEach(site => {
      let iconSymbol = "🏛️";
      if (site.category === "water") iconSymbol = "💧";
      else if (site.category === "palace") iconSymbol = "👑";
      else if (site.category === "temple") iconSymbol = "✨";

      const icon = L.divIcon({
        className: "ot-marker marker-sanctuary",
        html: `<div class="marker-inner" style="width:22px; height:22px; font-size:11px;">${iconSymbol}</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      const marker = L.marker([site.lat, site.lng], { icon });
      marker.bindTooltip(`
        <div>
          <b>${site.name}</b><br>
          <span style="font-family:'Frank Ruhl Libre', serif; direction:rtl; font-weight:700;">${site.hebrew}</span>
        </div>
      `, { className: "ot-map-label" });

      marker.on("click", (e) => {
        if (e && e.originalEvent) {
          L.DomEvent.stopPropagation(e);
        }
        if (window.app && window.app.ui) {
          window.app.ui.openDossier("jerusalem");
        }
      });

      marker.addTo(this.layers.jerusalemSites);
    });
  }

  // Highlight a specific site with glowing animated pulse ring
  highlightSite(siteId, coords) {
    this.layers.activeHighlights.clearLayers();

    const pulseIcon = L.divIcon({
      className: "pulse-ring-wrapper",
      html: '<div class="pulse-ring"></div>',
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    const highlightMarker = L.marker(coords, { icon: pulseIcon, interactive: false });
    highlightMarker.addTo(this.layers.activeHighlights);
  }

  // Clear site highlight
  clearHighlight() {
    if (this.layers && this.layers.activeHighlights) {
      this.layers.activeHighlights.clearLayers();
    }
  }

  // Fly to region / location
  flyTo(coords, zoom = 9) {
    this.map.flyTo(coords, zoom, {
      duration: 1.4,
      easeLinearity: 0.25
    });
  }

  // Quick Region presets
  zoomToRegion(regionKey) {
    const REGION_COORDS = {
      "divided-kingdoms": { center: [32.05, 35.20], zoom: 8 },
      "northern-kingdom": { center: [32.48, 35.30], zoom: 9 },
      "southern-kingdom": { center: [31.55, 35.10], zoom: 9 },
      "holy-land": { center: [31.77, 35.23], zoom: 8 },
      "jerusalem": { center: [31.7767, 35.2345], zoom: 14 },
      "galilee": { center: [32.82, 35.58], zoom: 10 },
      "sinai-exodus": { center: [29.2, 33.5], zoom: 7 },
      "egypt-goshen": { center: [30.4, 31.6], zoom: 8 },
      "mesopotamia": { center: [33.5, 43.5], zoom: 6 },
      "ararat": { center: [39.7, 44.3], zoom: 7 }
    };

    if (REGION_COORDS[regionKey]) {
      const { center, zoom } = REGION_COORDS[regionKey];
      this.flyTo(center, zoom);
    }
  }

  // Filter layer toggles
  toggleLayer(layerKey, isVisible) {
    this.filterState[layerKey] = isVisible;

    const layerMapping = {
      tribes: this.layers.tribes,
      "divided-kingdoms": this.layers.dividedKingdoms,
      abraham: this.layers.abrahamJourney,
      exodus: this.layers.exodusRoute,
      ark: this.layers.arkJourney,
      cities: this.layers.cities,
      jerusalem: this.layers.jerusalemSites,
      hydrography: this.layers.hydrography,
      lehi: this.layers.lehiJourney
    };

    if (layerKey === "all") {
      Object.keys(layerMapping).forEach(key => {
        this.filterState[key] = isVisible;
        if (isVisible) {
          if (!this.map.hasLayer(layerMapping[key])) this.map.addLayer(layerMapping[key]);
        } else {
          if (this.map.hasLayer(layerMapping[key])) this.map.removeLayer(layerMapping[key]);
        }
      });
      return;
    }

        const targetLayer = layerMapping[layerKey];
    if (targetLayer) {
      if (isVisible) {
        if (!this.map.hasLayer(targetLayer)) this.map.addLayer(targetLayer);
        if (layerKey === "lehi") {
          // Pan to show Lehi and Sariah's flight from Jerusalem into the wilderness
          this.flyTo([25.0, 42.0], 5);
        }
      } else {
        if (this.map.hasLayer(targetLayer)) this.map.removeLayer(targetLayer);
      }
    }

    if (layerKey === "prophecies") {
      if (isVisible) {
        // Highlight core Messianic sanctuary sites
        const messianicSites = ["jerusalem", "bethlehem", "mount-moriah", "mount-sinai", "hebron", "shiloh"];
        messianicSites.forEach(id => {
          const c = (typeof CITIES_DATA !== "undefined") ? CITIES_DATA.find(x => x.id === id) : null;
          if (c) this.highlightSite("messianic-" + id, [c.lat, c.lng]);
        });
      } else {
        this.layers.activeHighlights.clearLayers();
      }
    }
  }
}

if (typeof window !== "undefined") {
  window.MapController = MapController;
}
