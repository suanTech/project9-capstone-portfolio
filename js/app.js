
// =================== //
// hamburger nav start //
const menu = document.querySelector('.menu-icon')
const navBg = document.querySelector('.nav-bg');
const navMenu = document.querySelector('.menu-content');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav-item');

// menu open
menu.addEventListener('click', (e) => {
    navBg.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
})
// menu close
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navBg.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    })
})
//  hamburger nav end  //
// =================== //


// ===================== //
// Onscroll action start //
const heading = document.querySelector('.heading');
const banner = document.querySelector('.banner');
const heart = document.querySelector('.heart');
const heartFill = document.querySelector('.heart .fill');

//event listener for scroll
window.addEventListener('scroll', fadeInOut);
window.addEventListener('scroll', moveHeading);
function fadeInOut(e) {
    if(window.pageYOffset > 280) {
        fixBanner();
        fillHeart();
    } 
    if (window.pageYOffset < 280 || window.pageYOffset + 2 >= document.documentElement.scrollHeight - (window.innerHeight)) {
        unfixBanner();
    } 
}
function fixBanner() {
    banner.classList.add('fixed');
    heartFill.classList.remove('hidden');
}
function unfixBanner() {
    banner.classList.remove('fixed');
    heartFill.classList.add('hidden');
}
function fillHeart () {
    const offsetY = window.pageYOffset;
    const rect = document.querySelector('.fill rect')
    rect.setAttribute('y', 190 - offsetY / 16);
}
function moveHeading () {
    const offsetY = window.pageYOffset;
    heading.setAttribute('style', `transform:translateX(-${(offsetY - 40) / 1.5}vw)`)
}

// main heading color change & project reveal on scroll 
const mainHeadings = document.querySelectorAll('.sticky h2');
const projects = document.querySelectorAll('.item');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active');
        }
    })
})
projects.forEach(project => observer.observe(project));
mainHeadings.forEach(heading => observer.observe(heading));
// ===================== //
//  Onscroll action end  //

