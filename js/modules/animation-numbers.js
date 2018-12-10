export default function initAnimationNumbers() {
  function animationNumbers() {
    const numbers = document.querySelectorAll('[data-statistic]');

    numbers.forEach((number) => {
      const total = +number.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animationNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.statistics');
  observer.observe(observeTarget, { attributes: true });
}
