const sounds = ["numOne", "numTwo", "numThree", "numFour", "numFive", "numSix"];
sounds.forEach((sound) => {
	const buttons = document.getElementById("buttons");
	const btn = document.createElement("button");
	btn.classList.add("btn");
	buttons.append(btn);
	btn.innerText = sound;
	btn.addEventListener("click", () => {
		stopPlay();
		document.getElementById(sound).play();
	});
});
function stopPlay() {
	sounds.forEach((sound) => {
		document.getElementById(sound).pause();
	});
}
/* const sounds = ["numOne", "numTwo", "numThree", "numFour", "numFive", "numSix"];
sounds.forEach((sound) => {
	// const buttons = document.getElementById("buttons");
	const btn = document.createElement("button");
	buttons.append(btn);
	btn.innerText = sound;
	btn.classList.add("btn");
	btn.addEventListener("click", () => {
		stopPlay();
		document.getElementById(sound).play();
	});
});

function stopPlay() {
	sounds.forEach((sound) => {
		document.getElementById(sound).pause();
	});
} */
// const sounds = ["numOne", "numTwo", "numThree", "numFour", "numFive", "numSix"];
// sounds.forEach((sound) => {
// 	const btn = document.createElement("button");
// 	// sound.appendEl
// 	btn.classList.add("btn");
// 	btn.innerText = sound;

// 	document.getElementById("buttons").appendChild(btn);
// 	btn.addEventListener("click", () => {
// 		stopPlay();
// 		document.getElementById(sound).play();
// 	});
// });
// function stopPlay() {
// 	sounds.forEach((sound) => {
// 		const song = document.getElementById(sound);
// 		song.pause();
// 		song.currentTime = 0;
// 	});
// }
