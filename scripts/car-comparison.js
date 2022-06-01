// Modal
var modal = document.getElementById("myModal");

function popupModal() {
  modal.style.display = "block";
}

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
