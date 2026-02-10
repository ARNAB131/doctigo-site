document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn, .cta");
  buttons.forEach((b) => {
    b.addEventListener("click", () => b.blur());
    b.addEventListener("mouseenter", () => {
      b.style.filter = "brightness(1.07)";
      setTimeout(() => (b.style.filter = ""), 80);
    });
  });
});
