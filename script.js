const hamburger = document.getElementById('hamburger');
const navlink = document.getElementById('nav-list-links');

hamburger.addEventListener('click', () => {
   
    navlink.classList.toggle('active');
    hamburger.classList.toggle('active');
});
