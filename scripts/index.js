let nav = document.querySelector('.main-nav');

const toggleStates = (elem, selector) => {
  !elem.classList.contains(selector) ?
  elem.classList.add(selector) :
  elem.classList.remove(selector);
}

toggleStates(nav, 'main-nav--hide');

const navBurgerButton = document.querySelector('.page-header__burger');

navBurgerButton.addEventListener('click', (evt) => {
  console.log(navBurgerButton.children);
  Array.from(navBurgerButton.children).forEach(item => toggleStates(item, 'page-header__burger--hidden'))
  toggleStates(nav, 'main-nav--hide');
})



