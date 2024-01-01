// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        console.log('Navbar class added');
    } else {
        header.classList.remove('navbar-fixed');
        console.log('Navbar class removed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbarMenu = document.querySelector('#navbar-menu');


hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active');
   navbarMenu.classList.toggle('hidden');
});