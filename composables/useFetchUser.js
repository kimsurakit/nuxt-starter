export const useFetchUser = () => {
  onMounted(async () => {
    const data = await $fetch("http://127.0.0.1:8000/auth/users/me/", {
      credentials: "include",
    });
    console.log(data);
  });
};
