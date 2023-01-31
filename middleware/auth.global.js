export default defineNuxtRouteMiddleware(async (to, from) => {
  const apiFetch = useBaseFetch();
  const { toggleSigin } = useShowModalStore();

  const { isAuth } = storeToRefs(useAuthUser());

  if (isAuth.value === true || isAuth.value === null) {
    try {
      await apiFetch("/auth/jwt/verify/", {
        method: "POST",
        credentials: "include",
        async onResponse({ request, response, options }) {
          if (response.status === 200) {
            isAuth.value = true;
          }
        },
      });

      isAuth.value = true;
    } catch (error) {
      if (error.status === 401) {
        try {
          const refreshResponse = await apiFetch("/auth/jwt/refresh/", {
            method: "POST",
            credentials: "include",
            async onResponse({ request, response, options }) {
              if (response.status === 200) {
                isAuth.value = true;
              }
            },
          });
        } catch (error) {
          if (error.status === 401) {
            isAuth.value = false;
          }
        }
      }
    }
  }

  if (to.path !== "/" && !isAuth.value) {
    toggleSigin();
    return await navigateTo("/");
  }
});
