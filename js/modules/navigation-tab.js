export default function initNavigationTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active');
    });
    tabContent[index].classList.add('active');
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
