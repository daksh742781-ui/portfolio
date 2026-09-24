const body = document.body;
const toggleButton = document.querySelector('.theme-toggle');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const activeTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', activeTheme);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});
