import { defineStore } from "pinia";
type Props = {
  handleNavbar: boolean;
  handleContent: boolean;
  handleFooter: boolean;
  handleHeader: boolean;
  menuNavbarCollapsed: boolean;
};
export const useTheme = defineStore("theme", {
  state: () => {
    return {
      themes: {
        handleNavbar: true,
        handleContent: true,
        handleFooter: true,
        handleHeader: true,
        menuNavbarCollapsed: false
      }
    };
  },
  getters: {
    getTheme: (state) => () => {
      return state.themes;
    }
  },
  actions: {
    async setTheme(value: Props) {
      this.themes = value;
    }
  }
});
