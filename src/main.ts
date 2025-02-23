import "./style.css";
import { searchBar } from "./components/searchBar";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="h-screen flex place-items-center justify-center">
    ${searchBar()}
  </div>
`;
