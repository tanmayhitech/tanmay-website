/**
 * Tanmay Hitech - Interactive Innovation Solar System Engine (HITECH CORE VERSION)
 */

document.addEventListener('DOMContentLoaded', () => {
  initSolarSystem();
});

function initSolarSystem() {
  const container = document.getElementById('solar-ecosystem-container');
  if (!container) return;

  const planetData = [
    {
      id: 'cubo',
      name: 'Cubo the Robo',
      category: 'Robotics & Hardware Security',
      year: '2025',
      badge: 'TechExpo 1st Prize',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 fill-current" viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2v1h4a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h4V4a2 2 0 012-2zm-3 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6 5h6v-1.5H9V15z"/></svg>`,
      startAngle: 0,
      speed: 0.042, // Fastest Inner Planet
      rxFactor: 0.36,
      ryFactor: 0.35,
      desc: 'Hardware-first intrusion detection system with real-time localized alerts and physical perimeter security.',
      link: 'cubo-the-robo.html',
      tags: ['Hardware', 'Robotics', 'Sensors']
    },
    {
      id: 'loozars',
      name: 'Loozars Brand',
      category: 'Culture & Streetwear Fashion',
      year: '2024',
      badge: 'Co-Founded Brand',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      startAngle: 60,
      speed: 0.030, // Fast Inner Orbit
      rxFactor: 0.48,
      ryFactor: 0.46,
      desc: 'Culture-first clothing brand focusing on storytelling, expressive graphics, and authentic streetwear drops.',
      link: 'loozars.html',
      tags: ['Fashion', 'Branding', 'Design']
    },
    {
      id: 'lpg',
      name: 'Smart LPG System',
      category: 'IoT & Emergency Automation',
      year: '2026',
      badge: 'IoT Safety System',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 fill-current" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 7a3 3 0 013 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 013-3z"/></svg>`,
      startAngle: 120,
      speed: 0.020, // Medium Orbit
      rxFactor: 0.60,
      ryFactor: 0.57,
      desc: 'ESP32 IoT gas leak detection with servo automatic shut-off valve and real-time Telegram notifications.',
      link: 'lpg.html',
      tags: ['IoT', 'ESP32', 'Telegram API']
    },
    {
      id: 'patent',
      name: 'Patent Published',
      category: 'Intellectual Property & IP',
      year: '2025',
      badge: 'Official IP Record',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 fill-current" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>`,
      startAngle: 180,
      speed: 0.013, // Moderate Outer Orbit
      rxFactor: 0.72,
      ryFactor: 0.68,
      desc: 'Published hardware security and automated safety system patent documentation.',
      link: 'media.html',
      tags: ['Patent', 'Documentation', 'IP']
    },
    {
      id: 'awards',
      name: 'MSME & TechExpo Winner',
      category: 'Major Innovation Awards',
      year: '2025',
      badge: 'Hackathon & 1st Prize',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      startAngle: 240,
      speed: 0.008, // Slow Outer Orbit
      rxFactor: 0.84,
      ryFactor: 0.79,
      desc: 'Recognized at MSME Idea Hackathon 5.0, TiE U Pitching, and 1st prize at TechExpo 2025.',
      link: 'media.html',
      tags: ['MSME', 'TechExpo', 'TiE U']
    },
    {
      id: 'media',
      name: 'Media Features',
      category: 'Press Coverage & News',
      year: '2025',
      badge: 'Dainik Jagran & News18',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 fill-current" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
      startAngle: 300,
      speed: 0.004, // Slowest Outer Orbit
      rxFactor: 0.95,
      ryFactor: 0.90,
      desc: 'Featured twice in Dainik Jagran, Hindustan, Amar Ujala, News18 Hindi, and ETV Bharat.',
      link: 'media.html',
      tags: ['Dainik Jagran', 'News18', 'Hindustan']
    }
  ];

  // Render 100% Centered Responsive Viewport Structure
  container.innerHTML = `
    <!-- Glassmorphic Detail Panel (Mobile Top Panel + Desktop Far Right Floating Card) -->
    <div id="solar-detail-card" class="solar-card hidden relative md:absolute w-full md:w-80 lg:w-96 max-w-2xl md:max-w-none mx-auto md:mx-0 mb-6 md:mb-0 md:bottom-2 md:-right-16 lg:-right-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xl md:shadow-2xl transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-none z-50">
      <button id="solar-card-close" class="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white text-xl font-bold p-1 cursor-pointer" aria-label="Close card">&times;</button>
      <div class="flex items-center gap-3 mb-3">
        <div id="solar-card-icon" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center"></div>
        <div>
          <span id="solar-card-badge" class="text-[9px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-300 dark:border-slate-700 block mb-1"></span>
          <h4 id="solar-card-title" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight"></h4>
        </div>
      </div>
      <p id="solar-card-desc" class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4"></p>
      <div id="solar-card-tags" class="flex flex-wrap gap-1.5 mb-5"></div>
      <a id="solar-card-link" href="#" class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-0.5 hover:opacity-75 transition-opacity">
        Explore Project →
      </a>
    </div>

    <div class="solar-wrapper relative w-full max-w-5xl aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] min-h-[320px] sm:min-h-[480px] mx-auto flex items-center justify-center overflow-visible py-4 select-none">
      
      <!-- Starry Dust Ambient Effect -->
      <div class="solar-stars absolute inset-0 opacity-30 pointer-events-none"></div>

      <!-- Main Dynamic Responsive Viewport -->
      <div id="solar-viewport" class="relative w-full h-full max-w-[850px] max-h-[500px] min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
        
        <!-- SVG Layer for Dynamic Elliptical Orbit Rings -->
        <svg id="solar-svg-layer" class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          ${planetData.map(planet => `
            <ellipse cx="500" cy="300" rx="${planet.rxFactor * 500}" ry="${planet.ryFactor * 300}"
                     class="stroke-slate-400 dark:stroke-slate-600/50 fill-none transition-colors duration-300"
                     stroke-width="1.8" stroke-dasharray="5 7" />
          `).join('')}
        </svg>

        <!-- CENTRAL PULSING ELECTRIC CORE EMBLEM -->
        <div id="fusion-core" class="solar-core z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-full cursor-pointer group select-none touch-none active:scale-100" style="transform: translate(-50%, -50%) !important;">
          <div class="core-pulse absolute -inset-3 sm:-inset-4 rounded-full border border-amber-400/30 dark:border-amber-300/30 animate-ping opacity-40 pointer-events-none"></div>
          <div class="core-glow absolute inset-0 rounded-full bg-slate-950/95 dark:bg-slate-900/90 backdrop-blur-2xl border-2 border-amber-500/50 dark:border-amber-400/60 shadow-[0_0_40px_rgba(251,191,36,0.35)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95"></div>
          <div class="absolute inset-1 rounded-full border border-dashed border-amber-400/40 dark:border-amber-300/40 animate-spin-slow pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-center pointer-events-none">
            <svg class="w-6 h-6 sm:w-9 sm:h-9 text-amber-400 fill-current filter drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
        </div>

        <!-- Render Planet Nodes Initial HTML -->
        ${planetData.map(planet => `
          <button id="planet-node-${planet.id}" data-planet="${planet.id}" aria-label="${planet.name}"
                  class="planet-node absolute z-40 pointer-events-auto -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950/95 backdrop-blur-md border border-slate-700 dark:border-slate-500 shadow-2xl hover:scale-135 hover:border-white transition-transform duration-300 cursor-pointer touch-manipulation">
            <span class="text-sm sm:text-xl pointer-events-none transform group-hover:scale-125 transition-transform">${planet.icon}</span>
            <span class="absolute -bottom-8 whitespace-nowrap bg-slate-950/95 text-white text-[9px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl border border-slate-700">
              ${planet.name}
            </span>
          </button>
        `).join('')}

      </div>
    </div>
  `;

  // Dynamic Viewport Dimensions & Responsive Math
  const viewport = document.getElementById('solar-viewport');
  let isPaused = false;
  let speedMultiplier = 1;
  let lastOpenTimestamp = 0;

  const planetAngles = planetData.map(p => (p.startAngle * Math.PI) / 180);

  function animateOrbits() {
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Minimum radius clearance so planets NEVER overlap with center core
    const isSmallMobile = rect.width < 500;
    const minRx = isSmallMobile ? 75 : 115;
    const minRy = isSmallMobile ? 65 : 100;

    planetData.forEach((planet, idx) => {
      const nodeEl = document.getElementById(`planet-node-${planet.id}`);
      if (!nodeEl) return;

      if (!isPaused) {
        planetAngles[idx] += planet.speed * speedMultiplier * 0.05;
      }

      const angle = planetAngles[idx];
      const rx = Math.max((rect.width / 2) * planet.rxFactor, minRx * (idx + 1) * 0.45);
      const ry = Math.max((rect.height / 2) * planet.ryFactor, minRy * (idx + 1) * 0.45);

      // Exact Trigonometric Elliptical Path
      const x = centerX + rx * Math.cos(angle);
      const y = centerY + ry * Math.sin(angle);

      const scale = 0.85 + 0.3 * Math.sin(angle);
      const opacity = 0.75 + 0.25 * Math.sin(angle);

      nodeEl.style.left = `${x}px`;
      nodeEl.style.top = `${y}px`;
      nodeEl.style.zIndex = Math.round(100 + 50 * Math.sin(angle));
      nodeEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
      nodeEl.style.opacity = opacity;
    });

    requestAnimationFrame(animateOrbits);
  }

  animateOrbits();

  // Detail Modal & Interactive Handlers
  const card = document.getElementById('solar-detail-card');
  const cardClose = document.getElementById('solar-card-close');
  const cardIcon = document.getElementById('solar-card-icon');
  const cardBadge = document.getElementById('solar-card-badge');
  const cardTitle = document.getElementById('solar-card-title');
  const cardDesc = document.getElementById('solar-card-desc');
  const cardTags = document.getElementById('solar-card-tags');
  const cardLink = document.getElementById('solar-card-link');
  const fusionCore = document.getElementById('fusion-core');

  function showPlanetDetails(planetId) {
    const planet = planetData.find(p => p.id === planetId);
    if (!planet) return;

    isPaused = true;
    lastOpenTimestamp = Date.now();
    if (window.soundEngine) window.soundEngine.playChime(600, 1100, 0.15);

    if (cardIcon) cardIcon.innerHTML = planet.icon;
    if (cardBadge) cardBadge.textContent = planet.category;
    if (cardTitle) cardTitle.textContent = planet.name;
    if (cardDesc) cardDesc.textContent = planet.desc;
    if (cardTags) cardTags.innerHTML = planet.tags.map(t => `<span class="text-[8px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700">${t}</span>`).join('');
    if (cardLink) cardLink.href = planet.link;

    if (card) {
      card.classList.remove('hidden');
      void card.offsetWidth; // Force reflow for smooth transition
      card.classList.remove('translate-y-2', 'opacity-0', 'pointer-events-none');
      card.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
    }
  }

  function hidePlanetDetails() {
    isPaused = false;
    if (card) {
      card.classList.add('translate-y-2', 'opacity-0', 'pointer-events-none');
      card.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      setTimeout(() => {
        if (!isPaused && card) {
          card.classList.add('hidden');
        }
      }, 300);
    }
  }

  // Debounced HITECH CORE Alignment (Zero Flicker)
  let lastCoreTap = 0;
  if (fusionCore) {
    const triggerCoreAlignment = (e) => {
      const now = Date.now();
      if (now - lastCoreTap < 400) return;
      lastCoreTap = now;

      if (window.soundEngine) window.soundEngine.playShockwave();

      // Trigger Cosmic Visual Shockwave Ripple
      const shockwave = document.createElement('div');
      shockwave.className = 'absolute w-16 h-16 rounded-full border-2 border-sky-400 dark:border-white opacity-100 pointer-events-none z-20';
      shockwave.style.left = '50%';
      shockwave.style.top = '50%';
      shockwave.style.transform = 'translate(-50%, -50%) scale(1)';
      shockwave.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
      if (viewport) viewport.appendChild(shockwave);
      setTimeout(() => {
        shockwave.style.transform = 'translate(-50%, -50%) scale(12)';
        shockwave.style.opacity = '0';
      }, 15);
      setTimeout(() => shockwave.remove(), 850);

      hidePlanetDetails();

      // Align all planets in 1 single horizontal line (0 rad)
      for (let i = 0; i < planetAngles.length; i++) {
        planetAngles[i] = 0;
      }

      speedMultiplier = 2.5;
      setTimeout(() => { speedMultiplier = 1; }, 2000);
    };

    fusionCore.addEventListener('click', triggerCoreAlignment);
  }

  // Fixed Discrete 6-Level Orbit Rings Engine & Speed Mapping
  const orbitLevels = [
    { level: 1, rx: 0.26, ry: 0.22, speed: 0.042 },
    { level: 2, rx: 0.38, ry: 0.32, speed: 0.030 },
    { level: 3, rx: 0.52, ry: 0.44, speed: 0.020 },
    { level: 4, rx: 0.66, ry: 0.56, speed: 0.013 },
    { level: 5, rx: 0.80, ry: 0.70, speed: 0.008 },
    { level: 6, rx: 0.94, ry: 0.85, speed: 0.004 }
  ];

  // Assign initial discrete orbit levels & speeds to each planet (1 to 6)
  planetData.forEach((p, idx) => {
    p.currentOrbitLevel = idx + 1;
    p.rxFactor = orbitLevels[idx].rx;
    p.ryFactor = orbitLevels[idx].ry;
    p.speed = orbitLevels[idx].speed;
  });

  const svgLayer = document.getElementById('solar-svg-layer');

  function updatePlanetSvgRing(planetIndex) {
    if (!svgLayer) return;
    const ellipses = svgLayer.querySelectorAll('ellipse');
    if (ellipses[planetIndex] && planetData[planetIndex]) {
      ellipses[planetIndex].setAttribute('rx', planetData[planetIndex].rxFactor * 500);
      ellipses[planetIndex].setAttribute('ry', planetData[planetIndex].ryFactor * 300);
    }
  }

  function updateAllSvgRings() {
    planetData.forEach((_, idx) => updatePlanetSvgRing(idx));
  }

  function highlightOrbitRing(level) {
    if (!svgLayer) return;
    const ellipses = svgLayer.querySelectorAll('ellipse');
    ellipses.forEach((ell, idx) => {
      if (idx === level - 1) {
        ell.classList.add('orbit-ring-highlight');
      } else {
        ell.classList.remove('orbit-ring-highlight');
      }
    });
  }

  function clearOrbitRingHighlights() {
    if (!svgLayer) return;
    svgLayer.querySelectorAll('ellipse').forEach(ell => ell.classList.remove('orbit-ring-highlight'));
  }

  // Swap Orbit Level & Speed between sourcePlanet and targetLevel
  function swapPlanetOrbitLevel(planetIndex, newTargetLevel) {
    const sourcePlanet = planetData[planetIndex];
    if (!sourcePlanet || sourcePlanet.currentOrbitLevel === newTargetLevel) return;

    const oldLevel = sourcePlanet.currentOrbitLevel;
    const targetPlanet = planetData.find(p => p.currentOrbitLevel === newTargetLevel);

    // Update Source Planet (New Level & Physics Speed)
    sourcePlanet.currentOrbitLevel = newTargetLevel;
    const targetConfig = orbitLevels[newTargetLevel - 1];
    sourcePlanet.rxFactor = targetConfig.rx;
    sourcePlanet.ryFactor = targetConfig.ry;
    sourcePlanet.speed = targetConfig.speed;

    // Update Occupying Target Planet (Swapped Level & Physics Speed)
    if (targetPlanet) {
      targetPlanet.currentOrbitLevel = oldLevel;
      const oldConfig = orbitLevels[oldLevel - 1];
      targetPlanet.rxFactor = oldConfig.rx;
      targetPlanet.ryFactor = oldConfig.ry;
      targetPlanet.speed = oldConfig.speed;
    }

    updateAllSvgRings();
  }

  // Interactive Sticky Drag & Drop Physics
  let activeDragPlanetIndex = -1;
  let dragStartPos = { x: 0, y: 0 };
  let isDraggingMoved = false;

  container.querySelectorAll('.planet-node').forEach((btn, idx) => {
    // 1. Double Click to Shift to Next Orbit Ring
    btn.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const currentLevel = planetData[idx].currentOrbitLevel;
      const nextLevel = (currentLevel % 6) + 1;
      swapPlanetOrbitLevel(idx, nextLevel);
      highlightOrbitRing(nextLevel);
      setTimeout(clearOrbitRingHighlights, 600);
    });

    // 2. Mouse/Touch Sticky Drag Start
    const handleDragStart = (clientX, clientY) => {
      activeDragPlanetIndex = idx;
      dragStartPos = { x: clientX, y: clientY };
      isDraggingMoved = false;
      btn.classList.add('planet-dragging');
      highlightOrbitRing(planetData[idx].currentOrbitLevel);
    };

    btn.addEventListener('mousedown', (e) => handleDragStart(e.clientX, e.clientY));

    btn.addEventListener('touchstart', (e) => {
      if (e.touches[0]) handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    btn.addEventListener('click', (e) => {
      if (isDraggingMoved) return; // Prevent card trigger if dragging
      e.stopPropagation();
      const planetId = btn.getAttribute('data-planet');
      showPlanetDetails(planetId);
    });

    btn.addEventListener('mouseenter', () => {
      if (activeDragPlanetIndex === -1) {
        const planetId = btn.getAttribute('data-planet');
        showPlanetDetails(planetId);
      }
    });
  });

  // Global Drag Motion & Target Magnet Snapping
  function processDragMove(clientX, clientY) {
    if (activeDragPlanetIndex === -1 || !viewport) return;

    const dx = clientX - dragStartPos.x;
    const dy = clientY - dragStartPos.y;
    if (Math.sqrt(dx * dx + dy * dy) > 8) {
      isDraggingMoved = true;
    }

    const rect = viewport.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distFromCenter = Math.sqrt(Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2));
    const maxRadius = rect.width / 2;
    const currentRatio = Math.min(1.0, Math.max(0.15, distFromCenter / maxRadius));

    // Find nearest Orbit Level (1 to 6)
    let closestLevel = 1;
    let minDiff = Infinity;
    orbitLevels.forEach(ob => {
      const diff = Math.abs(ob.rx - currentRatio);
      if (diff < minDiff) {
        minDiff = diff;
        closestLevel = ob.level;
      }
    });

    highlightOrbitRing(closestLevel);

    if (closestLevel !== planetData[activeDragPlanetIndex].currentOrbitLevel) {
      swapPlanetOrbitLevel(activeDragPlanetIndex, closestLevel);
    }
  }

  const handleDragRelease = () => {
    if (activeDragPlanetIndex !== -1) {
      container.querySelectorAll('.planet-node').forEach(btn => btn.classList.remove('planet-dragging'));
      activeDragPlanetIndex = -1;
      setTimeout(clearOrbitRingHighlights, 400);
    }
  };

  window.addEventListener('mousemove', (e) => processDragMove(e.clientX, e.clientY));
  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) processDragMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  window.addEventListener('mouseup', handleDragRelease);
  window.addEventListener('touchend', handleDragRelease);

  if (cardClose) {
    cardClose.addEventListener('click', (e) => {
      e.stopPropagation();
      hidePlanetDetails();
    });
  }

  document.addEventListener('click', (e) => {
    if (Date.now() - lastOpenTimestamp < 200) return;
    if (card && !card.contains(e.target) && !e.target.closest('.planet-node') && !e.target.closest('#fusion-core')) {
      hidePlanetDetails();
    }
  });
}
