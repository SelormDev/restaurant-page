import navBar from "./scripts/navBar";
import home from "./scripts/home";
import about from "./scripts/about";
import logo from "./images/Logo.png";
import "../src/styles/mediaQuerry.css"

const logoImg = document.getElementById("logo");
logoImg.src = logo;

navBar();
about();
home();