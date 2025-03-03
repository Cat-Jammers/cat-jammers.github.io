/**
 * Creates a search bar with id `mainSignInScreen`
 * @returns The sign in screen html
 */
export function signInScreen(): string {
    return `
      <div id="mainSignInScreen" class="h-screen flex items-center justify-center">
        <div class="border-2 w-[430px] h-[550px]">
            <h1 class="font-yuruka text-strong-100 text-[40px] flex justify-center pt-10">Sign In</h1>
            <div class="flex justify-center">
              <input id="username" class="bg-weak-100 text-strong-100 text-[15px] font-yuruka rounded-full p-2 m-5" type="text" placeholder="email/username"></input>
            </div>
            <div class="flex justify-center">
              <input id="password" class="bg-weak-100 text-strong-100 text-[15px] font-yuruka rounded-full p-2 mx-10" type="password" placeholder="password"></input>
            </div>
            <div class="flex justify-center">
              <button id="submitButton" type="submit" class="bg-weak-100 text-strong-100 text-[15px] font-yuruka rounded-full p-2 mx-10 mt-5 cursor-hover">Submit</button>
            </div>
            <div id="loginMessage" class="flex justify-center text-red-500 mt-5"></div>
            <div class="flex justify-between items-center pt-10 pl-5 pr-5">
              <hr class="w-[200px] border-2 border-strong-50 order-1 grow"></hr>
              <p class="font-yuruka text-strong-50 text-[20px] px-5 order-2">or</p>
              <hr class="w-[200px] border-2 border-strong-50 order-3 grow"></hr>
            </div>
            <div class="flex justify-between py-10 mx-15">
              <img src="/apple.png" alt="apple-logo" class="w-auto h-auto object-none">
              <img src="/slack.png" alt="slack-logo" class="w-auto h-auto object-none">
              <img src="/google.png" alt="google-logo" class="w-auto h-auto object-none">
            </div>
        </div>
      </div>
    `;
  }
