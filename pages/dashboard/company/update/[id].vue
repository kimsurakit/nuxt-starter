<script setup>
definePageMeta({
  layout: "index",
});

const address = ref({
  name: "",
  name_en: "",
  tax_id: "",
  branch_no: "",
  address: "",
  province: "",
  district: "",
  sub_district: "",
  address_en: "",
  province_en: "",
  district_en: "",
  sub_district_en: "",
  zip_code: "",
});
const route = useRoute();

const show = ref(false);
const apiFetch = useBaseFetch();
const { $showToast } = useNuxtApp();
async function submit() {
  console.log(JSON.stringify(address.value));
  try {
    const response = await apiFetch(`/api/address/update/${route.params.id}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
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
onMounted(async () => {
  console.log();
  try {
    const data = await apiFetch(`/api/address/detail/${route.params.id}`, {
      credentials: "include",
    });

    address.value = { ...data };
  } catch (error) {
    if (error.status == 404) {
      console.log(error.status);
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
          <form @submit.prevent="submit">
            <Section msg="ข้อมูลบริษัท /Company information">
              <div class="w-full flex flex-wrap gap-y-3">
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ชื่อบริษัท"
                  name="text"
                  v-model="address.name"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="ที่อยู่"
                  name="text"
                  v-model="address.address"
                ></TextInput>
                <TextInput
                  class="w-full lg:w-12/12 px-4"
                  msg="Company name"
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
                  msg="ADDRESS"
                  name="text"
                  v-model="address.address_en"
                ></TextInput>

                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="จังหวัด/PROVINCE"
                  url="/api/province/search"
                  eng="true"
                  v-model="address.province"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:test="testData"
                  v-model:district-en="address.district_en"
                  v-model:province-en="address.province_en"
                  v-model:sub-district-en="address.sub_district_en"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="อำเภอ/เขต/District"
                  url="/api/district/search"
                  eng="true"
                  v-model="address.district"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:test="testData"
                  v-model:district-en="address.district_en"
                  v-model:province-en="address.province_en"
                  v-model:sub-district-en="address.sub_district_en"
                >
                </SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="ตำบล/แขวง/Sub-district"
                  url="/api/search"
                  eng="true"
                  v-model="address.sub_district"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:test="testData"
                  v-model:district-en="address.district_en"
                  v-model:province-en="address.province_en"
                  v-model:sub-district-en="address.sub_district_en"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="รหัสไปรษณีย์/ZIP Code"
                  url="/api/zip_code/search"
                  eng="true"
                  v-model="address.zip_code"
                  v-model:province="address.province"
                  v-model:zipcode="address.zip_code"
                  v-model:sub-district="address.sub_district"
                  v-model:district="address.district"
                  v-model:test="testData"
                  v-model:district-en="address.district_en"
                  v-model:province-en="address.province_en"
                  v-model:sub-district-en="address.sub_district_en"
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
