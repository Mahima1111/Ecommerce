const customizeBtn = document.getElementById("customizeBtn");
const colorPicker = document.getElementById("colorPicker");

customizeBtn.addEventListener("click", () => {
  colorPicker.click(); // opens the color picker
});

colorPicker.addEventListener("input", (e) => {
  const newColor = e.target.value;

  // Update theme color variable
  document.documentElement.style.setProperty('--theme-color', newColor);
});
