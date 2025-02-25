/**
 * Creates a search bar with id `mainSearchBar`
 * @returns The search bar html
 */
export function searchBar(): string {
  return `
    <div id="mainSearchBar" class="grid grid-rows-2">
      <div class="flex justify-center row-start-1 col-start-1 pb-2">
        <img src="/Neko Search.png" alt="neko-search" class="w-auto h-auto">
      </div>
      <div class="flex justify-end row-start-1 col-start-1">
        cat
      </div>
      <div class="p-2 w-[60vw] flex text-center justify-self-center bg-weak-100 border-strong-100 border-5 rounded-full">
        
        <img src="/search.png" alt="search-icon" class="w-auto h-auto pr-2 pl-2">
        <input class="text-strong-100 w-[50vw]" placeholder="search stuff here..."></input>
        <img src="/walkingCat.png" alt="walking-cat-icon" class="justify-end w-auto h-auto pr-2 pl-2">
      </div>
    </div>
  `;
}