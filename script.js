// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Subtle parallax blob movement on mouse move
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const blob1 = document.querySelector(".blob1");
  const blob2 = document.querySelector(".blob2");
  if (blob1) blob1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
  if (blob2) blob2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
});
