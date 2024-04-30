"use strict";

import "../styles/home.css";

export default function home() {
  const content = document.getElementById("content");
  const element = `
        <section id="home_container">

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
                  <img src="../images/video.svg" alt="Play Icon" id="video_icon">
                </span>
              </div>
              
            </div>

            <img src="../images/woman.svg" id="woman_img" alt="Logo">

        </section>
    `;

  content.innerHTML = element;
}