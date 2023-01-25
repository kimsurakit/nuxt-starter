export default defineNuxtRouteMiddleware(async (to, from) => {
  const apiFetch = useBaseFetch();

  const { isAuth } = storeToRefs(useAuthUser());
  const { showModal } = storeToRefs(useShowModalStore());
  try {
    await apiFetch("/auth/jwt/verify/", {
      method: "POST",
      credentials: "include",
    }).then(() => (isAuth.value = true));
  } catch (error) {
    console.log(error);
    try {
      await apiFetch("/auth/jwt/refresh/", {
        method: "POST",
        credentials: "include",
      }).then(() => (isAuth.value = true));
    } catch (err) {
      isAuth.value = false;
      if (to.path !== "/") {
        showModal.value = true;
        return navigateTo("/");
      }
    }
  }
});
