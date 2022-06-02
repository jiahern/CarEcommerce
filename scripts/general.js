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

// Filter Modal
// Modal
var modal = document.getElementById("myModal");

// get the close button
var close = document.getElementById("close");

// Change the modal title according to clicked button
var modalTitle = document.querySelector("[data-modal-title]");

function popupModal() {
  modal.style.display = "block";
}

// Close the modal when x is clicked
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};