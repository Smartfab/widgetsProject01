const container = document.querySelector(".container");
const leftHover = document.querySelector(".left");
const rightHover = document.querySelector(".right");

/* leftHover.addEventListener("mouseover", hoverLeft);

function hoverLeft() {
	container.classList.remove("hover-right");
	container.classList.add("hover-left");
}
rightHover.addEventListener("mouseover", hoverRight);

function hoverRight() {
	container.classList.remove("hover-left");
	container.classList.add("hover-right");
}
leftHover.addEventListener("mouseleave", () => {
	container.classList.remove("hover-left");
	container.classList.remove("hover-right");
});
rightHover.addEventListener("mouseleave", () => {
	container.classList.remove("hover-right");
	container.classList.remove("hover-right");
}); */

// alternative to the code lines above shown below

// leftHover.addEventListener("mouseenter", () => {
// 	container.classList.add("hover-left");
// 	container.classList.remove("hover-right");
// });
// rightHover.addEventListener("mouseenter", () => {
// 	container.classList.add("hover-right");
// 	container.classList.remove("hover-left");
// });

// alternative used by Traversy which is the best as it accounts for the mouse leaving both split sections not just entering in a shorter code

leftHover.addEventListener("mouseenter", () =>
	container.classList.add("hover-left")
);
leftHover.addEventListener("mouseleave", () =>
	container.classList.remove("hover-left")
);
rightHover.addEventListener("mouseenter", () =>
	container.classList.add("hover-right")
);
rightHover.addEventListener("mouseleave", () =>
	container.classList.remove("hover-right")
);
