import * as auth from "../../api/auth.js";
// I don´t think we need the storage for the registration, do we?
// import * as storage from "../../services/storage.js";
import displayMessage from "../../constants/displayMessage.js";

export function registerListener() {
	const form = document.querySelector("#registerForm");
	console.log("asdasdasd");

	// disable form while api call is in progress
	// some kind of spinner or indicator that the form is being submitted

	if (form) {
		form.addEventListener("submit", handleRegister);
	}
}

async function handleRegister(event) {
	event.preventDefault();
	console.log(event);
	const form = event.target;
    const data = new FormData(form);
    const name = data.get("name");
	const email = data.get("email");
	const password = data.get("password");
	try {
		const response = await auth.login(name, email, password);
		console.log("response", response);
		displayMessage("success", "Registration successful. Please login.", "#message");
		form.reset();
		// None of the different api we are dealing with here send back a token
		// storage.save("token", response.accessToken);
		// storage.save("user", { name: response.name, email: response.email });

		// Do not direct to login.html. Because then the user will not be informed about the result of the registration process.
		// location.href = ".//login.html";
	} catch (error) {
		console.log(error);

		// This error message will eventually end up in the "register.html"
		displayMessage("error", error, "#message");
	}
}
