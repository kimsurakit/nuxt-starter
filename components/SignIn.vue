<script setup>
import { onClickOutside } from "@vueuse/core";

const testModal = ref(null);
const username = ref(null);
const password = ref(null);
const typeInput = ref("password");
const usernameError = ref("");
const { toggleSigin } = useShowModalStore();

const { showModal } = storeToRefs(useShowModalStore());
const { isAuth } = storeToRefs(useAuthUser());
const { $showToast } = useNuxtApp();
const clickBtn = ref(false);

const apiFetch = useBaseFetch();

onClickOutside(testModal, toggleSigin);

async function submit() {
  clickBtn.value = true;
  try {
    const data = await apiFetch("/auth/jwt/create/", {
      method: "POST",

      credentials: "include",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    isAuth.value = true;
    toggleSigin();
    $showToast("Success", "success", 2000);
    await navigateTo("/dashboard/report");
  } catch (error) {
    usernameError.value = error.response._data.Invalid;
    $showToast("Fail Sign in", "error", 2000);
  } finally {
    clickBtn.value = false;
  }
}
</script>
<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <form
          @submit.prevent="submit"
          ref="testModal"
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-8 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex justify-between">
              <h2 class="text-2xl font-bold">Sign in to your account</h2>
              <div
                @click="toggleSigin"
                class="p-2 hover:border-gray-400 border-transparent border cursor-pointer"
              >
                <Icon class="text-2xl" name="ic:baseline-close" />
              </div>
            </div>
            <div class="mt-8">
              <div class="grid grid-cols-1 gap-6">
                <div
                  v-if="usernameError"
                  class="border-l-2 border-red-600 bg-red-200 p-4"
                >
                  {{ usernameError }}
                </div>
                <label class="block">
                  <span class="text-gray-700">Username</span>
                  <input
                    @input="usernameError = ''"
                    v-model="username"
                    required
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label class="block relative mr-7">
                  <span class="text-gray-700">Password</span>
                  <input
                    @input="usernameError = ''"
                    v-model="password"
                    required
                    :type="typeInput"
                    class="mt-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />

                  <div
                    @click="
                      typeInput === 'password'
                        ? (typeInput = 'text')
                        : (typeInput = 'password')
                    "
                    class="-right-[41px] top-[28px] cursor-pointer rounded-r-md absolute border-2 text-lg w-[42px] h-[42px] text-center border-gray-300 shadow-sm"
                  >
                    <Icon name="ic:outline-remove-red-eye" />
                  </div>
                </label>

                <div class="p-4">
                  <div class="flex flex-col items-center shrink-0">
                    <button
                      :disabled="clickBtn || usernameError !== ''"
                      class="disabled:bg-gray-500 group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-800 text-white hover:text-slate-100 hover:bg-gray-500 active:bg-gray-800 active:text-gray-100 focus-visible:outline-gray-600 w-full"
                    >
                      <span v-if="!clickBtn"
                        >Sign in <span aria-hidden="true">→</span></span
                      >
                      <svg
                        v-else
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
