
//Mobile-Navigation
const mobile_nav = document.querySelector('.header__mobile-navigation');

const navigation = document.querySelector('.header__navigation');

mobile_nav.addEventListener('click', (e) => {
    e.preventDefault();
    if (navigation.style.display == 'flex') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
})
