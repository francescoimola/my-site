let Buttons = document.querySelectorAll(".selectors button");

for (let button of Buttons) {
	button.addEventListener("click", (e) => {

		let allContent = document.querySelectorAll(".category");
		for (let category of allContent) {
			if (category.getAttribute("data-number") === button.getAttribute("data-number")) {
				category.style.display = "block";
				category.style.visibility = "visible";
			} else {
				category.style.display = "none";
				category.style.visibility = "hidden";
			}
		}
	});
}
