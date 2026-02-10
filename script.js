document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((b) => b.addEventListener("click", () => b.blur()));
});
