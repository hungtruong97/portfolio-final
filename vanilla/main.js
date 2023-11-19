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
