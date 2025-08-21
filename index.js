// getting the mobile menu button and its elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuButton.querySelector('i');

// toggling the mobile menu
mobileMenuButton.addEventListener('click', function() {
    // toggling hidden class
    mobileMenu.classList.toggle('hidden');
    
    // toggling the icon between hamburger and X
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
});

// this closes the mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

// this closes the mobile menu when you click outside
document.addEventListener('click', function(event) {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const toggleCircle = document.querySelector('.toggle-circle');
const html = document.documentElement;

// load whichever theme was saved
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    themeIcon.classList.add('fa-moon', 'text-slate-600');
} else {
    html.classList.remove('dark');
    themeIcon.classList.add('fa-sun', 'text-amber-500');
}

themeToggle.addEventListener('click', function() {
    const isDark = html.classList.contains('dark');

    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');

        setTimeout(() => {
            themeIcon.classList.remove('fa-moon', 'text-slate-600');
            themeIcon.classList.add('fa-sun', 'text-amber-500');
        }, 200);
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');

        setTimeout(() => {
            themeIcon.classList.remove('fa-sun', 'text-amber-500');
            themeIcon.classList.add('fa-moon', 'text-slate-600');
        }, 200);
    }
});

// auto updating the year for the copyright
document.getElementById("year").textContent = new Date().getFullYear();