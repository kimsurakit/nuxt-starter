<script setup>
const mobileMenu = ref(false);
const { toggleSigup, toggleSigin } = useShowModalStore();
const { isAuth } = storeToRefs(useAuthUser());
const apiFetch = useBaseFetch();

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
<template>
  <nav class="bg-darkGreen">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="mobileMenu = !mobileMenu"
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              v-if="!mobileMenu"
              class="block h-6 w-6"
              name="ic:baseline-menu"
            />
            <Icon v-else class="block h-6 w-6" name="ic:baseline-close" />
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-8 lg:hidden"
              src="~/assets/logo.png"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-8 lg:block"
              src="~/assets/logo.png"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

              <NuxtLink
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
                >Home</NuxtLink
              >
              <NuxtLink
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/dashboard/report"
              >
                DNA Testing Application</NuxtLink
              >
            </div>
          </div>
        </div>
        <client-only>
          <div v-if="isAuth">
            <button
              @click="logout"
              class="bg-white hover:bg-orange-600 hover:text-white focus:outline-none focus:ring focus:ring-orange-300 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-gray-800"
            >
              Logout
            </button>
          </div>
          <div
            v-else
            class="gap-x-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <NuxtLink
              class="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/resend_email"
            >
              <div class="flex items-center">
                <Icon class="mr-1" name="ic:baseline-email" />

                <span>Resend Email</span>
              </div></NuxtLink
            >
            <button
              @click="toggleSigin"
              class="bg-darkGreen border-2 hover:border-orange-600 hover:text-orange-600 hover:bg-white focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
            >
              Sign in
            </button>
            <button
              @click="toggleSigup"
              class="bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
            >
              Sign up
            </button>
          </div>
        </client-only>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" v-show="mobileMenu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/"
          >Home</NuxtLink
        >
        <NuxtLink
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/dashboard/report"
          >DNA Testing Application</NuxtLink
        >
        <NuxtLink
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/resend_email"
          >Resend Email</NuxtLink
        >
        <!-- <NuxtLink
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/posts/1"
          >Post 1</NuxtLink
        >
        <NuxtLink
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/posts/2"
          >Post 2</NuxtLink
        > -->
      </div>
    </div>
  </nav>
</template>
