// Enhancements & interactions
document.addEventListener('DOMContentLoaded', () => {
  // --------------------------
  // Smooth scrolling (Lenis)
  // --------------------------
  let lenis;
  try {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (e) {
    // Lenis failed => fallback to native smooth
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // --------------------------
  // GSAP setup for reveal
  // --------------------------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.attribute-card').forEach((card) => {
      gsap.fromTo(card, { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Draw the nice svg path(s)
    gsap.utils.toArray('.svg-path').forEach((path) => {
      const length = path.getTotalLength ? path.getTotalLength() : 800;
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: path,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  // --------------------------
  // Mobile menu toggle
  // --------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  function setMobileNavOpen(open) {
    if (!mainNav) return;
    mainNav.classList.toggle('open', open);
    mobileMenuToggle.setAttribute('aria-expanded', String(open));
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('open');
      setMobileNavOpen(!isOpen);
    });
  }

  // Close mobile nav on link click
  mainNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMobileNavOpen(false));
  });

  // --------------------------
  // Handle SVG visibility on resize
  // --------------------------
  const handleSVGVisibility = () => {
    const complexSVGs = document.querySelectorAll('.complex-svg, .hero-visual svg, .visual-center svg');
    const mobileSVGs = document.querySelectorAll('.mobile-svg');
    if (window.innerWidth <= 768) {
      complexSVGs.forEach(s => (s.style.display = 'none'));
      mobileSVGs.forEach(s => (s.style.display = 'block'));
    } else {
      complexSVGs.forEach(s => (s.style.display = 'block'));
      mobileSVGs.forEach(s => (s.style.display = 'none'));
    }
  };
  handleSVGVisibility();
  window.addEventListener('resize', handleSVGVisibility);

  // --------------------------
  // Attribute / URL type toggles
  // --------------------------
  document.querySelectorAll('.attribute-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.attribute-option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');

      const urlType = option.dataset.urlType;
      document.querySelectorAll('.url-example').forEach(ex => ex.style.display = 'none');
      const target = document.getElementById(`${urlType}-url`);
      if (target) target.style.display = 'block';
    });
  });

  // Quote toggle
  document.querySelectorAll('.quote-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.quote-option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');

      const type = option.dataset.quote;
      document.querySelectorAll('.quote-example').forEach(x => x.style.display = 'none');
      const target = document.getElementById(`${type}-quote`);
      if (target) target.style.display = 'block';
    });
  });

  // --------------------------
  // Exercise logic
  // --------------------------
  const exerciseOptions = document.querySelectorAll('.exercise-option');
  const exerciseFeedback = document.getElementById('exerciseFeedback');

  exerciseOptions.forEach(option => {
    option.addEventListener('click', () => {
      const isCorrect = option.dataset.correct === 'true';

      exerciseOptions.forEach(opt => {
        opt.style.backgroundColor = '';
        opt.style.borderColor = '';
      });

      option.style.backgroundColor = isCorrect ? '#E8F5E9' : '#FFEBEE';
      option.style.borderColor = isCorrect ? '#00ff08ff' : '#F44336';
      // Reset all options
      exerciseOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      // Reset feedback
      if (exerciseFeedback) {
        exerciseFeedback.style.display = 'none';
      }

      // Shake effect for incorrect answer
      exerciseOptions.forEach(opt => opt.classList.remove('shake'));  

      if (!isCorrect) {
        option.classList.add('shake');
        setTimeout(() => option.classList.remove('shake'), 600);
      }

      if (exerciseFeedback) {
        exerciseFeedback.style.display = 'block';
        exerciseFeedback.firstElementChild.textContent = isCorrect
          ? 'Correct! This is the proper way to specify an attribute.'
          : 'Incorrect. The correct syntax is: <img src="img_girl.jpg">';
        exerciseFeedback.style.backgroundColor = isCorrect ? '#7fd987ff' : '#d6a8afff';
        exerciseFeedback.style.borderLeft = isCorrect ? '4px solid #00ff08ff' : '4px solid #F44336';
      }
    });
  });

  // small CSS shake fallback
  const style = document.createElement('style');
  style.innerHTML = `.shake{animation:shakeAnim 500ms linear}
    @keyframes shakeAnim{
      0%{transform:translateX(0)}25%{transform:translateX(-6px)}50%{transform:translateX(6px)}75%{transform:translateX(-4px)}100%{transform:translateX(0)}
    }`;
  document.head.appendChild(style);

  // --------------------------
  // Nav buttons behavior
  // --------------------------
  document.getElementById("next")?.addEventListener("click", () => {
    // For demonstration - smooth scroll to reference section
    const el = document.querySelector('#reference');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById("preview")?.addEventListener("click", () => {
    const el = document.querySelector('#attributes-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // --------------------------
  // Accessible keyboard shortcuts
  // --------------------------
  document.addEventListener('keydown', (e) => {
    // "/" to focus search (not implemented) - reserved
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // --------------------------
  // Focus management for deep links
  // --------------------------
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      setTimeout(() => target.focus({ preventScroll: true }), 200);
    }
  }
});