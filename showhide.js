// grab all the buttons
let Buttons = document.querySelectorAll(".selectors button");
// loop through the buttons using for..of
for (let button of Buttons) {
  // listen for a click event
  button.addEventListener("click", (e) => {
    // Store the event target in a const
    const et = e.target;
    // select active class
    const active = document.querySelector(".active");
    /* when a button is clicked, remove the active class 
  from the button that has it */
    if (active) {
      active.classList.remove("active");
    }
    // Add active class to the clicked element
    et.classList.add("active");
    // select all classes with the name category
    let allContent = document.querySelectorAll(".category");
    // loop through all category classes
    for (let category of allContent) {
      /* display the content if the value in the data attribute of the button and category are the same */
      if (
        category.getAttribute("data-number") ===
        button.getAttribute("data-number")
      ) {
        category.style.display = "block";
      }
      // if it's not equal then hide it.
      else {
        category.style.display = "none";
      }
    }
  });
}
