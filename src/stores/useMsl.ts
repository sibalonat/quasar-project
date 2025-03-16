import { defineStore } from 'pinia';

// Define the interface outside the store
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  token: string;
  role: string;
}

export const useMsl = defineStore('login', () => {
  const state = {
    isLogin: false,
    userInfo: {
      id: '',
      name: '',
      email: '',
      phone: '',
      avatar: '',
      token: '',
      role: '',
    } as UserInfo,
  };


  const actions = {
    login(userInfo: UserInfo) {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    logout() {
      state.isLogin = false;
      state.userInfo = {
        id: '',
        name: '',
        email: '',
        phone: '',
        avatar: '',
        token: '',
        role: '',
      };
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
