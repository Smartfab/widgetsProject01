const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

open.addEventListener("click", () => {
	container.classList.add("show-nav");
});

close.addEventListener("click", () => {
	container.classList.remove("show-nav");
});
// const open = document.querySelector("#open");
// const close = document.querySelector("#close");
// const container = document.querySelector(".container");
// const circle = document.querySelector(".circle");

// open.addEventListener("click", () => {
// 	container.classList.toggle("open");
// 	rotateCircle();
// });

// // creating a function to rotate and reverse Icons
// function rotateCircle() {
// 	circle.classList.add("circle-rotate");
// }

// function reverseCircle() {
// 	circle.classList.remove("circle-rotate");
// }
// close.addEventListener("click", () => {
// 	container.classList.remove("show-nav");
// 	reverseCircle();
// });
