const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const distanceFromTop = window.scrollY;

  if (distanceFromTop >= 200) {
    navbar.classList.add('navbar-back');
  } else {
    navbar.classList.remove('navbar-back');
  }
});