import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="flex flex-nowrap justify-around">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="h-30 p-6" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="h-30 p-6 vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1 class="text-5xl">Vite + TypeScript</h1>
    <div class="p-8">
      <button id="counter" type="button" class="px-5 py-2 rounded-lg border border-transparent hover:border-cyan-500 bg-neutral-100 dark:bg-neutral-950 cursor-pointer transition-colors"></button>
    </div>
    <p class="text-neutral-400">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
