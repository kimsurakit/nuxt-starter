<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-gray-700 text-xl font-bold">
              แก้ไขข้อมูลทะเบียนผู้ใช้/ Edit User Profile
            </h6>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form @submit.prevent="submit">
            <Section msg="ข้อมูลช่องทางติดต่อของผู้ใช้ / User information">
              <div class="flex flex-wrap gap-y-3 lg:w-1/2 w-full">
                <!-- <TextInput
                  class="w-full lg:w-6/12 px-4"
                  v-model="user.username"
                  msg="Username"
                  name="text"
                ></TextInput> -->
                <!-- <TextInput
                  class="w-full"
                  v-model="user.email"
                  msg="อีเมล์/Email Address"
                  name="email"
                ></TextInput> -->

                <TextInput
                  class="w-full sm:w-1/2 sm:pr-3"
                  v-model="user.first_name"
                  msg="ชื่อ/First Name"
                  name="text"
                ></TextInput>
                <TextInput
                  class="w-full sm:w-1/2"
                  v-model="user.last_name"
                  msg="นามสกุล/Last Name"
                  name="text"
                ></TextInput>
                <TextInput
                  class="w-full"
                  v-model="user.position"
                  msg="ตำแหน่ง/Position"
                  name="text"
                ></TextInput>
                <TextInput
                  class="w-full"
                  v-model="user.telephone"
                  msg="โทรศัพท์/Telephone"
                  name="text"
                ></TextInput>
                <TextInput
                  class="w-full"
                  v-model="user.mobile"
                  msg="มือถือ/Mobile"
                  name="text"
                ></TextInput>
                <TextInput
                  class="w-full"
                  v-model="user.line_id"
                  msg="Line ID"
                  name="text"
                ></TextInput>
                <!-- <TextInput
                  class="w-full lg:w-12/12 px-4"
                  v-model="user.address"
                  msg="ที่อยู่/Address"
                  name="text"
                ></TextInput>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="จังหวัด/PROVINCE"
                  url="/api/v1/province/search"
                  v-model="user.province"
                  v-model:sub-district="user.sub_district"
                  v-model:subDistrictStr="user.sub_district_str"
                  v-model:zipcode="user.zip_code"
                  v-model:district="user.district"
                  v-model:province="user.province"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="อำเภอ/เขต/District"
                  url="/api/v1/district/search"
                  v-model="user.district"
                  v-model:sub-district="user.sub_district"
                  v-model:subDistrictStr="user.sub_district_str"
                  v-model:zipcode="user.zip_code"
                  v-model:district="user.district"
                  v-model:province="user.province"
                >
                </SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="ตำบล/แขวง/Sub-district"
                  url="/api/v1/sub_district"
                  v-model="user.sub_district_str"
                  v-model:sub-district="user.sub_district"
                  v-model:subDistrictStr="user.sub_district_str"
                  v-model:zipcode="user.zip_code"
                  v-model:district="user.district"
                  v-model:province="user.province"
                ></SubDistrictAuto>
                <SubDistrictAuto
                  class="w-full lg:w-6/12 px-4"
                  msg="รหัสไปรษณีย์/ZIP Code"
                  url="/api/v1/zip_code/search"
                  v-model="user.zip_code"
                  v-model:subDistrictStr="user.sub_district_str"
                  v-model:sub-district="user.sub_district"
                  v-model:zipcode="user.zip_code"
                  v-model:district="user.district"
                  v-model:province="user.province"
                ></SubDistrictAuto> -->
              </div></Section
            >

            <hr class="mt-6 border-b-1 border-gray-300 lg:w-1/2 w-full" />

            <div class="p-3 flex justify-end gap-x-3 lg:w-1/2 w-full">
              <NuxtLink
                to="/dashboard/profile"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-pointer"
                type="button"
              >
                Back
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
  <footer class="block py-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-gray-200" />
    </div>
  </footer>
</template>
<script setup>
definePageMeta({
  layout: "index",
  middleware: ["check"],
});
const apiFetch = useBaseFetch();

const authUser = useAuthUser();
const user = ref({
  first_name: "",
  last_name: "",
  position: "",
  line_id: "",
  telephone: "",
  mobile: "",
});
const show = ref(false);
const { $showToast } = useNuxtApp();
async function submit() {
  show.value = true;

  try {
    const response = await apiFetch("/auth/users/me/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(user.value),
    });
    if (response) {
      $showToast("Success", "success", 2000);
      console.log(response);
      await navigateTo("/dashboard/profile");
    }
  } catch (error) {
    console.log(error);
  } finally {
    show.value = false;
  }
}
onMounted(async () => {
  try {
    const data = await apiFetch("/auth/users/me", {
      credentials: "include",
    });

    user.value = { ...user.value, ...data };
    console.log(user.value);
  } catch (error) {
    console.log(error.response);
  }
});
</script>
