
//t scroll section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);
//    remove toggle icon and navbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// dark light mode
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// skills toggle
function toggleSkills(header) {
    const box = header.parentElement;
    const allBoxes = document.querySelectorAll('.skills-box');
    
    // Close other boxes (optional accordion behavior)
    allBoxes.forEach(otherBox => {
        if (otherBox !== box) {
            otherBox.classList.remove('open');
        }
    });

    box.classList.toggle('open');

    // If opening, animate circles
    if (box.classList.contains('open')) {
        const progressCircles = box.querySelectorAll('.progress-circle');
        progressCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const progress = circle.querySelector('.progress');
            const circumference = 2 * Math.PI * 30;
            const offset = circumference - (percent / 100) * circumference;
            progress.style.strokeDashoffset = offset;
        });
    }
}

// typed js
const typed = new Typed('.text', {
    strings: ['Full-Stack Developer', 'Flutter Developer', 'CS Student'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});


// scroll reval
 ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-card, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .logo', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .contact-info', { origin: 'right' });

// contact form validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            formStatus.innerHTML = "Message sent successfully! <i class='bx bx-check-circle'></i>";
            formStatus.className = "success-msg";
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.innerHTML = "";
            }, 5000);
        } else {
            formStatus.innerHTML = "Please fill in all required fields. <i class='bx bx-error-circle'></i>";
            formStatus.className = "error-msg";
        }
    });
}




