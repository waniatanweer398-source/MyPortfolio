/* ==========================
   TYPING ANIMATION
========================== */

const typingText = document.querySelector(".typing");

const professions = [
  "Frontend Developer",
  "UI / UX Enthusiast",
  "React Developer",
  "Creative Coder",
  "Website Designer"
];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentProfession = professions[professionIndex];

  if (!deleting) {

    typingText.textContent =
      currentProfession.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentProfession.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentProfession.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      professionIndex++;

      if (professionIndex === professions.length) {
        professionIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* ==========================
   CURSOR GLOW EFFECT
========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);
revealElements();


/* ==========================
   DEVELOPER RING ROTATION
========================== */

const ring = document.querySelector(".ring");

window.addEventListener("scroll", () => {

  const scrollPosition = window.scrollY;

  ring.style.transform =
    `translate(-50%, -50%) rotate(${scrollPosition * 0.08}deg)`;

});


/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(11,17,32,0.92)";

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.2)";

  } else {

    navbar.style.background =
      "rgba(11,17,32,0.7)";

    navbar.style.boxShadow =
      "none";

  }

});


/* ==========================
   MOBILE MENU
========================== */

const hamburger =
  document.querySelector(".hamburger");

const navLinks =
  document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  if (
    navLinks.style.display === "flex"
  ) {

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";

    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "10%";
    navLinks.style.flexDirection = "column";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "15px";
    navLinks.style.background = "#111827";
    navLinks.style.gap = "20px";

  }

});


/* ==========================
   EMAILJS CONTACT FORM
========================== */

/*
REPLACE THESE WITH
YOUR EMAILJS VALUES
*/

emailjs.init("tUFV1JqvqvKO2fIek");

const contactForm =
  document.getElementById("contact-form");

const formMessage =
  document.getElementById("form-message");

contactForm.addEventListener(
  "submit",
  function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_a4lnp12",
      "template_9ni7cyk",
      this
    )

    .then(() => {

      formMessage.innerHTML =
        "✅ Message sent successfully!";

      formMessage.style.color =
        "#38BDF8";

      contactForm.reset();

    })

    .catch((error) => {

      console.log(error);

      formMessage.innerHTML =
        "❌ Failed to send message.";

      formMessage.style.color =
        "#ff6b6b";

    });

  }
);


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach((link) => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active-link");

    }

  });

});


/* ==========================
   SMOOTH PAGE LOAD
========================== */

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});