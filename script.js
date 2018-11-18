
let drums = document.querySelectorAll(".drum-pad");
for (let i of drums) {
	i.addEventListener("click", playSound)
}

function playSound(e){
	let padLetter = e.currentTarget.childNodes[1].innerHTML;

	//use text to get element by id -> audio
	//
	document.getElementById(padLetter).play()
}

document.getElementById("display").addEventListener("click", playSound)