/**
 * Creates a search bar with id `mainSearchBar`
 * @returns The search bar html
 */
export function searchBar(): string {
  return `
    <div id="mainSearchBar" class="grid grid-rows-[auto_auto] h-auto">
      <div class="mb-2 ml-15 mr-10 flex justify-center row-start-1 col-start-1">
        <img src="/Neko Search.svg" alt="neko-search" class="w-full h-auto object-none">
      </div>
      <img src="/Cat.svg" alt="cat" class="mr-10 w-auto h-auto row-start-1 col-start-2">

      <div class="p-2 w-full h-fit flex text-center justify-self-center bg-weak-100 border-strong-100 border-5 rounded-full row-start-2 col-start-1 col-end-3">
        <img src="/search.svg" alt="search-icon" class="w-auto h-auto pr-2 pl-2 object-none">
        <input class="text-strong-100 w-full" placeholder="search stuff here..."></input>
        <img src="/walkingCat.svg" alt="walking-cat-icon" class="justify-end w-auto h-auto pr-2 pl-2 object-none">
      </div>
    </div>
  `;
}
