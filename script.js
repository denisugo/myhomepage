// Constants

const buttons = document.querySelectorAll(".button a, .projects a");

const yellow = "#F7E899";

// Change Background
const changeBackground = (event, color) => {
  event.currentTarget.style.backgroundColor = color;
};

// Event listener
buttons.forEach((element) => {
  element.addEventListener("focus", (event) => changeBackground(event, yellow));
  element.addEventListener("blur", (event) => changeBackground(event, ""));

  element.addEventListener("mouseover", (event) =>
    changeBackground(event, yellow)
  );
  element.addEventListener("mouseout", (event) => changeBackground(event, ""));
});
