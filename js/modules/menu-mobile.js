export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuClose = document.querySelector('[data-menu="close"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const linksMenu = document.querySelectorAll('[data-menu="list"] li');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
  }

  function closeMenu() {
    menuButton.classList.remove('active');
    menuList.classList.remove('active');
  }

  if (menuButton) {
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });

    let i = 0;

    if (i, i < linksMenu.length, i++) {
      linksMenu[i].addEventListener('click', closeMenu);
    }

    eventos.forEach((userEvent) => {
      menuClose.addEventListener(userEvent, closeMenu);
    });
  }
}
