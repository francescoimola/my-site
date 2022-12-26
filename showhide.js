document.addEventListener('DOMContentLoaded', function() {
	const navigation = document.getElementsByClassName("selectors")[0];
	const btns = navigation.getElementsByTagName("button"); 

// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("highlighted");

    // If there's no active class
			if (current.length > 0) {
				current[0].className = current[0].className.replace("highlighted", "");
			}

    // Add the active class to the current/clicked button
			this.className += "highlighted";
		});
	}

} );

//target all buttons elements with data-href property
$('button[data-href]').click(function () {
	//load the contents of the url specified by the href into addnewplayer
	$(".myart").load($(this).data('href'));
})


/* 
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
*/
