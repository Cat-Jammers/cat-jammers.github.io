/**
 * Creates a sign in button with id `mainProfile`
 * @returns The profile html
 */
export function profile(): string {
    return `
      <div id="mainProfile" class="items-start justify-items-end">
        <img src="/profile.png" alt="profile-icon" class="w-auto h-auto object-none">
        
      </div>
    `;
  }
//   <button id="signInButton" class="bg-weak-100 p-5 px-10 border-5 rounded-[20px] border-strong-100 cursor-pointer border-dashed font-yuruka text-strong-100 text-[24px]">Sign In</button>