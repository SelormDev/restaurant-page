"use strict";

export default function about() {
    const content = document.getElementById("content");
    const element = `
     <div class="about">
            <h1>About</h1>
            <p>
                This is an about Section
            </p>
        </div>
    `;

    content.innerHTML = element;
}