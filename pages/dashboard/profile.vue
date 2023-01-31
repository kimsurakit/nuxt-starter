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
        <div class="rounded-t bg-white mb-0 px-6 py-6 col-span-2">
          <div class="p-3 shadow-sm rounded-sm">
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li
                class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Full Name:</strong> &nbsp;
                {{ user.first_name }} {{ user.last_name }}
              </li>
              <li
                class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Position:</strong> &nbsp;
                {{ user.position }}
              </li>
              <li
                class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Username:</strong> &nbsp;
                {{ user.username }}
              </li>
              <li
                class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Mobile:</strong> &nbsp;
                {{ user.mobile }}
              </li>
              <li
                class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Email:</strong> &nbsp;
                {{ user.email }}
              </li>
              <li
                class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"
              >
                <strong class="text-slate-700">Telephone:</strong> &nbsp;
                {{ user.telephone }}
              </li>
              <li
                class="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit"
              >
                <strong class="leading-normal text-size-sm text-slate-700"
                  >Line ID:</strong
                >
                &nbsp;
                {{ user.line_id }}
              </li>
            </ul>
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
