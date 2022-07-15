"use strict";

window.onload = function () {
  // Page loaded
  //
  // Scroll To Top Button Section
  document.addEventListener("scroll", handleScroll);

  // Get the scroll button
  var scrollTopBtn = document.querySelector("[scrollTopButton]");

  function handleScroll() {
    var scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const triggerRatio = 0.3;

    if (document.documentElement.scrollTop / scrollHeight > triggerRatio) {
      //show button
      scrollTopBtn.style.display = "block";
    } else {
      //hide button
      scrollTopBtn.style.display = "none";
    }
  }

  scrollTopBtn.addEventListener("click", scrollToTop);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  //
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
  const searchResults = "search-result";

  // If the file has text of "search-result" then it will change the margin
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
};
