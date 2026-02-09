// Keep minimal. (You can add animations later if you want.)
document.addEventListener("DOMContentLoaded", () => {
  // Example: smooth focus on button click (optional)
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      b.blur();
    });
  });
});
