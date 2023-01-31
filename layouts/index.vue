<template>
  <div
    :class="{ hidden: sideShow }"
    class="fixed text-white text-4xl top-5 left-4 cursor-pointer z-50 lg:hidden"
    @click="sideShow = true"
  >
    <Icon
      class="p-2 rounded-full bg-slate-800 hover:bg-slate-500"
      name="ic:baseline-menu"
    />
  </div>
  <div
    :class="{ hidden: !sideShow }"
    class="flex flex-col sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-72 overflow-y-auto text-center bg-darkGreen z-50"
  >
    <div class="text-gray-100 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <img class="h-8 w-8" src="~/assets/logo.png" alt="Your Company" />
        <h1 class="font-bold text-gray-200 text-sm ml-3">
          Rice DNA Testing Unit at URRC
        </h1>
        <div
          @click="sideShow = false"
          class="h-8 w-8 cursor-pointer ml-auto lg:hidden hover:bg-gray-500 rounded-full text-center"
        >
          <Icon class="text-2xl" name="ic:baseline-close" />
        </div>
      </div>
      <div class="my-2 bg-gray-600 h-[1px]"></div>
    </div>

    <NuxtLink
      to="/"
      class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
    >
      <Icon class="text-2xl" name="ic:baseline-home" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/profile"
      class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
    >
      <Icon class="text-2xl" name="ic:baseline-account-circle" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold">User Profile</span>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/company"
      class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
    >
      <Icon class="text-2xl" name="ic:baseline-home-work" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold">My address</span>
    </NuxtLink>
    <div class="my-4 bg-gray-200 h-[1px]"></div>
    <button
      type="button"
      @click="submenu = !submenu"
      class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
    >
      <Icon class="text-2xl" name="ic:baseline-app-registration" />
      <div class="flex justify-between w-full items-center">
        <span class="text-[15px] ml-4 text-gray-200 font-bold">
          DNA Testing Application
        </span>

        <Icon
          v-show="!submenu"
          class="text-2xl"
          name="ic:baseline-keyboard-arrow-up"
        />
        <Icon
          v-show="submenu"
          class="text-2xl"
          name="ic:baseline-keyboard-arrow-down"
        />
      </div>
    </button>
    <div
      v-show="submenu"
      class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
      id="submenu"
    >
      <NuxtLink to="/dashboard/report">
        <h1 class="cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1">
          All
        </h1>
      </NuxtLink>
      <NuxtLink to="/dashboard/create">
        <h1 class="cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1">
          Create
        </h1>
      </NuxtLink>
    </div>
    <div
      @click="logout"
      class="p-2.5 mt-auto mb-4 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
    >
      <Icon class="text-2xl" name="ic:baseline-logout" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
    </div>
  </div>
  <div :class="{ 'md:ml-72': sideShow }" class="relative">
    <div class="px-4 md:px-7 mx-auto w-full -m-24 pt-32">
      <slot />
    </div>
  </div>
</template>
<script setup>
const sideShow = ref(true);
const submenu = ref(false);

const minMediaQuery = window.matchMedia("(max-width: 768px)");
const maxMediaQuery = window.matchMedia("(min-width: 1024px)");
const windowWidth = ref(window.innerWidth);
const { isAuth } = storeToRefs(useAuthUser());
const apiFetch = useBaseFetch();
onMounted(() => {
  window.addEventListener("resize", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleScroll);
});
watch(windowWidth, () => {
  if (maxMediaQuery.matches) {
    sideShow.value = true;
  }
  if (minMediaQuery.matches) {
    sideShow.value = false;
  }
});
function handleScroll(e) {
  windowWidth.value = window.innerWidth;
}
async function logout() {
  try {
    await apiFetch("/auth/jwt/destroy/", {
      method: "POST",
      credentials: "include",
    });
    isAuth.value = false;
  } catch (error) {
    console.log(error.message);
  } finally {
    await navigateTo("/");
  }
}
</script>
<style lang="scss">
a.router-link-active {
  h1,
  span {
    @apply text-orange-300;
  }
}
</style>
