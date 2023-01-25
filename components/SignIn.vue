<script setup>
const testModal = ref(null);
const username = ref(null);
const password = ref(null);
const usernameError = ref("");
const passwordError = ref("");
const { showModal } = storeToRefs(useShowModalStore());
const { isAuth } = storeToRefs(useAuthUser());
const { $showToast } = useNuxtApp();
const clickBtn = ref(false);
const callback = () => {
  showModal.value = false;
};
const apiFetch = useBaseFetch();

useClickOutside(testModal, callback);

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
    showModal.value = false;
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
    <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <form
          @submit.prevent="submit"
          ref="testModal"
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 class="text-2xl font-bold">Sign in to your account</h2>
            <div class="mt-8">
              <div class="grid grid-cols-1 gap-6">
                <!-- <label class="block">
                  <span class="text-gray-700">Full name</span>
                  <input
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder=""
                  />
                </label> -->
                <div
                  v-if="usernameError"
                  class="border-l-2 border-red-600 bg-red-200 p-4"
                >
                  {{ usernameError }}
                </div>
                <label class="block">
                  <span class="text-gray-700">Username</span>
                  <input
                    v-model="username"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Password</span>
                  <input
                    v-model="password"
                    type="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <!-- <label class="block">
                  <span class="text-gray-700">When is your event?</span>
                  <input
                    type="date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">What type of event is it?</span>
                  <select
                    class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option>Corporate event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </label>
                <label class="block">
                  <span class="text-gray-700">Additional details</span>
                  <textarea
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="3"
                  ></textarea>
                </label>
                <div class="block">
                  <div class="mt-2">
                    <div>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                          checked=""
                        />
                        <span class="ml-2"
                          >Email me news and special offers</span
                        >
                      </label>
                    </div>
                  </div>
                </div> -->
                <div class="p-4">
                  <div class="flex flex-col items-center shrink-0">
                    <button
                      :disabled="clickBtn"
                      class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-800 text-white hover:text-slate-100 hover:bg-gray-500 active:bg-gray-800 active:text-gray-100 focus-visible:outline-gray-600 w-full"
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
