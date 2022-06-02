// Modal
var modal = document.getElementById("myModal");

// get the close button
var close = document.getElementById("close");

//
var modalTitle = document.querySelector("[data-modal-title]");

function popupModal(n) {
  if (n === 0) {
    modalTitle.innerHTML = "Add Car A";
  } else if (n === 1) {
    modalTitle.innerHTML = "Add Car B";
  }
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

const carA = document.querySelectorAll("[data-car-a]");
const carB = document.querySelectorAll("[data-car-b]");
const carA_Add = document.querySelector("[data-car-a-add");
const carB_Add = document.querySelector("[data-car-b-add");

// Trigger for Car A
function triggerCarA() {
  for (let i = 0; i < carA.length; i++) {
    carA[i].style.display = "block";
  }
  carA_Add.style.display = "none";
}

// Trigger for Car B
function triggerCarB() {
  for (let i = 0; i < carB.length; i++) {
    carB[i].style.display = "block";
  }

  carB_Add.style.display = "none";
}

function selectCarA() {
  triggerCarA();
  modal.style.display = "none";
}

function selectCarB() {
  triggerCarB();
  modal.style.display = "none";
}
