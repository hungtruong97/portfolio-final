import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const app = document.querySelector("#app");

const toggleMenu = () => {
  const menuOverlay = document.querySelector(".menu_overlay");
  menuOverlay.classList.toggle("open");
};

const closeMenuButton = document.querySelector(".closeMenuButton");
closeMenuButton.addEventListener("click", toggleMenu);

const hamburgerMenuButton = document.querySelector(".hamburger");
hamburgerMenuButton.addEventListener("click", toggleMenu);

// Theme toggler
const themeToggleButton = document.getElementById("themeToggler");
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : localStorage.setItem("theme", "light");
document.documentElement.setAttribute("data-theme", currentTheme);

themeToggleButton.addEventListener("click", () => {
  let theme = "light"; // default to light
  if (document.documentElement.getAttribute("data-theme") === "light") {
    theme = "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme); // store theme preference in local storage
});
