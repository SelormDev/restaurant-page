"use strict";

export default function home() {
    const content = document.getElementById("content");
    const element = `
        <div class="home">
            <h1>Welcome to our restaurant</h1>
            <p>Our restaurant is the best in town. We serve the best food and drinks. We have the best chefs in town. We have the best service in town. We have the best atmosphere in town. We have the best customers in town. We have the best prices in town. We have the best location in town. We have the best parking in town. We have the best restrooms in town. We have the best everything in town. We are the best restaurant in town. We are the best restaurant in the world. We are the best restaurant in the universe. We are the best restaurant in the galaxy. We are the best restaurant in the cosmos. We are the best restaurant in the multiverse. We are the best restaurant in the omniverse. We are the best restaurant in the metaverse. We are the best restaurant in the megaverse. We are the best restaurant in the hyperverse. We are the best restaurant in the ultraverse. We are the best restaurant in the xenoverse
            </p>
        </div>
    `;

    content.innerHTML = element;
}