const burger = document.querySelector('.adaptive-menu__wrapper')
const close_menu = document.querySelector('.close-filter')
const bg = document.querySelector('.bg')
const filter = document.querySelector('.filter')

burger.addEventListener('click', () => {
  close_menu.classList.add('active__all')
  bg.classList.add('active__all')
  filter.classList.add('filter-active')
})

close_menu.addEventListener('click', () => {
  close_menu.classList.remove('active__all')
  bg.classList.remove('active__all')
  filter.classList.remove('filter-active')
})

bg.addEventListener('click', () => {
  close_menu.classList.remove('active__all')
  bg.classList.remove('active__all')
  filter.classList.remove('filter-active')
})
