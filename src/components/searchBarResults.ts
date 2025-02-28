/**
 * Creates a search bar with id `mainSearchBarResults`
 * @returns The search bar results html
 */
export function searchBarResults(): string {
  return `
    <div id="mainSearchBarResults" class="flow-root">
      <div class="flex float-left">
        <img src="/Neko Search.png" alt="neko-search" class="w-auto h-auto object-none px-5">
      </div>
      <div class="w-[40vw] flex text-center bg-weak-100 border-strong-100 border-5 rounded-full">
        
        <img src="/search.png" alt="search-icon" class="h-[3vw] pr-2 pl-2 ">
        <input class="text-strong-100 w-[40vw]" placeholder="search stuff here..."></input>
        <img src="/walkingCat.png" alt="walking-cat-icon" class="h-[3vw] justify-end pr-2 pl-2">
      </div>
    </div>
  `;
}