/**
 * Creates a sign in button with id `mainSearchBar`
 * @returns The button html
 */
export function signInButton(): string {
    return `
      <div id="mainSignInButton" class="items-start justify-items-end">
        <button id="signInButton" class="bg-weak-100 p-5 px-10 border-5 rounded-[20px] border-strong-100 border-dashed font-yuruka text-strong-100 text-[24px]">Sign In</button>
      </div>
    `;
  }

  // <p class="bg-weak-100 p-5 border-5 rounded-full border-strong-100 border-dashed">Sign In</p>