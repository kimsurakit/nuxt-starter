<script setup>
import { onClickOutside } from "@vueuse/core";

definePageMeta({
  layout: "index",
});
const target = ref(null);
const { $showToast } = useNuxtApp();
const closeModal = () => {
  show.value = false;
};
onClickOutside(target, closeModal);
const address = ref([]);
const clickBtn = ref(false);
const apiFetch = useBaseFetch();
const companyTarget = ref("");
const show = ref(false);
onMounted(async () => {
  try {
    const data = await apiFetch("/api/address/list_create", {
      credentials: "include",
    });
    if (data.results) {
      address.value = [...data.results];
    }
  } catch (error) {
    console.log(error.response);
  }
});
function onDelete(item) {
  companyTarget.value = { ...item };
  show.value = true;
}
async function submit() {
  try {
    await apiFetch(`/api/address/delete/${companyTarget.value.id}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      credentials: "include",
    });

    $showToast("Success", "success", 2000);

    companyTarget.value = "";
    const data = await apiFetch("/api/address/list_create", {
      credentials: "include",
    });
    if (data.results) {
      address.value = [...data.results];
    }
  } catch (error) {
    $showToast("Fail", "error", 2000);
    console.log(error.message);
  } finally {
    show.value = false;
  }
}
</script>
<template>
  <div
    v-show="show"
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
          ref="target"
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 class="text-2xl font-bold">
              ยืนยันการลบ {{ companyTarget.name }}
            </h2>
            <div class="mt-8">
              <div class="grid grid-cols-1 gap-6">
                <div class="p-4">
                  <div class="flex flex-col items-center shrink-0">
                    <button
                      :disabled="clickBtn"
                      class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-600 text-white hover:text-slate-100 hover:bg-gray-500 active:bg-gray-800 active:text-gray-100 focus-visible:outline-gray-600 w-full"
                    >
                      <span v-if="!clickBtn">Delete </span>
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

  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="flex flex-wrap items-center py-5">
            <h1
              class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              My Address
            </h1>
          </div>
          <div class="grid grid-cols-6 gap-1">
            <NuxtLink
              to="/dashboard/company/create"
              class="col-span-3 p-4 mb-6 rounded-md text-gray-600 hover:border-blue-500 border-2 cursor-pointer hover:text-blue-500"
            >
              <div class="flex items-center justify-center">
                <h2 class="mb-4 mr-auto text-xl font-semibold">
                  Create New Address
                </h2>
              </div>
              <div class="p-4 text-8xl flex items-center justify-center">
                <Icon name="ic:baseline-add-circle-outline" />
              </div>
            </NuxtLink>
            <div
              v-if="address"
              v-for="item in address"
              :key="item.id"
              class="col-span-3 p-4 mb-6 rounded-md bg-gray-50"
            >
              <div class="flex items-center justify-end">
                <h2 class="mb-4 mr-auto text-xl font-semibold text-gray-600">
                  {{ item.name }} ({{ item.name_en }})
                </h2>
                <NuxtLink :to="`/dashboard/company/update/${item.id}`">
                  <Icon
                    class="ml-3 w-6 h-6 cursor-pointer hover:text-blue-500"
                    name="ic:baseline-edit"
                  ></Icon>
                </NuxtLink>
                <Icon
                  @click="onDelete(item)"
                  class="w-6 h-6 cursor-pointer hover:text-red-500"
                  name="ic:baseline-delete"
                ></Icon>
              </div>

              <div
                class="flex flex-wrap flex-col items-start justify-center mb-4"
              >
                <p class="mb-4 text-base text-gray-700">
                  {{
                    [
                      item.address,
                      item.province,
                      item.district,
                      item.sub_district,
                      item.zip_code,
                    ].join(",")
                  }}
                </p>
                <div class="mb-4 flex items-end">
                  <p class="text-sm text-gray-400">
                    เลขประจำตัวผู้เสียภาษี/TAX ID
                  </p>
                  <p class="ml-3 text-base text-gray-700">
                    {{ item.tax_id }}
                  </p>
                </div>
                <div class="mb-4 flex items-end">
                  <p class="text-sm text-gray-400">สาขาที่/BRANCH NO.</p>
                  <p class="ml-3 text-base text-gray-700">
                    {{ item.branch_no }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
