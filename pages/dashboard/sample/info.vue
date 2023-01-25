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
                  รายละเอียดตัวอย่าง / Sample information
                </h6>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0 mt-4">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-700 text-xl font-bold">
                    จำนวนตัวอย่างที่ต้องการทดสอบ / Number of samples:
                  </h6>
                </div>
                <div class="flex flex-wrap space-y-4">
                  <div class="w-full px-4 mt-4">
                    <table class="border-collapse table-fixed w-full text-sm">
                      <thead>
                        <tr class="border">
                          <th
                            class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            ลำดับ No.
                          </th>
                          <th
                            class="border-b font-medium p-4 pt-0 pb-3 text-slate-600 text-left"
                          >
                            ชื่อตัวอย่าง/รหัสตัวอย่าง Sample & Code Name
                          </th>
                          <th
                            class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            รายการทดสอบ Test item
                          </th>
                          <th
                            class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            QC
                          </th>
                          <th
                            class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            Note
                          </th>
                          <th
                            class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            Sample ID
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white">
                        <tr>
                          <td
                            class="border-b border-slate-100 p-4 pl-8 text-slate-500"
                          >
                            S0001
                          </td>
                          <td
                            class="border-b border-slate-100 p-4 text-slate-500"
                          >
                            ตัวอย่าง1 / rice 1
                          </td>
                          <td
                            class="border-b border-slate-100 p-4 pr-8 text-slate-500"
                          >
                            ตรวจการปลอมปนข้าวหอมมะลิไทย/ ENG
                          </td>
                          <td
                            class="border-b border-slate-100 p-4 pr-8 text-slate-500"
                          >
                            <div class="flex gap-x-3">
                              <label
                                class="relative w-full mb-3 inline-flex items-center"
                                ><input
                                  type="radio"
                                  name="ship"
                                  class="form-radio border-1 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                  value="BH"
                                /><span class="ml-2 text-sm">ผ่าน</span></label
                              >
                              <label
                                class="relative w-full mb-3 inline-flex items-center"
                                ><input
                                  type="radio"
                                  name="ship"
                                  class="form-radio border-1 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                  value="BH"
                                /><span class="ml-2 text-sm"
                                  >ไม่ผ่าน</span
                                ></label
                              >
                            </div>
                          </td>
                          <td
                            class="border-b border-slate-100 p-4 pr-8 text-slate-500"
                          ></td>
                          <td
                            class="border-b border-slate-100 p-4 pr-8 text-slate-500"
                          >
                            Sample ID
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="w-full lg:w-6/12 px-4">
                    <label class="block">
                      <span class="text-gray-700"
                        >วันรับตัวอย่าง/ Recieved Date
                      </span>
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
