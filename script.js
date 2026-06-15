// Smooth scroll برای لینک‌های منو
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// تغییر رنگ هدر وقتی اسکرول می‌کنی (افکت حرفه‌ای‌تر)
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
  }
});


// فرم تماس
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;

    alert("Thanks " + name + "! Your message has been sent.");

    form.reset();
  });
}
