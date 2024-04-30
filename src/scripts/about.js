"use strict";

import "../styles/about.css"

export default function about() {
    const content = document.getElementById("content");
    const element = `
     <div id="about">

            <div id="about_message">
                <h1>OUR STORY &amp; SERVICES</h1>
                <h2>Our Culinary Journey And Services</h2>

                <p> Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality. </p>

                <button> Explore </button>
            </div>

            <div id="about_cards">

                <div class="card upper-left">
                    <img src="../../images/fi-rr-gift.svg" alt="">
                    <h2> Catering</h2>
                    <p> Delight your guests with our flavors and  presentation </p>
                </div>
                <div class="card upper-right">
                    <img src="../../images/fi-rr-time-fast.svg" alt="">
                    <h2> Fast delivery</h2>
                    <p> We deliver your order promptly to your door </p>
                </div>
                <div class="card lower-left">
                    <img src="../../images/fi-rr-shopping-cart-check.svg" alt="">
                    <h2> Online Ordering</h2>
                    <p>Explore menu & order with ease using our Online Ordering </p>
                </div>
                <div class="card lower-right">
                    <img src="../../images/fi-rr-salad.svg" alt="">
                    <h2> Gift Cards</h2>
                    <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>

            </div>

        </div>
    `;

    content.innerHTML = element;
}