<script setup>
definePageMeta({
  layout: "index",
});
const show1 = ref(false);
const show2 = ref(false);
const address = ref({
  name_th: "",
  name_en: "",
  tax_id: "",
  branch_no: "",
  address_th: "",
  sub_district: "",
  sub_district_str: "",
  province: "",
  district: "",
  zip_code: "",

  address_en: "",
});

const firstName = ref("");
const lastName = ref("");
const firstNameEn = ref("");
const lastNameEn = ref("");
const individual = ref({
  name_th: "",
  name_en: "",
  tax_id: "",
  branch_no: "",
  address: "",
  sub_district: "",
});
const show = ref(false);
const apiFetch = useBaseFetch();
const { $showToast } = useNuxtApp();
async function submit() {
  try {
    const response = await apiFetch("/api/v1/address/list_create/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(address.value),
    });
    if (response) {
      $showToast("Success", "success", 2000);
    }
    await navigateTo("/dashboard/company");
  } catch (error) {
    $showToast("Fail", "error", 2000);
    console.log(error.message);
  }
}
async function submitIndividual() {
  individual.value.name_th = `${firstName.value} ${lastName.value}`;
  individual.value.name_en = `${firstNameEn.value} ${lastNameEn.value}`;
  console.log(individual.value);
  try {
    const response = await apiFetch("/api/v1/address/list_create/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(individual.value),
    });
    if (response) {
      $showToast("Success", "success", 2000);
    }
    await navigateTo("/dashboard/company");
  } catch (error) {
    $showToast("Fail", "error", 2000);
    console.log(error.message);
  }
}
</script>
<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <Radio
            class="w-full lg:w-8/12 px-4"
            msg="บุคคลธรรมดา / Individual"
            name="show"
            v-model="show1"
            id="show"
            value="One"
          ></Radio>
          <Radio
            class="w-full lg:w-8/12 px-4"
            msg="บริษัท /Company "
            name="show"
            v-model="show1"
            id="show"
            value="Two"
          ></Radio>
          <form v-show="show1 === 'One'" @submit.prevent="submitIndividual">
            <Section msg="บุคคลธรรมดา / Individual ">
              <div class="w-full flex flex-wrap gap-y-3">
                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="ชื่อ/First Name"
                  name="text"
                  v-model="firstName"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="นามสกุล/Last Name"
                  name="text"
                  v-model="lastName"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="First Name (English"
                  name="text"
                  v-model="firstNameEn"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="Last Name (English"
                  name="text"
                  v-model="lastNameEn"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ที่อยู่/Address"
                  name="text"
                  v-model="individual.address"
                ></TextInput>

                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ที่อยู่(ภาษาอังกฤษ)"
                  name="text"
                  v-model="individual.address_en"
                ></TextInput>

                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="จังหวัด/PROVINCE"
                  url="/api/v1/province/search"
                  v-model="individual.province"
                  v-model:zipcode="individual.zip_code"
                  v-model:sub-district="individual.sub_district"
                  v-model:district="individual.district"
                  v-model:province="individual.province"
                  v-model:subDistrictStr="individual.subDistrictStr"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="อำเภอ/เขต/District"
                  url="/api/v1/district/search"
                  v-model="individual.district"
                  v-model:zipcode="individual.zip_code"
                  v-model:sub-district="individual.sub_district"
                  v-model:district="individual.district"
                  v-model:province="individual.province"
                  v-model:subDistrictStr="individual.subDistrictStr"
                >
                </SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="ตำบล/แขวง/Sub-district"
                  url="/api/v1/sub_district"
                  v-model="individual.subDistrictStr"
                  v-model:zipcode="individual.zip_code"
                  v-model:sub-district="individual.sub_district"
                  v-model:district="individual.district"
                  v-model:province="individual.province"
                  v-model:subDistrictStr="individual.subDistrictStr"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="รหัสไปรษณีย์/ZIP Code"
                  url="/api/v1/zip_code/search"
                  v-model="individual.zip_code"
                  v-model:zipcode="individual.zip_code"
                  v-model:sub-district="individual.sub_district"
                  v-model:district="individual.district"
                  v-model:province="individual.province"
                  v-model:subDistrictStr="individual.subDistrictStr"
                ></SubDistrictAuto>
              </div>
            </Section>

            <hr class="mt-6 border-b-1 border-gray-300" />

            <div class="p-3 flex justify-end">
              <NuxtLink
                class="mr-3 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-pointer"
                to="/dashboard/company/"
              >
                Cancel
              </NuxtLink>
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
          </form>
          <form v-show="show1 === 'Two'" @submit.prevent="submit">
            <Section msg="บริษัท /Company ">
              <div class="w-full flex flex-wrap gap-y-3">
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ชื่อบริษัท (ภาษาไทย) "
                  name="text"
                  v-model="address.name_th"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ที่อยู่ (ภาษาไทย)/Address"
                  name="text"
                  v-model="address.address_th"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="Company Name (English)"
                  name="text"
                  v-model="address.name_en"
                ></TextInput>

                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="เลขประจำตัวผู้เสียภาษี/Tax ID"
                  name="text"
                  v-model="address.tax_id"
                />
                <TextInput
                  class="w-full lg:w-6/12 px-4"
                  msg="สาขาที่/Branch No."
                  name="text"
                  v-model="address.branch_no"
                /><TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="Address (English)"
                  name="text"
                  v-model="address.address_en"
                ></TextInput>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="จังหวัด/PROVINCE"
                  url="/api/v1/province/search"
                  v-model="address.province"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:subDistrictStr="address.subDistrictStr"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="อำเภอ/เขต/District"
                  url="/api/v1/district/search"
                  v-model="address.district"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:subDistrictStr="address.subDistrictStr"
                >
                </SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="ตำบล/แขวง/Sub-district"
                  url="/api/v1/sub_district"
                  v-model="address.subDistrictStr"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:subDistrictStr="address.subDistrictStr"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="รหัสไปรษณีย์/ZIP Code"
                  url="/api/v1/zip_code/search"
                  v-model="address.zip_code"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:subDistrictStr="address.subDistrictStr"
                ></SubDistrictAuto>
              </div>
            </Section>

            <hr class="mt-6 border-b-1 border-gray-300" />

            <div class="p-3 flex justify-end">
              <NuxtLink
                class="mr-3 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-pointer"
                to="/dashboard/company/"
              >
                Cancel
              </NuxtLink>
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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
