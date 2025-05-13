// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.querySelector('.theme-toggle i');
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// tsParticles
tsParticles.load("tsparticles", {
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 80 },
    color: { value: "#007bff" },
    links: {
      enable: true,
      distance: 150,
      color: "#007bff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: "out"
    },
    size: { value: 2 },
    opacity: { value: 0.4 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  fullScreen: { enable: false }
});
