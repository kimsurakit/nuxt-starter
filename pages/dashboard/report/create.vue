<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-gray-700 text-xl font-bold">
              ใบรายงานผล/Test report
            </h6>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form @submit.prevent="submit">
            <div>
              <Section msg="รายละเอียดบริษัท / Company  information ">
                <div class="flex flex-wrap gap-y-3">
                  <select
                    :disabled="otherAddressCheck"
                    v-if="addressList.length"
                    v-model="addressID"
                    class="block w-full sm:w-6/12 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option
                      v-for="(item, index) in addressList"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ `${item.name} (${item.name_en})` }}
                    </option>
                  </select>
                  <!--  -->
                  <div class="w-full px-4 flex flex-col lg:flex-row gap-x-2">
                    <div
                      @click="otherAddressCheck = false"
                      :class="[
                        {
                          'hover:bg-sky-500 hover:ring-sky-500':
                            otherAddressCheck,
                        },
                        {
                          ' border-2 border-sky-500': !otherAddressCheck,
                        },
                      ]"
                      v-if="addressSelect"
                      class="px-4 cursor-pointer group bg-white mb-4 rounded-md"
                    >
                      <div class="p-2 mb-4 flex flex-col h-full">
                        <h2
                          :class="{
                            'group-hover:text-white': otherAddressCheck,
                          }"
                          class="mb-1 mr-auto text-xl font-semibold text-gray-600"
                        >
                          {{ addressSelect.name }} ({{ addressSelect.name_en }})
                        </h2>
                        <div
                          class="flex flex-wrap flex-col items-start justify-center"
                        >
                          <p
                            :class="{
                              'group-hover:text-white': otherAddressCheck,
                            }"
                            class="mb-2 text-base text-gray-700"
                          >
                            {{
                              [
                                addressSelect.address,
                                addressSelect.province,
                                addressSelect.district,
                                addressSelect.sub_district,
                                addressSelect.zip_code,
                              ].join(",")
                            }}
                          </p>
                          <div class="mb-2 flex items-end">
                            <p
                              :class="{
                                'group-hover:text-white': otherAddressCheck,
                              }"
                              class="text-sm text-gray-400"
                            >
                              เลขประจำตัวผู้เสียภาษี/TAX ID
                            </p>
                            <p
                              :class="{
                                'group-hover:text-white': otherAddressCheck,
                              }"
                              class="ml-3 text-base text-gray-700"
                            >
                              {{ addressSelect.tax_id }}
                            </p>
                          </div>
                          <div class="mb-2 flex items-end">
                            <p
                              :class="{
                                'group-hover:text-white': otherAddressCheck,
                              }"
                              class="text-sm text-gray-400"
                            >
                              สาขาที่/BRANCH NO.
                            </p>
                            <p
                              :class="{
                                'group-hover:text-white': otherAddressCheck,
                              }"
                              class="ml-3 text-base text-gray-700"
                            >
                              {{ addressSelect.branch_no }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      @click="otherAddressCheck = true"
                      :class="[
                        {
                          'hover:bg-sky-500 hover:ring-sky-500':
                            !otherAddressCheck,
                        },
                        { 'border-2  border-sky-500': otherAddressCheck },
                      ]"
                      class="px-4 cursor-pointer group bg-white mb-4 rounded-md"
                    >
                      <div
                        class="p-2 mb-4 flex justify-center items-center h-full"
                      >
                        <h2
                          :class="{
                            'group-hover:text-white': !otherAddressCheck,
                          }"
                          class="mb-1 mr-auto text-xl font-semibold text-gray-600"
                        >
                          ตามที่อยู่อื่นๆ / Other address
                        </h2>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div
                    v-show="otherAddressCheck"
                    class="w-full flex flex-wrap gap-y-3"
                  >
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ชื่อบริษัท/Company name "
                      name="text"
                      v-model="report.company_info_receipt.company_name"
                    />
                    <TextInput
                      class="w-full lg:w-6/12 px-4"
                      msg="เลขประจำตัวผู้เสียภาษี/Tax ID"
                      name="text"
                      v-model="report.company_info_receipt.tax_id"
                    />
                    <TextInput
                      class="w-full lg:w-6/12 px-4"
                      msg="สาขาที่/Branch No."
                      name="text"
                      v-model="report.company_info_receipt.branch_no"
                    />
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ที่อยู่/Address"
                      name="text"
                      v-model="report.company_info_receipt.address"
                    />

                    <AutoComplete
                      class="w-full lg:w-6/12 px-4"
                      msg="จังหวัด/PROVINCE"
                      url="/api/v1/province"
                      v-model="report.company_info_receipt.province"
                    ></AutoComplete>

                    <DistricAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="อำเภอ/เขต/District"
                      url="/api/v1/district"
                      v-model="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:zipcode="report.company_info_receipt.zip_code"
                    >
                    </DistricAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="ตำบล/แขวง/Sub-district"
                      url="/api/v1/sub-district"
                      v-model="report.company_info_receipt.sub_district"
                      v-model:zipcode="report.company_info_receipt.zip_code"
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                    ></SubDistrictAuto>
                    <ZipCodeAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="รหัสไปรษณีย์/ZIP Code"
                      url="/api/v1/sub-district"
                      keyfiled="zip_code"
                      v-model="report.company_info_receipt.zip_code"
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                    ></ZipCodeAuto>
                  </div>
                </div>
              </Section>

              <hr class="mt-6 border-b-1 border-gray-300" />

              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section msg="รายละเอียดตัวอย่าง / Sample information">
                <div class="flex flex-wrap space-y-4">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        จำนวนตัวอย่างที่ต้องการทดสอบ / Number of samples:</label
                      >
                    </div>
                    <table class="border-collapse table-fixed w-full text-sm">
                      <thead>
                        <tr>
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      >
                        ผลการทดสอบ
                      </label>
                    </div>
                    <table class="border-collapse table-fixed w-full text-sm">
                      <thead>
                        <tr>
                          <th
                            class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left bg-blue-400"
                          >
                            ข้าวหอมมะลิ (%)
                          </th>
                          <th
                            class="border-b font-medium p-4 pt-0 pb-3 text-slate-600 text-left bg-red-300"
                          >
                            อื่นๆ (%)
                          </th>
                          <th
                            class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 text-left"
                          >
                            รวม (%)
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white">
                        <tr>
                          <td colspan="2">
                            <div class="flex">
                              <div class="bg-blue-400 w-[90%]">90%</div>
                              <div class="bg-red-300 w-[10%]">10%</div>
                            </div>
                          </td>

                          <td
                            class="border-b border-slate-100 p-4 pr-8 text-slate-500"
                          >
                            100%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>

              <hr class="mt-6 border-b-1 border-gray-300" />

              <Section msg="รายละเอียดการทดสอบ">
                <div class="flex flex-wrap gap-y-3">
                  <TextInput
                    class="w-full lg:w-6/12 px-4"
                    msg="วิธีการทดสอบ"
                    name="text"
                    v-model="report.company_info_receipt.tax_id"
                  />
                  <TextInput
                    class="w-full lg:w-6/12 px-4"
                    msg="เครื่องมือที่ใช้ (หลังบ้าน*)"
                    name="text"
                    v-model="report.company_info_receipt.branch_no"
                  />
                  <div class="w-full lg:w-4/12 px-4">
                    <label class="block">
                      <span class="text-gray-700">วันที่รับตัวอย่าง</span>
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <label class="block">
                      <span class="text-gray-700">วันที่เริ่มทดสอบ</span>
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <label class="block">
                      <span class="text-gray-700">วันที่สิ้นสุดการทดสอบ</span>
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                </div>
              </Section>

              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section msg="หมายเหตุ / remark ">
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-4/12 px-4">
                    <TextInput msg="ผู้จัดทำ" name="text" />
                    <label class="block">
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <TextInput msg="ผู้ตรวจ" name="text" />
                    <label class="block">
                      <input
                        type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </div>
                </div>
              </Section>
              <div class="p-3 flex justify-end gap-x-2">
                <button
                  v-show="show2"
                  @click="
                    {
                      show1 = true;
                      show2 = false;
                    }
                  "
                  type="button"
                  class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-700 hover:text-white px-3"
                >
                  <div class="flex flex-row align-middle">
                    <svg
                      class="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="ml-2">Prev</p>
                  </div>
                </button>
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
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer class="block py-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-gray-200" />
    </div>
  </footer>
