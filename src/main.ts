import "./style.css";
import { searchBar } from "./components/searchBar";
import { signInButton } from "./components/signInButton";
import { signInScreen } from "./components/signInScreen";



document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

  <div class="grid items-start justify-items-end p-5 px-10">
  ${signInButton()}
  </div>
  <div class="flex place-items-center justify-center p-20 py-50">
  ${searchBar()}
  </div>

`;
