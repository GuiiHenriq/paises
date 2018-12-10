export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');

  function openModal(event) {
    event.preventDefault();
    modal.classList.add('active');
  }

  function closeModal(event) {
    event.preventDefault();
    modal.classList.remove('active');
  }

  function clickCloseModal(event) {
    if (event.target === this) {
      closeModal(event);
    }
  }

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', clickCloseModal);
}
