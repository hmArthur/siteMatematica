function playAudio(url, key) {
    let beat = new Audio(url);
    beat.play();

	const tecla = document.querySelector("."+key);
	tecla.style.backgroundColor = "red"
}

document.addEventListener("keydown", function(e){
	//a
    if (e.keyCode == 65){
		e.preventDefault();
		playAudio('keya.wav')
	}
    
    //c
    if (e.keyCode == 67){
		e.preventDefault();
		playAudio('keyc.wav')
	}

    //d
    if (e.keyCode == 68){
		e.preventDefault();
		playAudio('keyd.wav')
	}

    //e
    if (e.keyCode == 69){
		e.preventDefault();
		playAudio('keye.wav')
	}

    //q
    if (e.keyCode == 81){
		e.preventDefault();
		playAudio('keyq.wav')
	}

    //s
    if (e.keyCode == 83){
		e.preventDefault();
		playAudio('keys.wav')
	}

    //w
    if (e.keyCode == 87){
		e.preventDefault();
		playAudio('keyw.wav')
	}

    //x
    if (e.keyCode == 88){
		e.preventDefault();
		playAudio('keyx.wav')
	}

    //z
    if (e.keyCode == 90){
		e.preventDefault();
		playAudio('keyz.wav')
	}
}, false);