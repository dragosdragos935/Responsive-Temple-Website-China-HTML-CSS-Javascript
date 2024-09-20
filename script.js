// GSAP Animation
gsap.from(".image-1", 1.2, {
  opacity: 0,
  y: 150,
  delay: 0.6,
  ease: "back.out(2)",
});
gsap.from(".image-2", 1.2, { opacity: 0, y: 150, delay: 0.6 });
gsap.from(".image-3", 1.2, {
  opacity: 0,
  y: 150,
  delay: 1.5,
  ease: "back.out(4)",
});
gsap.from("h1", 1.2, { opacity: 0, y: -80, delay: 1.4 });
gsap.from("h3", 1.2, { opacity: 0, y: -80, delay: 1.4 });
gsap.from("p", 1.2, { opacity: 0, y: -80, delay: 1.25 });
gsap.from("button", 1.2, { opacity: 0, y: -80, delay: 1 });

// Toggle Menu Function
const menu = document.querySelector(".menu");
const tolggle = document.getElementById("toggle");

tolggle.onclick = function () {
  menu.classList.toggle("active");
};
