// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Hover effect for contact links
document.querySelectorAll('#contact ul li a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = 'red';
    });

    link.addEventListener('mouseout', function () {
        this.style.color = '#007bff';
    });
});












document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function(skillBar) {
        const level = skillBar.dataset.level;
        skillBar.style.setProperty('--level', level);
    });
});
























