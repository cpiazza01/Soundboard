
document.addEventListener("click", function(event) {
  console.log(event.target.innerHTML);
  if (event.target.innerHTML === "Don't Do It") {
    danDies.play();
  }
})

var danDies = new Audio("sounds/dan-dies.mp3");
danDies.play();
