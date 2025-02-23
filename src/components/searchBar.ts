/**
 * Creates a search bar with id `mainSearchBar`
 * @returns The search bar html
 */
export function searchBar(): string {
  return `
    <div id="mainSearchBar" class="grid grid-rows-2">
      <div class="flex justify-center row-start-1 col-start-1">
        neko-search
      </div>
      <div class="flex justify-end row-start-1 col-start-1">
        cat
      </div>
      <div class="p-2 w-[40vw] flex text-center bg-cyan-300">
        <p class="mr-4">icon</p>
        <input placeholder="search stuff here..."></input>
        <p class="ml-auto">icon</p>
      </div>
    </div>
  `;
}
