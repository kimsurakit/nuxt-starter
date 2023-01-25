<script setup>
definePageMeta({
  layout: "index",
});
const apiFetch = useBaseFetch();

const user = ref({
  email: "",
  first_name: "",
  last_name: "",
  position: "",
  line_id: "",
  telephone: "",
  mobile: "",
  address: "",
  province: "",
  district: "",
  sub_district: "",
  zip_code: "",
  company_name: "",
  tax_id: "",
  branch_no: "",
  company_address: "",
  company_province: "",
  company_district: "",
  company_sub_district: "",
  company_zip_code: "",
  id: null,
  username: "",
});
onMounted(async () => {
  try {
    const data = await apiFetch("/auth/users/me", {
      credentials: "include",
    });
    user.value = { ...user.value, ...data };
    console.log(user.value);
  } catch (error) {
    console.log(error);
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
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            ></div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">{{ user.first_name }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">{{ user.last_name }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Position</div>
                  <div class="px-4 py-2">{{ user.position }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Line ID</div>
                  <div class="px-4 py-2">{{ user.line_id }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Telephone</div>
                  <div class="px-4 py-2">{{ user.telephone }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Address</div>
                  <div class="px-4 py-2">
                    {{
                      [
                        user.address,
                        user.province,
                        user.district,
                        user.sub_district,
                        user.zip_code,
                      ].join(",")
                    }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800">{{ user.email }}</a>
                  </div>
                </div>
              </div>
            </div>
            <NuxtLink
              to="/dashboard/user"
              class="block w-full text-center text-orange-500 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Edit Profile
            </NuxtLink>
            <NuxtLink
              to="/dashboard/user/change_password"
              class="block w-full text-center text-orange-500 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Change your password
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