</template>
<script setup>
definePageMeta({
  layout: "index",
});
const othShow = ref(false);
const numb = ref(1);
const samples = ref([{ id: 1, test_item: "01" }]);
const lang1 = ref(false);
const lang_th = reactive({
  language: "TH",
  company_name: "",
  address: "",
  province: "",
  district: "",
  sub_district: "",
  zip_code: "",
});
const lang_en = reactive({
  language: "EN",
  company_name: "",
  address: "",
  province: "",
  district: "",
  sub_district: "",
  zip_code: "",
});
const lang2 = ref(false);
const show = ref(false);
const show1 = ref(true);
const show2 = ref(false);
const user = ref({});
const otherAddressCheck = ref(false);
const otherAddressReportCheck = ref(false);

const report = useReport();
const { is_general_info } = storeToRefs(report);
is_general_info.value = true;
// const report = reactive({
//   sample: [],
//   company_info_receipt: {
//     company_name: "",
//     tax_id: "",
//     branch_no: "",
//     address: "",
//     province: "",
//     district: "",
//     sub_district: "",
//     zip_code: "",
//   },
//   company_info_person: {
//     first_name: "",
//     last_name: "",
//     position: "",
//     email: "",
//     line_id: "",
//     telephone: "",
//     mobile: "",
//   },
//   company_info_test_report: [],
//   is_general_info: false,
//   is_research: false,
//   is_domestic_consume: false,
//   is_export_to_country: false,
//   other_objective: "",
//   delivery_means: null,
//   other_delivery_means: "",
//   by_post: null,
//   other_address: {
//     address: "",
//     province: "",
//     district: "",
//     sub_district: "",
//     zip_code: "",
//   },
//   is_email_noti: false,
//   is_line_noti: false,
//   remark: "",
//   country: "",
// });
const apiFetch = useBaseFetch();
const { $showToast } = useNuxtApp();
const addressList = ref([]);
const addressID = ref();
const addressReportID = ref();
const addressSelect = ref();
const addressSelectReport = ref();

