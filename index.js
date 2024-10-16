//declaring the hamburger button and menu as constants
const hamburger_button = document.getElementById("hamburger_button");
const menu_div = document.getElementById("menu_div");
const menu_text = document.getElementsByClassName("menu_text")

// Add event listener to toggle the menu visibility
hamburger_button.addEventListener('click', () => {
  menu_div.classList.toggle('show');
});

