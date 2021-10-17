function vollbild() {

  var element = document.getElementsByTagName("video")[0];

  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }

}

var url = window.location.href;
if (url.includes("www.bet365.")){
	console.log("I am in bet365. Looking for videos");
	vollbild();
} else{
	console.log("I am not on bet365!");
}