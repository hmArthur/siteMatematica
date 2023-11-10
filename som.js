function playAudio(url, key) {
    let beat = new Audio(url);
    beat.play();

	const tecla = document.querySelector("."+key);
	console.log(key)
	tecla.style.backgroundColor = "red"
	
	setTimeout(function(){ 
		tecla.style.backgroundColor = "grey"
	}, 3000);
}

document.addEventListener("keydown", function(e){
	//a
    if (e.keyCode == 65){
		e.preventDefault();
		playAudio('keya.wav', 'keya')
	}
    
    //c
    if (e.keyCode == 67){
		e.preventDefault();
		playAudio('keyc.wav', 'keyc')
	}

    //d
    if (e.keyCode == 68){
		e.preventDefault();
		playAudio('keyd.wav', 'keye')
	}

    //e
    if (e.keyCode == 69){
		e.preventDefault();
		playAudio('keye.wav', 'keye')
	}

    //q
    if (e.keyCode == 81){
		e.preventDefault();
		playAudio('keyq.wav', 'keyq')
	}

    //s
    if (e.keyCode == 83){
		e.preventDefault();
		playAudio('keys.wav', 'keys')
	}

    //w
    if (e.keyCode == 87){
		e.preventDefault();
		playAudio('keyw.wav', 'keyw')
	}

    //x
    if (e.keyCode == 88){
		e.preventDefault();
		playAudio('keyx.wav', 'keyx')
	}

    //z
    if (e.keyCode == 90){
		e.preventDefault();
		playAudio('keyz.wav', 'keyz')
	}
}, false);