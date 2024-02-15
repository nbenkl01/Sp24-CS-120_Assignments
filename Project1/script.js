// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
console.log(header)
console.log(footer)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=10) {
        footer.classList.add('footerDark');
        header.classList.add('navbarDark');
    }else {
        header.classList.remove('navbarDark');
        footer.classList.remove('footerDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})