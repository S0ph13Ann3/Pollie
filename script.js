var fullItemList = document.getElementById("my-list");
var cursor = document.getElementById("cursor");


if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
}


function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}