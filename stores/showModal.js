export const useShowModalStore = defineStore("showModal", {
  state: () => ({ showModal: false, showSigup: false }),
  actions: {
    toggle() {
      this.showModal = true;
    },
    toggleSigin() {
      this.showModal = !this.showModal;
      this.showModal
        ? (document.documentElement.style.overflow = "hidden")
        : (document.documentElement.style.overflow = "");
    },
    toggleSigup() {
      this.showSigup = !this.showSigup;
      this.showSigup
        ? (document.documentElement.style.overflow = "hidden")
        : (document.documentElement.style.overflow = "");
    },
  },
});
