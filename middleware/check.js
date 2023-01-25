export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuth } = storeToRefs(useAuthUser());
  const { showModal } = storeToRefs(useShowModalStore());
  if (!isAuth.value) {
    showModal.value = true;
    return navigateTo("/");
  }
});
