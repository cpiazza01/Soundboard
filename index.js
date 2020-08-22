document.addEventListener("click", function(event) {
  switch (event.target.innerHTML) {
    case "Don't Do It":
      var danDies = new Audio("sounds/dan-dies.mp3");
      danDies.play();
      break;
    case "Heres What I'm Gonna Do":
      var danGonnaDo = new Audio("sounds/dan-gonna-do.mp3");
      danGonnaDo.play();
      break;
    case "I Thought It Was Funny":
      var danFunny = new Audio("sounds/dan-funny.mp3");
      danFunny.play();
      break;
    case "Do it Now":
      var mikeDoItNow = new Audio("sounds/mike-do-it-now.mp3");
      mikeDoItNow.play();
      break;
    case "So Funny":
      var mikeSoFunny = new Audio("sounds/mike-so-funny.mp3");
      mikeSoFunny.play();
      break;
      5
    case "Freaking Out":
      var mikeFreakingOut = new Audio("sounds/mike-freaking-out.mp3");
      mikeFreakingOut.play();
      break;
    case "Navy":
      var navy = new Audio("sounds/mike-navy.mp3");
      navy.play();
      break;
    case "Covid":
      var mikeCovid = new Audio("sounds/mike-covid.mp3");
      mikeCovid.play();
      break;
    case "Lightning":
      var zachLightning = new Audio("sounds/zach-lightning.mp3");
      zachLightning.play();
      break;
    case "The Hell":
      var zachTheHell = new Audio("sounds/zach-the-hell.mp3");
      zachTheHell.play();
      break;
    case "Oh!":
      var timOh = new Audio("sounds/tim-oh.mp3");
      timOh.play();
      break;
    case "I Don't Wanna":
      var dontWanna = new Audio("sounds/tim-i-dont-wanna.mp3");
      dontWanna.play();
      break;
    case "How Did This Happen?":
      var timHow = new Audio("sounds/tim-how-did-this-happen.mp3");
      timHow.play();
      break;
    case "Don Ama Ma Did":
      var jesusDon = new Audio("sounds/don-ama-ma-did.mp3");
      jesusDon.play();
      break;
    case "Ow":
      var chrisOw = new Audio("sounds/chris-ow.mp3");
      chrisOw.play();
      break;
      case "Galgamesh":
        var galgamesh = new Audio("sounds/galgamesh.mp3");
        galgamesh.play();
        break;
    default:
      console.log(event.target.innerHTML);
  }
})
