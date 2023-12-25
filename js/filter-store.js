const filters = document.querySelectorAll('.item-fil')
const filters1 = document.querySelectorAll('.item-fil1')
const filters2 = document.querySelectorAll('.item-fil2')

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', () => {
    document.querySelector('.store-filter__item-active').classList.toggle('store-filter__item-active')
    filters[i].classList.toggle('store-filter__item-active')
  })
}

for (let i = 0; i < filters1.length; i++) {
  filters1[i].addEventListener('click', () => {
    let active = document.querySelector('.store-filter__item-active1')
    if (active) {
      active.classList.toggle('store-filter__item-active1')
    }
    filters1[i].classList.toggle('store-filter__item-active1')
  })
}
 
for (let i = 0; i < filters2.length; i++) {
  filters2[i].addEventListener('click', () => {
    let active = document.querySelector('.store-filter__item-active2')
    if (active) {
      active.classList.toggle('store-filter__item-active2')
    }
    filters2[i].classList.toggle('store-filter__item-active2')
  })
}
