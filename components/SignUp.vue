<script setup>
import { onClickOutside } from "@vueuse/core";
const { toggleSigup } = useShowModalStore();

const target = ref(null);
const { showSigup } = storeToRefs(useShowModalStore());
const closeModal = () => {
  toggleSigup();
};
onClickOutside(target, closeModal);
const typeInput1 = ref("password");
const typeInput2 = ref("password");
const firstName = ref();
const lastName = ref();
const username = ref();
const firstNameError = ref("");
const lastNameError = ref("");
const usernameError = ref("");
const passwordError = ref("");
const rePasswordError = ref("");
const emailError = ref("");
const email = ref();
const password = ref();
const rePassword = ref();
const { $showToast } = useNuxtApp();
const apiFetch = useBaseFetch();
const clickBtn = ref(false);

async function onSubmit() {
  clickBtn.value = true;
  try {
    const data = await apiFetch("/auth/users/", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        first_name: firstName.value,
        last_name: lastName.value,
        username: username.value,
        password: password.value,
        re_password: rePassword.value,
      }),
    });
    $showToast("Success", "success", 2000);
    closeModal();
    await navigateTo("success");
  } catch (error) {
    console.log(error.response._data);
    firstNameError.value =
      "first_name" in error.response._data
        ? error.response._data.first_name[0]
        : "";
    lastNameError.value =
      "last_name" in error.response._data
        ? error.response._data.last_name[0]
        : "";
    emailError.value =
      "email" in error.response._data ? error.response._data.email[0] : "";
    usernameError.value =
      "username" in error.response._data
        ? error.response._data.username[0]
        : "";
    passwordError.value =
      "password" in error.response._data
        ? error.response._data.password[0]
        : "";
    rePasswordError.value =
      "re_password" in error.response._data
        ? error.response._data.re_password[0]
        : "";
    if ("non_field_errors" in error.response._data) {
      rePasswordError.value = error.response._data.non_field_errors[0];
    }

    $showToast("Fail", "error", 2000);
  } finally {
    clickBtn.value = false;
  }
}

function clearErrorFiled(filed) {
  console.log(filed);
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
        <div
          ref="target"
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-5"
        >
          <form @submit.prevent="onSubmit">
            <div class="bg-white px-9 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="flex justify-between">
                <h2 class="text-2xl font-bold">Let's Get You Signed Up</h2>

                <div
                  @click="toggleSigup"
                  class="p-2 hover:border-gray-400 border-transparent border cursor-pointer"
                >
                  <Icon class="text-2xl" name="ic:baseline-close" />
                </div>
              </div>
              <div class="mt-8">
                <div class="grid grid-cols-2 gap-6">
                  <div :class="{ 'error-input': false }">
                    <label class="block">
                      <span class="text-gray-700">First Name</span>
                      <span v-if="firstNameError" class="text-pink-600">{{
                        firstNameError
                      }}</span>
                      <input
                        :class="{
                          'error-input': firstNameError,
                        }"
                        required
                        @input="firstNameError = ''"
                        v-model="firstName"
                        type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                    </label>
                  </div>
                  <label class="block">
                    <span class="text-gray-700">Last Name</span>
                    <span v-if="lastNameError" class="text-pink-600">{{
                      lastNameError
                    }}</span>

                    <input
                      :class="{
                        'error-input': lastNameError,
                      }"
                      required
                      @input="lastNameError = ''"
                      v-model="lastName"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                  </label>
                  <label class="block col-span-2">
                    <span class="text-gray-700"
                      >Username
                      <span v-if="usernameError" class="text-pink-600">{{
                        usernameError
                      }}</span></span
                    >
                    <input
                      :class="{
                        'error-input': usernameError,
                      }"
                      required
                      @input="usernameError = ''"
                      v-model="username"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </label>
                  <label class="block col-span-2">
                    <span class="text-gray-700">Email address</span>
                    <span v-if="emailError" class="text-pink-600">{{
                      emailError
                    }}</span>
                    <input
                      :class="{
                        'error-input': emailError,
                      }"
                      required
                      @input="emailError = ''"
                      v-model="email"
                      type="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="john@example.com"
                    />
                  </label>
                  <label class="block col-span-2 mr-7">
                    <span class="text-gray-700"
                      >Password
                      <span v-if="passwordError" class="text-pink-600">{{
                        passwordError
                      }}</span></span
                    >
                    <div class="relative">
                      <input
                        :class="{
                          'error-input': passwordError,
                        }"
                        required
                        @input="passwordError = ''"
                        v-model="password"
                        :type="typeInput1"
                        class="mt-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <div
                        @click="
                          typeInput1 === 'password'
                            ? (typeInput1 = 'text')
                            : (typeInput1 = 'password')
                        "
                        class="-right-[41px] top-0 cursor-pointer rounded-r-md absolute border-2 text-lg w-[42px] h-[42px] text-center border-gray-300 shadow-sm"
                      >
                        <Icon name="ic:outline-remove-red-eye" />
                      </div>
                    </div>
                  </label>
                  <label class="block col-span-2 mr-7">
                    <span class="text-gray-700"
                      >Confirm password
                      <span v-if="rePasswordError" class="text-pink-600">{{
                        rePasswordError
                      }}</span></span
                    >
                    <div class="relative">
                      <input
                        :class="{
                          'error-input': rePasswordError,
                        }"
                        required
                        @input="rePasswordError = ''"
                        v-model="rePassword"
                        :type="typeInput2"
                        class="mt-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <div
                        @click="
                          typeInput2 === 'password'
                            ? (typeInput2 = 'text')
                            : (typeInput2 = 'password')
                        "
                        class="-right-[41px] top-0 cursor-pointer rounded-r-md absolute border-2 text-lg w-[42px] h-[42px] text-center border-gray-300 shadow-sm"
                      >
                        <Icon name="ic:outline-remove-red-eye" />
                      </div>
                    </div>
                  </label>
                  <div class="p-4 col-span-2">
                    <div class="flex flex-col items-center shrink-0">
                      <button
                        :disabled="
                          clickBtn ||
                          firstNameError !== '' ||
                          lastNameError !== '' ||
                          emailError !== '' ||
                          usernameError !== '' ||
                          passwordError !== ''
                        "
                        class="disabled:bg-gray-500 group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-800 text-white hover:text-slate-100 hover:bg-gray-500 active:bg-gray-800 active:text-gray-100 focus-visible:outline-gray-600 w-full"
                        type="submit"
                      >
                        <span v-if="!clickBtn"
                          >Sign up <span aria-hidden="true">→</span></span
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
  </div>
</template>
