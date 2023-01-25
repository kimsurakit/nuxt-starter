export default function useClickOutside(elTarget, callback) {
  let lisner = (e) => {
    const t = document.querySelectorAll("#openModal");

    if (
      e.target === elTarget.value ||
      e.composedPath().includes(elTarget.value) ||
      e.target === t[0]
    ) {
      return;
    }
    callback();
  };
  onMounted(() => {
    window.addEventListener("click", lisner);
    document.documentElement.style.overflow = "hidden";
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", lisner);
    document.documentElement.style.overflow = "";
    console.log("unmo");
  });
}
