import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

// Define the interface outside the store
export interface UserInfo {
  name: string;
  email: string;
}

export const useMsl = defineStore('login', () => {
  const state = {
    isLogin: false,
    logginIn: false,
    loggedIn: useLocalStorage('useMsl.loggedIn', false),
    loggedOut: false,
    userInfo: {
      name: '',
      email: '',
    } as UserInfo,
  };


  const actions = {
    login(userInfo: UserInfo) {
      state.isLogin = true;
      state.logginIn = true;
      setTimeout(() => {
        state.logginIn = false;
        state.loggedIn.value = true;
      }, 3000);
      state.userInfo = userInfo;
    },
    logout() {
      state.isLogin = false;
      setTimeout(() => {
        state.loggedOut = true;
        state.userInfo = {
          name: '',
          email: '',
        };
      }, 3000);
    },
  };

  return {
    state,
    actions,
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
// }
