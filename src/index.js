import "./index.css";
import "./navBar.css"
// import navBar from "./navBar";
import home from "./home";
import menu from "./menu";
import about from "./about";

function component() {
    const content = document.getElementById("content");
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu")
    const aboutBtn = document.getElementById("about")

    homeBtn.addEventListener("click", home)
    menuBtn.addEventListener("click", menu)
    aboutBtn.addEventListener("click", about)

    home() // default page

}

component()

