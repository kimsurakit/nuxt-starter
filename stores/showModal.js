export const useShowModalStore = defineStore("showModal", {
  state: () => ({ showModal: false, showSigup: false }),
  actions: {
    toggle() {
      this.showModal = true;
    },
    toggleSigup() {
      this.showSigup = !this.showSigup;
      this.showSigup
        ? (document.documentElement.style.overflow = "hidden")
        : (document.documentElement.style.overflow = "");
    },
  },
});
