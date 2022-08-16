const displayedText = document.querySelector('h2');
document.addEventListener("keydown", function(event) {
	let audio;
	if(event.code == "KeyA") {
		audio = new Audio("sounds/A.mp3");
		audio.play();
		displayedText.textContent = "You pressed A!";
	} else if(event.code == "KeyS") {
		audio = new Audio("sounds/S.mp3");
		audio.play();
		displayedText.textContent = "You pressed S!";
	} else if(event.code == "KeyD") {
		audio = new Audio("sounds/D.mp3");
		audio.play();
		displayedText.textContent = "You pressed D!";
	} else if(event.code == "KeyF") {
		audio = new Audio("sounds/F.mp3");
		audio.play();
		displayedText.textContent = "You pressed F!";
	} else if(event.code == "KeyG") {
		audio = new Audio("sounds/G.mp3");
		audio.play();
		displayedText.textContent = "You pressed G!";
	} else if(event.code == "KeyH") {
		audio = new Audio("sounds/H.mp3");
		audio.play();
		displayedText.textContent = "You pressed H!";
	} else if(event.code == "KeyJ") {
		audio = new Audio("sounds/J.mp3");
		audio.play();
		displayedText.textContent = "You pressed J!";
	} else if(event.code == "KeyW") {
		audio = new Audio("sounds/W.mp3");
		audio.play();
		displayedText.textContent = "You pressed W!";
	} else if(event.code == "KeyE") {
		audio = new Audio("sounds/E.mp3");
		audio.play();
		displayedText.textContent = "You pressed E!";
	} else if(event.code == "KeyT") {
		audio = new Audio("sounds/T.mp3");
		audio.play();
		displayedText.textContent = "You pressed T!";
	} else if(event.code == "KeyY") {
		audio = new Audio("sounds/Y.mp3");
		audio.play();
		displayedText.textContent = "You pressed Y!";
	} else if(event.code == "KeyU") {
		audio = new Audio("sounds/U.mp3");
		audio.play();
		displayedText.textContent = "You pressed U!";
	} else {
		displayedText.textContent = "No sound will play if you don't press any of the displayed letters!";
	}
});