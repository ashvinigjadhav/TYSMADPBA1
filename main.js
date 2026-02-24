const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active-link'));
  this.classList.add('active-link');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

const headerH1 = document.querySelector(".header__container h1");
if (headerH1) {
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });
}

// Location Modal functionality
function openLocationModal() {
    document.getElementById('locationModal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for closing modal when clicking X
    const closeButton = document.querySelector('#locationModal .close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('locationModal').style.display = 'none';
        });
    }

    // Event listener for closing modal when clicking outside
    window.addEventListener('click', function(event) {
        const locationModal = document.getElementById('locationModal');
        if (event.target == locationModal) {
            locationModal.style.display = 'none';
        }
    });
});
const headerForm = document.querySelector(".header__container form");
if (headerForm) {
  ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
  });
}
const headerImg = document.querySelector(".header__container img");
if (headerImg) {
  ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
  });
}

const rangeCards = document.querySelector(".range__card");
if (rangeCards) {
  ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
  });
}

const locationImg = document.querySelector(".location__image img");
if (locationImg) {
  ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
}
const locationHeader = document.querySelector(".location__content .section__header");
if (locationHeader) {
  ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
}
const locationP = document.querySelector(".location__content p");
if (locationP) {
  ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
}
const locationBtn = document.querySelector(".location__content .location__btn");
if (locationBtn) {
  ScrollReveal().reveal(".location__content .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
}

const mainSwiperContainer = document.querySelector(".swiper");

if (mainSwiperContainer) {
  const selectCards = document.querySelectorAll(".select__card");
  if (selectCards.length > 0) {
    selectCards[0].classList.add("show__info");
  }

  const price = ["225", "455", "275", "625", "395"];

  const priceEl = document.getElementById("select-price");

  function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
      const index = args && args[0].realIndex;
      if (priceEl) {
        priceEl.innerText = price[index];
      }
      selectCards.forEach((item) => {
        item.classList.remove("show__info");
      });
      if (selectCards[index]) {
        selectCards[index].classList.add("show__info");
      }
    }
  }

  const swiper = new Swiper(mainSwiperContainer, {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 500,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },

    onAny(event, ...args) {
      updateSwiperImage(event, args);
    },
  });
}

// Modal functionality
const authModal = document.getElementById("authModal");
const getStartedBtn = document.querySelector(".nav__btn .btn");
const closeButton = document.querySelector(".close-button");
const showRegisterLink = document.getElementById("showRegister");
const showLoginLink = document.getElementById("showLogin");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

if (getStartedBtn && authModal && loginForm && registerForm) {
  getStartedBtn.addEventListener("click", () => {
    authModal.style.display = "flex";
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });
}

if (closeButton && authModal) {
  closeButton.addEventListener("click", () => {
    authModal.style.display = "none";
  });
}

if (showRegisterLink && loginForm && registerForm) {
  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });
}

if (showLoginLink && registerForm && loginForm) {
  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });
}

if (authModal) {
  window.addEventListener("click", (e) => {
    if (e.target == authModal) {
      authModal.style.display = "none";
    }
  });
}

if (document.querySelector(".story__card")) {
  ScrollReveal().reveal(".story__card", {
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    interval: 100,
  });
}

const banner = document.querySelector(".banner__wrapper");

if (banner) {
  const bannerContent = Array.from(banner.children);

  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}

const downloadImg = document.querySelector(".download__image img");
if (downloadImg) {
  ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
}
const downloadHeader = document.querySelector(".download__content .section__header");
if (downloadHeader) {
  ScrollReveal().reveal(".download__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
}
const downloadLinks = document.querySelector(".download__links");
if (downloadLinks) {
  ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1000,
  });
}

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__data, .range__data, .featured__container, .offer__data, .footer__container");
sr.reveal(".home__img", { origin: "bottom" });
sr.reveal(".range__card, .offer__card", { interval: 300 });
sr.reveal(".discount__data", { origin: "left" });
sr.reveal(".discount__img", { origin: "right" });