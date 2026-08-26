/**
 * Tanmay Hitech - Portfolio Framework & Dark Mode System
 */

// Immediate Theme Flash Prevention (FOUC)
(function applyInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollProgress();
  initMobileDrawer();
  initLightbox();
  initMediaFilters();
  initRevealObserver();
});

/* 1. Ultra-Professional Dark Mode Toggle System */
function initDarkMode() {
  // Inject Floating Dark Mode Button if no button is found
  let toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  if (toggleBtns.length === 0) {
    const floatBtn = document.createElement('button');
    floatBtn.className = 'theme-toggle-btn fixed top-5 right-6 z-[250] shadow-lg cursor-pointer';
    floatBtn.setAttribute('aria-label', 'Toggle Dark / Light Theme');
    floatBtn.setAttribute('title', 'Toggle Dark / Light Mode');
    document.body.appendChild(floatBtn);
    toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  }

  function updateIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    toggleBtns.forEach(btn => {
      btn.innerHTML = isDark
        ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
        : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    });
  }

  updateIcons();

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcons();
    });
  });
}

/* 2. Scroll Progress Bar */
function initScrollProgress() {
  let progress = document.getElementById('scroll-progress');
  if (!progress) {
    progress = document.createElement('div');
    progress.id = 'scroll-progress';
    document.body.prepend(progress);
  }

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progress.style.width = scrolled + '%';
  }, { passive: true });
}

/* 3. Mobile Navigation Drawer */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* 4. Interactive Image Lightbox */
function initLightbox() {
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8';
    modal.innerHTML = `
      <div class="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center">
        <button id="lightbox-close" class="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-slate-400 transition-colors cursor-pointer p-2" aria-label="Close Lightbox">&times;</button>
        <img id="lightbox-img" src="" alt="Enlarged preview" class="max-h-[85vh] max-w-full object-contain rounded border border-slate-800 shadow-2xl">
        <p id="lightbox-caption" class="text-slate-300 text-sm mt-4 font-medium tracking-wide text-center"></p>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxCaption.textContent = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('img:not(.no-lightbox)').forEach(img => {
    img.classList.add('zoomable-img');
    img.title = "Click to enlarge image";
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeLightbox();
  });
}

/* 5. Media Filter System for media.html */
function initMediaFilters() {
  const filterBtns = document.querySelectorAll('.media-filter-btn');
  const mediaItems = document.querySelectorAll('.media-card');

  if (filterBtns.length === 0 || mediaItems.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });

      btn.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      btn.classList.add('bg-slate-900', 'text-white');

      const filter = btn.getAttribute('data-filter');

      mediaItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter || (filter === 'techexpo' && category.includes('techexpo'))) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'translateY(0)'; }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => { item.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* 6. Scroll Reveals */
function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* 7. 3D Card Tilt & Interactive Glare Effect */
function init3DTiltCards() {
  const cards = document.querySelectorAll('.tilt-card, .reveal.rounded-2xl');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      card.style.transition = 'transform 0.08s ease-out';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease-out';
    });
  });
}

/* 8. Live IST Time Clock & Status Indicator */
function initLiveClock() {
  const clockEl = document.getElementById('live-ist-clock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const istTimeStr = now.toLocaleTimeString('en-US', options);
    clockEl.textContent = `NEW DELHI · ${istTimeStr} IST`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* 9. Interactive Cyber Terminal Diagnostic System */
function initCyberTerminal() {
  const inputEl = document.getElementById('terminal-input');
  const outputEl = document.getElementById('terminal-output');
  const chipBtns = document.querySelectorAll('.terminal-chip');

  if (!inputEl || !outputEl) return;

  const commands = {
    help: `Available Commands:
  • cubo      - Run Cubo the Robo hardware diagnostics
  • loozars   - View Loozars streetwear brand metrics
  • lpg       - Check Smart LPG safety system specs
  • status    - View Tanmay's live ecosystem status
  • whoami    - Display developer profile & bio
  • sound     - Toggle cybernetic audio synthesizer
  • clear     - Clear terminal screen`,
    
    cubo: `[SYSTEM DIAGNOSTICS: CUBO THE ROBO]
  STATUS: ACTIVE / DEPLOYED
  TYPE: Hardware Perimeter Intrusion Security Robot
  ARCHITECTURE: ESP32 Core + Ultrasonic Array + Localized Sirens
  YEAR: 2024
  PATENT STATUS: Registered Hardware Prototype`,
    
    loozars: `[BRAND METRICS: LOOZARS]
  STATUS: OPERATIONAL
  CATEGORY: Culture & Underground Streetwear
  ESTABLISHED: 2024
  HIGHLIGHTS: Custom Drops & Industrial Aesthetic`,

    lpg: `[IOT SAFETY SPECS: SMART LPG SAFETY SYSTEM]
  STATUS: AWARD-WINNING PROTOTYPE
  PRIZE: TechExpo '25 1st Prize Winner
  HARDWARE: MQ-2 Gas Sensors + Servo Shut-off + GSM Alert Pipeline
  SAFETY LATENCY: <500ms Emergency Response`,

    status: `[TANMAY YADAV ECOSYSTEM STATUS]
  LOCATION: New Delhi, India
  STATUS: 🟢 Online & Building Future Hardware
  ROLE: Polymath · Hardware Security & Brand Innovator
  PATENT: Published (2025)`,

    whoami: `Tanmay Yadav — Innovator, Robotics Engineer, & Founder.
  Documenting the future through hardware security, IoT automation, and streetwear culture.`
  };

  function printOutput(text) {
    const p = document.createElement('p');
    p.className = 'text-slate-300 dark:text-slate-300 font-mono text-xs leading-relaxed my-1';
    p.textContent = text;
    outputEl.appendChild(p);
    outputEl.scrollTop = outputEl.scrollHeight;
    if (window.soundEngine) window.soundEngine.playTerminalKey();
  }

  function executeCommand(cmdStr) {
    const cmd = cmdStr.trim().toLowerCase();
    printOutput(`> ${cmd}`);

    if (cmd === 'clear') {
      outputEl.innerHTML = '';
      return;
    }

    if (cmd === 'sound') {
      if (window.soundEngine) {
        const state = window.soundEngine.toggleSound();
        printOutput(`Audio Synthesizer: ${state ? '🔊 ENABLED' : '🔇 DISABLED'}`);
      }
      return;
    }

    if (commands[cmd]) {
      printOutput(commands[cmd]);
    } else if (cmd !== '') {
      printOutput(`Command not recognized: '${cmd}'. Type 'help' for available commands.`);
    }
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputEl.value);
      inputEl.value = '';
    }
  });

  chipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

/* 8. Glowing Magnetic Custom Cursor Follower */
function initCustomCursor() {
  if (window.innerWidth < 1024 || 'ontouchstart' in window) return;

  const cursorDot = document.createElement('div');
  cursorDot.id = 'custom-cursor-dot';
  const cursorRing = document.createElement('div');
  cursorRing.id = 'custom-cursor-ring';

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover expansion on interactive elements
  const interactives = document.querySelectorAll('a, button, input, textarea, .media-card, .theme-toggle-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.classList.add('hovered');
      cursorDot.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('hovered');
      cursorDot.classList.remove('hovered');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init3DTiltCards();
  initLiveClock();
  initCyberTerminal();
  initTextClickTracker();
  initCustomCursor();
});
