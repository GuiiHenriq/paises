export default function initAnimateScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  const windowHeight = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - windowHeight) < 0;
      if (sectionVisible) {
        section.classList.add('active');
      }
    });
  }

  if (sections.length) {
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}
