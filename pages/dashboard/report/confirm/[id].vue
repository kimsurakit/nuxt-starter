<script setup>
const route = useRoute();
const report = ref(null);
definePageMeta({
  layout: "index",
});
const apiFetch = useBaseFetch();
const statusCode = ref();
onMounted(async () => {
  try {
    const data = await apiFetch(`/api/v1/dna/${route.params.id}`, {
      credentials: "include",
    });
    console.log(data);
    report.value = data;
  } catch (error) {
    if (error.status == 404) {
      // console.log(error.status);
      showError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  }
});
</script>
<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="grid gap-4 grid-cols-12">
            <div class="p-8 col-span-12 mx-6 my-3">
              <div class="border-slate-300 border-b-[1px] overflow-x-auto">
                <table class="min-w-full border-collapse">
                  <thead class="bg-slate-100">
                    <tr>
                      <th class="uppercase p-4 text-left font-semibold text-xs">
                        รายการทดสอบ Test item
                      </th>
                      <th class="uppercase p-4 text-left font-semibold text-xs">
                        จำนวนตัวอย่าง Number of Samples
                      </th>
                      <th class="uppercase p-4 text-left font-semibold text-xs">
                        ราคาต่อตัวอย่าง (บาท) Price per sample (Baht)
                      </th>
                      <th class="uppercase p-4 text-left font-semibold text-xs">
                        ราคา (บาท) Subtotal (Baht)
                      </th>
                    </tr>
                  </thead>
                  <tbody v-if="report">
                    <tr>
                      <td
                        class="font-normal text-left text-sm p-4 whitespace-nowrap"
                      >
                        <div class="font-semibold text-lg">
                          ตรวจการปลอมปนข้าวหอมมะลิไทย
                        </div>
                      </td>
                      <td
                        class="font-normal text-right text-2xl p-4 whitespace-nowrap"
                      >
                        {{ report.sample.length }}
                      </td>
                      <td
                        class="font-normal text-right text-2xl p-4 whitespace-nowrap text-slate-400"
                      >
                        2,000
                      </td>
                      <td
                        class="font-normal text-right text-2xl p-4 whitespace-nowrap 0"
                      >
                        {{ report.summary }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="ml-auto text-left w-72">
                <div class="flex justify-between">
                  <div class="font-medium text-slate-400">ราคารวม /Total</div>
                  <div v-if="report" class="font-medium">
                    {{ report.summary }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6">
              <iframe
                class="w-full h-[40rem]"
                v-if="report"
                :src="report.report_file"
                title="PDF"
              ></iframe>
            </div>
            <div class="col-span-12 md:col-span-6">
              <iframe
                class="w-full h-[40rem]"
                v-if="report"
                :src="report.invoice"
                title="PDF"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="p-3 flex justify-end gap-x-2">
          <NuxtLink
            class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer"
            to="/dashboard/report"
          >
            <!--v-if-->
            Exit
          </NuxtLink>
          <button
            class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer"
            type="submit"
          >
            <!--v-if-->
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