onMounted(async () => {
  try {
    const data = await apiFetch("/auth/users/me/", {
      credentials: "include",
    });

    if (data) {
      report.company_info_person.first_name = data.first_name;
      report.company_info_person.last_name = data.last_name;
      report.company_info_person.position = data.position;
      report.company_info_person.email = data.email;
      report.company_info_person.line_id = data.line_id;
      report.company_info_person.telephone = data.telephone;
      report.company_info_person.mobile = data.mobile;

      report.company_info_receipt.company_name = data.company_name;
      report.company_info_receipt.tax_id = data.tax_id;
      report.company_info_receipt.branch_no = data.branch_no;
      report.company_info_receipt.address = data.company_address;
      report.company_info_receipt.province = data.company_province;
      report.company_info_receipt.district = data.company_district;
      report.company_info_receipt.sub_district = data.company_sub_district;
      report.company_info_receipt.zip_code = data.company_zip_code;
    }
    const response = await apiFetch("/api/v1/address/list_create", {
      credentials: "include",
    });
    if (response.length) {
      console.log(response);
      addressList.value = [...response];
      addressSelect.value = { ...addressList.value[0] };
      addressSelectReport.value = { ...addressList.value[0] };
      addressID.value = addressSelect.value.id;
      addressReportID.value = addressSelectReport.value.id;
    } else {
      otherAddressCheck.value = true;
      otherAddressReportCheck.value = true;
    }
  } catch (error) {
    console.log(error);
  }
});
watch(addressID, () => {
  addressSelect.value = addressList.value.filter((t) => {
    if (t.id === addressID.value) {
      return t;
    }
  })[0];
});
watch(addressReportID, () => {
  addressSelectReport.value = addressList.value.filter((t) => {
    if (t.id === addressReportID.value) {
      return t;
    }
  })[0];
});
watch(numb, (newValue, oldValue) => {
  if (numb.value < 0 || !numb.value) {
    numb.value = 0;
    samples.value = [];
  } else if (oldValue < newValue) {
    for (let i = oldValue + 1; i <= newValue; i++) {
      samples.value.push({ id: i, test_item: "01" });
    }
  } else if (oldValue > newValue) {
    samples.value.forEach((sample, index) => {
      if (sample.id !== index + 1) {
        sample.id = index + 1;
      }
    });
    for (let i = oldValue; i > newValue; i--) {
      samples.value = samples.value.filter((t) => t.id !== i);
    }
  }
});
async function submit() {
  if (samples.value) {
    report.sample = samples.value.map(({ sample_code_name, test_item }) => ({
      sample_code_name,
      test_item,
    }));
  }

  if (!otherAddressCheck.value) {
    report.company_info_receipt.company_name = addressSelect.value.name;
    report.company_info_receipt.tax_id = addressSelect.value.tax_id;
    report.company_info_receipt.branch_no = addressSelect.value.branch_no;
    report.company_info_receipt.address = addressSelect.value.address;
    report.company_info_receipt.province = addressSelect.value.province;
    report.company_info_receipt.district = addressSelect.value.district;
    report.company_info_receipt.sub_district = addressSelect.value.sub_district;
    report.company_info_receipt.zip_code = addressSelect.value.zip_code;
  }

  if (!otherAddressReportCheck.value) {
    report.company_info_test_report.push({
      language: "TH",
      company_name: addressSelectReport.value.name,
      address: addressSelectReport.value.address,
      province: addressSelectReport.value.province,
      district: addressSelectReport.value.district,
      sub_district: addressSelectReport.value.sub_district,
      zip_code: addressSelectReport.value.zip_code,
    });
    report.company_info_test_report.push({
      language: "EN",
      company_name: addressSelectReport.value.name_en,
      address: addressSelectReport.value.address_en,
      province: addressSelectReport.value.province_en,
      district: addressSelectReport.value.district_en,
      sub_district: addressSelectReport.value.sub_district_en,
      zip_code: addressSelectReport.value.zip_code,
    });
  } else {
    report.company_info_test_report.push(lang_th);

    report.company_info_test_report.push(lang_en);
    console.log(report.company_info_test_report);
  }

  try {
    show.value = true;

    const response = await apiFetch("/api/v1/dna/list_create/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(report.$state),
    });
    if (response) {
      console.log(response);
      $showToast("Success", "success", 2000);
      report.$reset();
      await navigateTo(`/dashboard/confirm/${response.id}`);

      // await navigateTo("/dashboard/report");
    }
  } catch (error) {
    report.company_info_test_report = [];
    $showToast("Fail", "error", 2000);
  } finally {
    show.value = false;
  }
}

function removeSample(sample) {
  samples.value = samples.value.filter((t) => t !== sample);
  console.log(samples.value);

  numb.value = samples.value.length;
}

function reduceNum() {
  numb.value--;
}
</script>
