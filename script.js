/* ===========================================
   Portfolio JavaScript
   Muhammad Umar Moazzam
===========================================*/

// -----------------------------
// Loader
// -----------------------------
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// -----------------------------
// Typing Animation
// -----------------------------
const typing = document.querySelector(".typing");

const words = [
    "AI Enthusiast",
    "Flutter Developer",
    "Software Tester",
    "Computer Engineer",
    "Robotics Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// -----------------------------
// Sticky Navbar Shadow
// -----------------------------
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// -----------------------------
// Active Navigation
// -----------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

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

// -----------------------------
// Mobile Menu
// -----------------------------
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

// -----------------------------
// Scroll Reveal
// -----------------------------
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".skill-card,.project-card,.timeline-item,.cert-card,.ai-box"
).forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// -----------------------------
// Back To Top Button
// -----------------------------
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00c6ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)

        topBtn.style.display = "block";

    else

        topBtn.style.display = "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// -----------------------------
// Contact Form
// -----------------------------
const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for reaching out! I'll get back to you soon."
        );

        form.reset();

    });

}

// -----------------------------
// AI Assistant Placeholder
// -----------------------------
const chatBox = document.querySelector(".chat-placeholder");

if (chatBox) {

    chatBox.addEventListener("click", () => {

        alert(
`Future AI Assistant

This section is reserved for integrating:

• ChatGPT API
• Gemini API
• Claude API
• OpenRouter
• Your own AI Agent

Visitors will be able to ask questions about your skills, projects and experience.`
        );

    });

}

// -----------------------------
// Console Message
// -----------------------------
console.log(
"%cWelcome to Muhammad Umar Moazzam's Portfolio",
"color:#00c6ff;font-size:18px;font-weight:bold;"
);

console.log(
"%cBuilt with HTML, CSS & JavaScript",
"color:white;font-size:14px;"
);