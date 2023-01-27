<script setup>
definePageMeta({
  layout: "index",
});
const data = ref([]);
const n = ref("");
const prev = ref(false);
const apiFetch = useBaseFetch();

onMounted(async () => {
  const response = await apiFetch("/api/v1/dna/list_create/", {
    method: "GET",
    credentials: "include",
  });
  n.value = response.next;
  console.log(response);
  prev.value = response.previous;
  data.value = response.results;
});
async function test() {
  const response = await $fetch(n.value, {
    method: "GET",
    credentials: "include",
  });
  n.value = response.next;
  console.log(response);
  prev.value = response.previous;
  data.value = response.results;
}
async function testPrev() {
  const response = await $fetch(prev.value, {
    method: "GET",
    credentials: "include",
  });
  n.value = response.next;

  prev.value = response.previous;
  data.value = response.results;
}
</script>
<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="w-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div class="p-4 flex justify-between">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                    placeholder="Search for items"
                  />
                </div>
                <NuxtLink
                  class="lg:rounded-md rounded-full flex gap-x-2 lg:mt-1 items-center justify-center px-4 py-2 lg:mb-2 text-sm text-gray-100 bg-orange-500 mb-0 hover:bg-orange-600"
                  to="/dashboard/create"
                  ><Icon name="ic:baseline-plus"></Icon>
                  <span class="hidden lg:inline-block"
                    >Create New</span
                  ></NuxtLink
                >
              </div>
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label for="checkbox-all-search" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">Request ID</th>
                    <th scope="col" class="px-6 py-3">SampleID</th>
                    <th scope="col" class="px-6 py-3">Requested Date</th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-if="data.length"
                    v-for="item in data"
                    :key="item.id"
                    class="bg-white border-b hover:bg-gray-50"
                  >
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label for="checkbox-table-search-1" class="sr-only"
                          >checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {{ item.request_no }}
                    </td>
                    <td class="px-6 py-4">{{ item.request_no }}</td>
                    <td class="px-6 py-4">{{ item.create_at }}</td>

                    <td class="px-6 py-4 text-right flex gap-x-2">
                      <NuxtLink
                        :to="`/dashboard/report/confirm/${item.id}`"
                        class="font-medium text-blue-600 hover:underline"
                      >
                        View
                      </NuxtLink>
                      <NuxtLink
                        :to="`/dashboard/report/update/${item.id}`"
                        class="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </NuxtLink>
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="5">
                      <div
                        class="bg-gray-200 text-center text-black p-3 flex items-center justify-center flex-col"
                      >
                        No Data
                        <NuxtLink
                          class="flex items-center px-4 py-2 mb-2 text-sm text-gray-100 bg-orange-500 rounded-md md:mb-0 hover:bg-orange-600"
                          to="/dashboard/create"
                          >Create New</NuxtLink
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              >
                <div class="flex flex-1 justify-between">
                  <button
                    @click="testPrev"
                    :disabled="!prev"
                    :class="[!prev ? 'hover:bg-withe' : 'hover:bg-gray-50']"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Previous
                  </button>
                  <button
                    @click="test"
                    :disabled="!n"
                    :class="[!n ? 'hover:bg-withe' : 'hover:bg-gray-50']"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
