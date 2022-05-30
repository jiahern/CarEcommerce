"use strict";

// Navbar Toggle
const overlay = document.querySelector("[data-overlay]");
const navOpenButton = document.querySelector("[data-nav-open-btn]");
const navBar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navElements = [overlay, navOpenButton, navCloseBtn];

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Filter Section Dynamic
const href = window.location.href;

// Target href search-result
const searchResults = "search-result.html";

if (href.includes(searchResults)) {
  document.querySelector("[data-filter]").style.marginTop = "2rem";
}
