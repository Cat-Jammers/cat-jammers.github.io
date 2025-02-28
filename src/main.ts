import "./style.css";
import { searchBar } from "./components/searchBar";
import { signInButton } from "./components/signInButton";
import { signInScreen } from "./components/signInScreen";
import { profile } from "./components/profile";
import { searchBarResults } from "./components/searchBarResults";
import { searchResult } from "./components/searchResult";


// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

//     <div class="flex place-items-start justify-start p-10">
//       ${searchBarResults()}
//     </div>
//     <div class="p-10">
//       ${searchResult()}
//       ${searchResult()}
//       ${searchResult()}
//       ${searchResult()}
//     </div>
//   `;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

  <div class="grid items-start justify-items-end p-5 px-10">
    ${signInButton()}
  </div>
  <div class="flex place-items-center justify-center p-20 py-50">
  ${searchBar()}
  </div>

`;

const signInButtonElement = document.getElementById("signInButton")!;

if (signInButtonElement) {
  signInButtonElement.addEventListener("click", () => {
    console.log("Sign in button clicked");
    document.getElementById("signInButton")!.addEventListener("click", () => {
      console.log("Sign in button clicked");
      document.querySelector<HTMLDivElement>("#app")!.innerHTML = signInScreen();
      addLoginEventListeners();
      // signInScreenShowed = true
    });
  });
} else {
  console.error("Sign in button not found");
}


});

function addLoginEventListeners() {
  const submitButton = document.getElementById("submitButton")!;
  submitButton.addEventListener("click", () => {
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const loginMessage = document.getElementById("loginMessage")!;

    if (username === "admin" && password === "password") {
      loginMessage.textContent = "Login successful!";
      loginMessage.classList.remove("text-red-500");
      loginMessage.classList.add("text-green-500");
      document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

        <div class="grid items-start justify-items-end p-5 px-10">
          ${profile()}
        </div>
        <div class="flex place-items-center justify-center p-20 py-50">
        ${searchBar()}
        </div>

      `;
    } else {
      loginMessage.textContent = "Invalid username or password";
      loginMessage.classList.remove("text-green-500");
      loginMessage.classList.add("text-red-500");
    }
  });
}

