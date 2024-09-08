// const hamburger = document.getElementById('hamburger');
// const navlink = document.getElementById('nav-list-links');

// hamburger.addEventListener('click', () => {
   
//     navlink.classList.toggle('active');
//     hamburger.classList.toggle('active');
// });


const hamburger = document.getElementById('hamburger');
const responsiveNav = document.querySelector('.responsive-nav');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class for both hamburger and responsive nav
    responsiveNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // If you want to hide the nav-list-links on mobile, you can keep it as display none
    // document.getElementById('nav-list-links').style.display = 'none';
});
