/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

// ===============================
// NAVBAR SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(15,23,42,.7)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".section, .project-card");

function reveal() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// BACK TO TOP
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

Object.assign(topButton.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#3b82f6",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    transition: ".3s",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.getElementById("typing");

const texts = [

    "Frontend Developer",

    "Web Developer",

    "Mobile Developer",

    "UI Enthusiast"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const current = texts[textIndex];

    if (!deleting) {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typingEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typingEffect, deleting ? 50 : 100);

}

typingEffect();

// ===============================
// PROJECT HOVER
// ===============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(59,130,246,.20),
            #1e293b 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1e293b";

    });

});

// ===============================
// CURRENT YEAR
// ===============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Tsani Nur Sya'bani`;