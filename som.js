function playAudio(url) {
    let beat = new Audio(url);
    beat.play();
}

document.addEventListener("keydown", function(e){
	if (e.keyCode == 65){
		e.preventDefault();
		playAudio('keya.wav')
	}
}, false);