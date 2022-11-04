const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
	generateJoke();
});

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch(
		"https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com",
		config
	);
	const yes = await res.json();
	jokeEl.innerHTML = yes.joke;
}

/* function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	fetch(
		"https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com",
		config
	)
		.then((res) => res.json())
		.then((data) => {
			jokeEl.innerHTML = data.joke;
		});
} */

person = { name: "Smart", age: 60 };
console.log(person["name"]);
let x = (0.2 * 10 + 0.7 * 10) / "20";
console.log(isNaN(x));
let y = NaN;
let v = 5;
let c = v + y;
console.log(typeof NaN);

let myBall = 32.75;
while (myBall != Infinity) {
	myBall = myBall * myBall;
	console.log(myBall);
}

let a = -7 / 0;
console.log(typeof Infinity);
console.log(0xff);

console.log(Math.round(myBall.toString(12)));
console.log(Math.round(myBall.valueOf()));
console.log((88.5785).toExponential(2));
let i = 5679.853;
console.log(i.toFixed(2));
console.log(parseFloat(myBall));
let r = new Date("2017-09-30");
console.log(Number(r));
