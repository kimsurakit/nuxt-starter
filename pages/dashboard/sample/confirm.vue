<script setup>
definePageMeta({
  layout: "index",
});
</script>
<template>
  <div class="relative md:ml-64 bg-gray-200">
    <div class="px-4 md:px-10 mx-auto w-full -m-24 pt-32">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
          >
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between bg-darkGreen p-3">
                <h6 class="text-white text-xl font-bold">
                  ยืนยันการชำระเงิน / Payment confirmation
                </h6>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0 mt-4">
                <div class="text-center flex justify-between p-4">
                  <h6 class="text-gray-700 text-xl font-bold">
                    รายละเอียดการชำระเงิน
                  </h6>
                </div>
                <div class="flex flex-wrap space-y-4">
                  <div class="w-full lg:w-6/12 px-4">
                    <label class="block">
                      <span class="text-gray-700">ชำระเงินเมื่อวันที่ </span>
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                  <div class="w-full lg:w-7/12 px-4">
                    <label
                      for="formFileSm"
                      class="form-label inline-block mb-2 text-gray-700"
                      >แนบหลักฐานการชำระเงิน
                    </label>
                    <input
                      class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                      id="formFileSm"
                      type="file"
                      name="passpost_data"
                      accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
              <div class="p-3 flex justify-end gap-x-2">
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
