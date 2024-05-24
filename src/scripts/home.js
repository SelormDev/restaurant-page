"use strict";

import "../styles/home.css";
import woman from "../../images/woman.svg";
import video from "../../images/video.svg";

export default function home() {
  const content = document.getElementById("content");
  const element = `
        <section class="home_container" id="home_container">

            <div class="home_text_container">
              <h1 id="home_title">
                Dive into Delights <br>
                Of Delectable
                <span class="green">Food<span>
              </h1>

              <p id="home_description">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
              </p>
              
              <div class="button_container">
  
                <button id="home_button">Order Now</button>
  
                <p> Watch now </p>
                <span id="video_icon_container">
                  <img src=${video} alt="Play Icon" id="video_icon">
                </span>
              </div>
              
            </div>

            <img src=${woman} class="woman_img" id="woman_img" alt="Logo">

        </section>
    `;

  content.innerHTML = element;
}