
import * as storage from "../../services/storage.js";


export default function logoutListener() {
    const logoutButton = document.querySelector("#logout");

    logoutButton.addEventListener("click", () => {
        storage.remove("token");
        storage.remove("name");
        location.href = ".//..//../index.html";

    });

}
