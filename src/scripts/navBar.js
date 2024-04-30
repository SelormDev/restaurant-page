import "../styles/index.css";
import "../styles/navBar.css"
import "../styles/content.css"
import home from "./home";
import menu from "./menu";
import about from "./about";

export default function navBar() {

    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu")
    const aboutBtn = document.getElementById("about")



    homeBtn.addEventListener("click", home)
    menuBtn.addEventListener("click", menu)
    aboutBtn.addEventListener("click", about)

}






