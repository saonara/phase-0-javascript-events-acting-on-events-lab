const dodger = document.querySelector("#dodger");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  let currentLeft = parseInt(dodger.style.left.replace("px", ""), 10);
  dodger.style.left = `${currentLeft + 1}px`;
}

function moveDodgerLeft() {
  let currentLeft = parseInt(dodger.style.left.replace("px", ""), 10);
  dodger.style.left = `${currentLeft - 1}px`;
}
