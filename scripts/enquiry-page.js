var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// Get the modal
var modal = document.getElementById("myModal");

function test() {
  modal.style.display = "block";
}
