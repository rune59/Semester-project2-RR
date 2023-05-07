import * as listeners from "./listeners/auth/index.js";
import { login } from "./utils/auth/login.js";
import { register } from "./utils/auth/register.js";
import { isLoggedIn } from "./storage/isLoggedIn.js";
import { get, save, remove } from "./storage/storage.js";
import { BASE_URL } from "./constants/api.js";
import displayMessage from "./constants/displayMessage.js";
import { getAuctions, auctionList, renderAuctions, createAuction} from "./utils/listings/getAuctionListHome.js";


/* The code just below make the hamburger menu work properly */
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener('click', () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})



const pathname = window.location.pathname;
console.log("pathname:", pathname);

switch (pathname) {
	case "/":
	case "/index.html":
		console.log("home page");
		break;
	case "/login.html":
		console.log("login page");
		listeners.loginListener();
		break;
	case "/register.html":
		listeners.registerListener();
		console.log("register page");
		break;
}
