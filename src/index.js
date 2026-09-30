import "./style.css";
import { renderHome, renderMenu, renderContact } from "./dom.js";

const homeBtn = document.querySelector("nav button:nth-child(1)");
const menuBtn = document.querySelector("nav button:nth-child(2)");
const aboutBtn = document.querySelector("nav button:nth-child(3)");

homeBtn.addEventListener("click", renderHome);
menuBtn.addEventListener("click", renderMenu);
aboutBtn.addEventListener("click", renderContact);

renderHome()