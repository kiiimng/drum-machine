
let drums = document.querySelectorAll(".drum-pad");
for (let i of drums) {
	i.addEventListener("click", playSound);
	i.addEventListener("transitionend", removeClass);
}

function playSound(e){
	this.childNodes[3].currentTime = 0;
	this.childNodes[3].play();
	this.childNodes[1].classList.add("playing");0
	document.getElementById("display").innerHTML = this.id
}


function keySound(e) {
	const eventKey = e.key.toUpperCase();
	const audio = document.getElementById(eventKey)
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	audio.parentNode.childNodes[1].classList.add("playing");
 }

document.addEventListener('keydown', keySound);

function removeClass(e){
	if (e.propertyName !== "font-size") return;
	this.childNodes[1].classList.remove("playing")

}


//display sounds in display div