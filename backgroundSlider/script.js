/* const backgrounds = document.querySelectorAll(".bg");
console.log(backgrounds);
const body = document.body;
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
let currentSlide = 0;
rightBtn.addEventListener("click", () => {
	currentSlide++;
	if (currentSlide > backgrounds.length - 1) {
		currentSlide = 0;
	}
	console.log(currentSlide);
	update();
});

leftBtn.addEventListener("click", () => {
	crureintSlde--;
	if (currentSlide < 0) {
		currentSlide = backgrounds.length - 1;
	}
	console.log(currentSlide);

	update();
});
update();

function update() {
	body.style.backgroundImage = backgrounds[currentSlide].style.backgroundImage;
	backgrounds.forEach((background, idx) => {
		if (idx !== currentSlide) {
			background.classList.remove("active");
		} else {
			background.classList.add("active");
		}
		// alternative to the lines above
		// background.classList.remove("active");
		// backgrounds[currentSlide].classList.add("active");
	});
}
 */

let statement = 'Elon Musk\'s company is a "partner" of the government';
console.log(statement.toLowerCase());
let text = "Please visit TESLA.com, TESLA.com";

let newText = text.replace(/tesla.com/gi, "voogon.com");
console.log(newText);

let text1 = "56";
let padded = text1.padStart(6, "x");
let list = "1|2|3|4,5, 6, 7";
console.log(list.split(", "));

let str = "Please locate where 'locate' occurs  ";
let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match(/ain/gi));
console.log(text3.endsWith("the", 37));

const cars = ["Saab", "Volvo", "Benz", "Jaguar"];
console.log(cars[cars.length - 1]);
console.log(cars.sort());
let text4 = "<ul>";
cars.forEach(myFunction);
text4 += "</ul>";
function myFunction(value) {
	text4 += "<li>" + value + "</li>";
}
console.log(text4);

cars.push("Rolls Royce");
console.log(cars);
str.toUpperCase();
console.log(str);

cars[cars.length] = "Kia";
console.log(cars);

cars[19] = "Porsche";
console.log(cars);
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
const points = new Array(40);
console.log(points[0]);

console.log(Array.isArray(points));
console.log(cars instanceof Array);
console.log(cars.join());
console.log(cars.pop());
console.log(cars);
console.log(cars.push("Innoson", "FORD"));
cars.shift();
console.log(cars.unshift("Mustang"));
// console.log(cars);
console.log(cars.toString());
delete cars[1];
console.log(cars);
cars2 = ["Chevrolet", "Cardillac", "Lada"];
console.log(cars.concat(cars2));

const arr1 = ["Cecille", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
console.log(arr1.concat(arr2, arr3));
console.log(arr1.concat("Peter"));
console.log(cars);
console.log(cars.splice(3, 2, "Honda", "Passat"));
console.log(cars.splice(4, 1));
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
pointss = [40, 100, 1, 5, 25, 10];
console.log(
	pointss.sort(function (a, b) {
		return b - a;
	})
);

console.log(
	pointss.sort(function () {
		return 0.5 - Math.random();
	})
);

for (let i = pointss.length - 1; i > 0; i--) {
	let j = Math.floor(Math.random() * (i + 1));
	let k = pointss[i];
	pointss[i] = pointss[j];
	pointss[j] = k;
}

console.log(pointss);
pointss.sort(function (a, b) {
	return b - a;
});
console.log(pointss);
console.log(pointss[pointss.length - 1]);
function myArrayMax(arr) {
	return Math.max.apply(null, arr);
}
console.log(myArrayMax(pointss));

const carss = [
	{ type: "Volvo", year: 2016 },
	{ type: "Saab", year: 2001 },
	{ type: "BMW", year: 2010 },
];

carss.sort(function (a, b) {
	return a.year - b.year;
});

console.log(carss[0].type + " " + carss[0].year);

const numberss = [45, 4, 9, 16, 25];
let txt = "";
numberss.forEach(myFunction);
console.log(txt);
function myFunction(value, index, numberss) {
	txt += value + "<br>";
}
/* const numberss = [45, 4, 9, 16, 25];
let txt = "";
numberss.forEach(myFunction);
console.log(txt);
function myFunction(value) {
	txt += value + "<br>";
} */
