import auth from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".pass");
const registerBtn = document.querySelector(".btn");
const erp = document.querySelector(".er")

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // trien khai noi dung lay ra thong qua .value
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    console.log(emailValue, passwordValue);
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            window.location.href = "./hm.html";
        })
        .catch((error) => {
            erp.innerHTML = "Email hoặc mật khẩu sai"
        });
});