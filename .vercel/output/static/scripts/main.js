// JavaScript para manejar los enlaces y acciones
document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll('.btn-outline-light, .btn-success');

  projectLinks.forEach(link => {
    link.addEventListener('click', () => {
      window.open(link.href, '_blank');
    });
  });
});
document.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;
  document.querySelector(".parallax-bg").style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
