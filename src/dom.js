import pizzaIcon from "./images/pizza-icon.png";

export function renderHome() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const titleDiv = document.createElement("div");
    const titleEm = document.createElement("em");
    const titleImg = document.createElement("img");

    titleDiv.classList.add("title-container");
    titleEm.textContent = "Bams Pizzaria";
    titleImg.src = pizzaIcon;
    titleImg.alt = "Bams Pizzaria logo";

    titleDiv.appendChild(titleEm);
    titleDiv.appendChild(titleImg);

    const reviewDiv = document.createElement("div");
    const reviewP = document.createElement("p");
    const reviewEm = document.createElement("em");

    reviewDiv.classList.add("review-container");
    reviewP.textContent = `Their pizza is simply one of the best! The overall environment and staff are so nice and there are so many types of pizza to choose from. Did I forget to mention that there is a play area for kids, so there's just something for everyone here. I'll be sure to let my friends and family know of this fine establishment.`;
    reviewEm.textContent = "Matthew B";

    reviewDiv.appendChild(reviewP);
    reviewDiv.appendChild(reviewEm);

    const scheduleDiv = document.createElement("div");
    const scheduleH2 = document.createElement("h2");

    scheduleDiv.classList.add("schedule-container");
    scheduleH2.textContent = "Hours";

    scheduleDiv.appendChild(scheduleH2);

    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ];

    hours.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        scheduleDiv.appendChild(p);
    });

    const locationDiv = document.createElement("div");
    const locationH2 = document.createElement("h2");
    const locationP = document.createElement("p");

    locationDiv.classList.add("location-container");
    locationH2.textContent = "Location";
    locationP.textContent = "3245 49 AVE NW, Edmonton";

    locationDiv.appendChild(locationH2);
    locationDiv.appendChild(locationP);

    content.appendChild(titleDiv);
    content.appendChild(reviewDiv);
    content.appendChild(scheduleDiv);
    content.appendChild(locationDiv);
}