// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
	e.preventDefault();
});

const input = document.getElementById("password");
const reveal = document.getElementById("togglePassword");

reveal.addEventListener('click', function() {
	if (input.getAttribute("type") === "password") {
		input.setAttribute("type", "text");
	} else {
		input.setAttribute("type", "password");
	}
});
