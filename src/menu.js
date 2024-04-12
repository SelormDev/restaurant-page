"use strict";

export default function menu() {
    const content = document.getElementById("content");
    const element = `
        <div class="menu">
            <h1>Menu</h1>
            <ul>
                <li>Appetizers</li>
                <li>Main Course</li>
                <li>Desserts</li>
                <li>Drinks</li>
            </ul>
        </div>
    `;

    content.innerHTML = element;
}