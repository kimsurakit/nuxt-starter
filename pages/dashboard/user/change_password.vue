<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-gray-700 text-xl font-bold">
              Change your password
            </h6>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form @submit.prevent="submit">
            <Section msg="Change your password">
              <div class="flex flex-wrap gap-y-3">
                <TextInput
                  class="w-full lg:w-7/12 px-4"
                  v-model="data.current_password"
                  msg="Current password"
                  name="password"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-7/12 px-4"
                  v-model="data.new_password"
                  msg="New password"
                  name="password"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-7/12 px-4"
                  v-model="data.re_new_password"
                  msg="Confirm password"
                  name="password"
                ></TextInput></div
            ></Section>

            <hr class="mt-6 border-b-1 border-gray-300" />

            <div class="p-3 flex justify-end gap-x-3">
              <NuxtLink
                to="/dashboard/profile"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-pointer"
                type="button"
              >
                Back
              </NuxtLink>
              <button
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer"
                type="submit"
              >
                <svg
                  v-if="show"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer class="block py-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-gray-200" />
    </div>
  </footer>
</template>
<script setup>
definePageMeta({
  layout: "index",
});
const apiFetch = useBaseFetch();
const data = ref({
  new_password: "",
  re_new_password: "",
  current_password: "",
});

const show = ref(false);
const { $showToast } = useNuxtApp();
async function submit() {
  show.value = true;

  try {
    await apiFetch("/auth/users/set_password/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data.value),
    });

    $showToast("Success", "success", 2000);

    await navigateTo("/dashboard/profile");
  } catch (error) {
    console.log(error.data);
  } finally {
    show.value = false;
  }
}
</script>
