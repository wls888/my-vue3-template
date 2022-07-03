import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state: () => {
    return {
      msg: "hello,pinia"
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: []
  }
});

export default useLoginStore;
