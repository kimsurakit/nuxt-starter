<template>
  <div
    class="flex items-center justify-center min-h-screen p-5 bg-white min-w-screen"
  >
    <div
      class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-16"
    >
      <h3 class="text-2xl">Resend Activation E-mail</h3>
      <div class="flex justify-center">
        <Icon class="w-32 h-32 text-blue-600" name="ic:baseline-email" />
      </div>

      <form
        @submit.prevent="submit"
        class="flex justify-center flex-col gap-y-2"
      >
        <label class="flex flex-col gap-y-3">
          <span class="text-gray-700">Please enter your email</span>
          <span v-if="emailError" class="text-pink-600">{{ emailError }}</span>
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
        <button
          :disabled="emailError !== ''"
          class="px-2 py-2 text-blue-200 bg-blue-600 rounded disabled:bg-gray-500"
        >
          Click to Resend Email
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
const email = ref("");
const emailError = ref("");

const apiFetch = useBaseFetch();

definePageMeta({
  middleware: ["check"],
  // or middleware: 'auth'
});
async function submit() {
  try {
    await apiFetch("/auth/users/resend_activation/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email: email.value }),
    });
    await navigateTo("success");
  } catch (error) {
    console.log(error);
    emailError.value = "อีเมลไม่ถูกต้อง";
  }
}
</script>
