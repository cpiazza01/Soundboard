document.addEventListener("click", function(event) {
  switch (event.target.innerHTML) {
    case "Don't Do It":
      var danDies = new Audio("sounds/dan-dies.mp3");
      danDies.play();
      break;
    case "Ow":
      var chrisOw = new Audio("sounds/chris-ow.mp3");
      chrisOw.play();
      break;
    case "Don Ama Ma Did":
      var jesusDon = new Audio("sounds/don-ama-ma-did.mp3");
      jesusDon.play();
      break;
      case "Oh!":
        var timOh = new Audio("sounds/tim-oh.mp3");
        timOh.play();
        break;
      case "I Don't Wanna":
        var dontWanna= new Audio("sounds/tim-i-dont-wanna.mp3");
        dontWanna.play();
        break;
        case "How Did This Happen?":
          var timHow = new Audio("sounds/tim-how-did-this-happen.mp3");
          timHow.play();
          break;
    default:
      console.log(event.target.innerHTML);
  }
})
