/**
 * Creates a search bar with id `mainSearchResult`
 * @returns The search result html
 */
export function searchResult(): string {
    return `
      <div id="mainSearchResult" class="flex flex-row pb-15">
        <div class="">
          <img src="./profile.png" alt="favicon" class="h-[3vw] justify-end pr-2 pl-2">
        </div>
        <div class="grid">
            <div class="grid col-start-1 row-start-1 p-5">
                <p class="col-start-1 row-start-1 text-[12px] font-yuruka text-strong-100">Some information here</p>
                <p class="text-[9px] font-yuruka text-strong-50">More Information here</p>
            </div>
            <div class="grid justify-center">
                <p class="col-start-1 row-start-1 text-[15px] font-yuruka text-strong-100">Title Title Title Title Title</p>
                <p class="text-[11px] font-yuruka text-strong-50">body body body body body body body body body body body body body</p>
            </div>
        </div>
      </div>
    `;
  }