document.addEventListener('DOMContentLoaded', function () {
	/* Prevents flashing css on page load */
	$("body").removeClass("preload");

	/* Declare variables */
	const navigation = document.getElementsByClassName("selectors")[0];
	const btns = navigation.getElementsByTagName("button");

	/* Loop through the buttons and add the active class to the current/clicked button */
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			let current = document.getElementsByClassName("highlighted");
			let mylink = $(this).data("href");

			// If there's no active class [OFF]
			if (current.length > 0) {
				$(".category").empty();
				current[0].className = current[0].className.replace("highlighted", "");
			}

			// Load corresponding html file, as stated in the data-href of that button
			$(".category").load(mylink);

			// Add the active class to the current/clicked button [ON]
			this.className += "highlighted";
		});
	}

	/* Opens About section when targeted by anchor link */
	let identifier = window.location.hash; //gets everything after the hashtag i.e. #home
	console.log(identifier);
	if (identifier == "#about-me") {
		$("#about").click();
		document.getElementById("about").scrollIntoView({
			block: "center",
			behavior: "smooth",
		  });
	};
});