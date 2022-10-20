function activeBurgerMenu() {
  let isActive = false;
  const burgerIcon = document.querySelector('.material-symbols-outlined');
  const navLinks = document.querySelector('.nav__links');
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

activeBurgerMenu();
