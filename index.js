let isActive = false;
const burgerIcon = document.querySelector('.material-symbols-outlined');
const navLinks = document.querySelector('.nav__links');
function activeBurgerMenu() {
  burgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('isActive');
    isActive = !isActive;
    if (isActive) {
      burgerIcon.textContent = 'close';
    } else {
      burgerIcon.textContent = 'menu';
    }
  });
}

function closeBurgerOnClick() {
  const navLink = document.querySelectorAll('.nav__link');
  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      if (isActive) {
        isActive = !isActive;
        navLinks.classList.remove('isActive');
        burgerIcon.textContent = 'menu';
      }
    });
  });
}

activeBurgerMenu();
closeBurgerOnClick();
