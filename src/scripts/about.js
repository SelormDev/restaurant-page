"use strict";

import "../styles/about.css"
import image1 from "../../images/fi-rr-gift.svg";
import image2 from "../../images/fi-rr-time-fast.svg";
import image3 from "../../images/fi-rr-shopping-cart-check.svg";
import image4 from "../../images/fi-rr-salad.svg";

export default function about() {
    const content = document.getElementById("content");
    const element = `
     <div class="about_section" id="about_section">

            <div class="about_message id="about_message">
                <h1>OUR STORY &amp; SERVICES</h1>
                <h2>Our Culinary Journey And Services</h2>

                <p> Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality. </p>

                <button> Explore </button>
            </div>

            <div id="about_cards">

                <div class="card upper-left">
                    <img src=${image1} alt="Logo  ">
                    <h2> Catering</h2>
                    <p> Delight your guests with our flavors and  presentation </p>
                </div>
                <div class="card upper-right">
                    <img src=${image2} alt="">
                    <h2> Fast delivery</h2>
                    <p> We deliver your order promptly to your door </p>
                </div>
                <div class="card lower-left">
                    <img src=${image3} alt="">
                    <h2> Online Ordering</h2>
                    <p>Explore menu & order with ease using our Online Ordering </p>
                </div>
                <div class="card lower-right">
                    <img src=${image4} alt="">
                    <h2> Gift Cards</h2>
                    <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>

            </div>

        </div>
    `;


    content.innerHTML = element;
}