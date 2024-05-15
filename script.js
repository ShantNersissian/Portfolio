window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (window.scrollY > heroHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});