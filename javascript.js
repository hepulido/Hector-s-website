

alert("Hello, Welcome To My World!");



// Find the corresponding navigation link and add the "active-link" class
const currentPath = window.location.pathname;

// Find the corresponding navigation link and add the "active-link" class
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active-link');
  } else {
    link.classList.remove('active-link');
  }
});