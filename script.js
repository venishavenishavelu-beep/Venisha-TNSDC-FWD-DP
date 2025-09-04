// Smooth scrolling

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href'))

      .scrollIntoView({ behavior: 'smooth' });

  });

});

// Mobile menu toggle

const menuToggle = document.getElementById('menu-toggle');

const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {

  nav.classList.toggle('show');

});

// Back to Top button

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {

    backToTop.style.display = 'block';

  } else {

    backToTop.style.display = 'none';

  }

});

backToTop.addEventListener('click', () => {

  window.scrollTo({ top: 0, behavior: 'smooth' });

});