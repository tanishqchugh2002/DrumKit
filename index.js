for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    makesound(this.innerHTML);
  butnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function () {
  makesound(event.key.toLowerCase());
  butnimation(event.key.toLowerCase());
});

function makesound(key) {
  switch (key) {
    case "w":
      var t = new Audio("sounds/tom-1.mp3");
      t.play();
      break;
    case "a":
      var t = new Audio("sounds/tom-2.mp3");
      t.play();
      break;
    case "s":
      var t = new Audio("sounds/tom-3.mp3");
      t.play();
      break;
    case "d":
      var t = new Audio("sounds/tom-4.mp3");
      t.play();
      break;
    case "j":
      var t = new Audio("sounds/crash.mp3");
      t.play();
      break;
    case "k":
      var t = new Audio("sounds/kick-bass.mp3");
      t.play();
      break;
    case "l":
      var t = new Audio("sounds/snare.mp3");
      t.play();
      break;
    default:
      alert("Wrong key pressed");
  }

}
function butnimation(lal){

    document.querySelector("." + lal).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+lal).classList.remove("pressed")
    }, 100);
}
