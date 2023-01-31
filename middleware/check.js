export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuth } = storeToRefs(useAuthUser());
  console.log("test");
  if (isAuth.value) {
    return navigateTo("/");
  }
});
