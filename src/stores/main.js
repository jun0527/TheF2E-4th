import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      mapIndex: 0,
      isMenuOpen: false,
    };
  },
  getters: {},
  actions: {},
});
