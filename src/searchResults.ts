import "./style.css";
import { searchBarResults } from "./components/searchBarResults";
import { searchResult } from "./components/searchResult";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
      <div class="flex place-items-start justify-start p-10">
        ${searchBarResults()}
      </div>
      <div class="p-10">
        ${searchResult()}
        ${searchResult()}
        ${searchResult()}
        ${searchResult()}
      </div>
    `;
});