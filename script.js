window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const homeHeight = document.querySelector('.home').offsetHeight;

    if (window.scrollY > homeHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});
