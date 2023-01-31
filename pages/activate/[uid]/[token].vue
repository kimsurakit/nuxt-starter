<template>
  <div v-if="success" class="bg-white">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
    >
      <h1
        class="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 leading-relaxed"
      >
        Your account is now active!
      </h1>

      <div class="relative rounded-xl overflow-auto p-2">
        <div class="grid place-items-center">
          <a
            href="/dashboard/create"
            class="bg-darkGreen hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["check"],
});
const route = useRoute();
const success = ref(true);

const apiFetch = useBaseFetch();

try {
  const response = await apiFetch(`/auth/users/activation/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ uid: route.params.uid, token: route.params.token }),
  });
  success.value = true;
} catch (error) {
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>
