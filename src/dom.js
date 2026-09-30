import pizzaIcon from "./images/pizza-icon.png";
import cokeImg from "./images/coke.png";
import spriteImg from "./images/sprite.png";
import lemonadeImg from "./images/lemonade.png";
import wingsImg from "./images/wings.png";
import garlicBreadImg from "./images/garlic-bread.png";
import friesImg from "./images/fries.png";
import margheritaImg from "./images/margherita.png";
import pepperoniImg from "./images/pepperoni.png";
import supremeImg from "./images/supreme.png";

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

export function renderMenu() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const titleDiv = document.createElement("div");
    const titleH1 = document.createElement("h1");

    titleDiv.classList.add("menu-title-container");
    titleH1.textContent = "Menu";

    titleDiv.appendChild(titleH1);
    content.appendChild(titleDiv);

    const beverages = [
        {
            name: "Coca Cola",
            description: "Ice-cold classic Coke served in a frosted glass with a slice of lime.",
            image: cokeImg,
            price: "$3.49"
        },
        {
            name: "Sprite",
            description: "Crisp lemon-lime soda, bubbly and refreshing. Perfect with spicy slices.",
            image: spriteImg,
            price: "$3.49"
        },
        {
            name: "Fresh Lemonade",
            description: "House-squeezed lemons, lightly sweetened, served over crushed ice.",
            image: lemonadeImg,
            price: "$4.99"
        }
    ];

    const sides = [
        {
            name: "Buffalo Wings",
            description: "Eight crispy wings tossed in tangy buffalo sauce with a side of ranch.",
            image: wingsImg,
            price: "$9.99"
        },
        {
            name: "Garlic Bread",
            description: "Toasted ciabatta brushed with garlic butter and fresh parsley.",
            image: garlicBreadImg,
            price: "$5.49"
        },
        {
            name: "Seasoned Fries",
            description: "Golden fries dusted with our house seasoning blend. Crispy outside, fluffy inside.",
            image: friesImg,
            price: "$4.99"
        }
    ];

    const pizzas = [
        {
            name: "Margherita",
            description: "San Marzano tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
            image: margheritaImg,
            price: "$14.99"
        },
        {
            name: "Pepperoni",
            description: "Classic pepperoni over mozzarella and tangy tomato sauce. A timeless favourite.",
            image: pepperoniImg,
            price: "$16.99"
        },
        {
            name: "Supreme",
            description: "Pepperoni, sausage, bell peppers, onions, mushrooms, and black olives.",
            image: supremeImg,
            price: "$18.99"
        }
    ];

    content.appendChild(buildSection("Beverages", "beverages-container", beverages, "beverages-item"));
    content.appendChild(buildSection("Sides", "sides-container", sides, "sides-item"));
    content.appendChild(buildSection("Pizza", "pizza-container", pizzas, "pizza-item"));
}

function buildSection(heading, containerClass, items, itemClass) {
    const section = document.createElement("div");
    const h2 = document.createElement("h2");

    section.classList.add(containerClass);
    h2.textContent = heading;

    section.appendChild(h2);

    items.forEach(item => {
        section.appendChild(buildItem(item, itemClass));
    });

    return section;
}

function buildItem(item, itemClass) {
    const wrapper = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const image = document.createElement("img");
    const price = document.createElement("p");

    wrapper.classList.add("menu-item", itemClass);
    name.classList.add("menu-item-name");
    description.classList.add("menu-item-description");
    image.classList.add("menu-item-image");
    price.classList.add("menu-item-price");

    name.textContent = item.name;
    description.textContent = item.description;
    image.src = item.image;
    image.alt = item.name;
    price.textContent = item.price;

    wrapper.appendChild(name);
    wrapper.appendChild(description);
    wrapper.appendChild(image);
    wrapper.appendChild(price);

    return wrapper;
}

export function renderContact() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const titleDiv = document.createElement("div");
    const titleH1 = document.createElement("h1");

    titleDiv.classList.add("contact-title-container");
    titleH1.textContent = "Contact Us";

    titleDiv.appendChild(titleH1);
    content.appendChild(titleDiv);

    const contacts = [
        {
            name: "Marco Bellini",
            role: "Head Chef",
            phone: "(780) 555-0142",
            email: "marco.bellini@bamspizzaria.ca"
        },
        {
            name: "Elena Rossi",
            role: "Restaurant Manager",
            phone: "(780) 555-0178",
            email: "elena.rossi@bamspizzaria.ca"
        },
        {
            name: "Daniel Okafor",
            role: "Server",
            phone: "(780) 555-0193",
            email: "daniel.okafor@bamspizzaria.ca"
        }
    ];

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    contacts.forEach(person => {
        const card = document.createElement("div");
        card.classList.add("contact-card");

        const name = document.createElement("h2");
        const role = document.createElement("h3");
        const phone = document.createElement("p");
        const email = document.createElement("p");

        name.classList.add("contact-name");
        role.classList.add("contact-role");
        phone.classList.add("contact-phone");
        email.classList.add("contact-email");

        name.textContent = person.name;
        role.textContent = person.role;
        phone.textContent = person.phone;
        email.textContent = person.email;

        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(phone);
        card.appendChild(email);

        contactContainer.appendChild(card);
    });

    content.appendChild(contactContainer);
}