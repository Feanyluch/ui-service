import { writable, get } from "svelte/store";

// main portfolio data store & methods
export const portfolioStore = writable<string[]>([]);

export const portfolioStoreUpdate = async (data: App.PageData) => {
  try {
    const portfolioData = await data;
    if (portfolioData !== null || undefined) {
      portfolioStore.update(store => {
        store = data;
        return store;
      });
    }
  } catch (error) {
    if (error) {
      console.log("something went wrong in portfolio update");
      console.log(error);
    }
  }
};

// main menu navigation store & methods
export const currentMenu = writable<string>("home");


// login page store & methods
export const isSignInOrSignUp = writable<boolean>(false)

export const toggleSignInForm = ()=>{
       let bool = get(isSignInOrSignUp)
       isSignInOrSignUp.update((store)=>{
         store = !bool;
         return store
       })
}