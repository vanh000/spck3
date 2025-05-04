import auth from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// lay ra the
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".pass");
const repasswordInput = document.querySelector(".re-pass");
const btnButton = document.querySelector(".btn");
const er = document.querySelector(".er")


// lay thong tin nhap trong input
btnButton.addEventListener("click", (e) => {
    e.preventDefault(); // xoa reload
    const emailValue = emailInput.value;
    // password
    const passwordValue = passwordInput.value;
    const repasswordValue = repasswordInput.value;
    if (passwordValue != repasswordValue) {
        er.innerHTML = "nhập lại mật khẩu sai"
    } else {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                window.location.href = "./hm.html";
            })
            .catch((error) => {
                er.innerHTML = "Email hoặc mật khẩu không hợi lệ"
            });
    }
});