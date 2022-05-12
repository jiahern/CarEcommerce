function buttonClick(buttonElement) {
  var message = "Hey you clicked " + buttonElement.textContent;
  console.log(message);
  alert(message);
  if (buttonElement.textContent.trim() == "Yo1") {
    alert("Special alert!");
  }
}

// const getData = (pageUrl) => {
// return new Promise((resolve, reject) => {
// let request = new XMLHttpRequest();
// request.onload = function() {
// if (this.readyState === 4 && this.status === 200) {
// resolve(this.responseText);
// } else {
// reject(this.responseText);
// }
// };
// request.open("get", pageUrl);
// request.send();
// });
// }

// function loadPage(pageUrl) {
// getData(pageUrl)
// .then((resolve) => {
// console.log(resolve);
// document.getElementById("inner-content").innerHTML = resolve;
// })
// .catch((reject) => {
// console.log(reject);
// })
// }

window.addEventListener("popstate", (event) => {
  // loadPage(event.state.pageUrl);
  $("#inner-content").load(event.state.pageUrl);
});

window.addEventListener("DOMContentLoaded", (event) => {
  var buttonsList = document.getElementsByClassName("button");
  for (const button of buttonsList) {
    button.addEventListener("click", function (event) {
      buttonClick(event.target);
    });
  }

  var linksList = document.getElementsByClassName("nav-link");
  for (const linkElement of linksList) {
    linkElement.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      // loadPage(event.target.getAttribute("href"));
      $("#inner-content").load(event.target.getAttribute("href"));
      var pageId = event.target.getAttribute("pageId");
      history.pushState(
        { pageUrl: event.target.getAttribute("href"), pageId: pageId },
        pageId,
        "?=" + pageId
      );
    });
  }
});
