<template>
  <div class="relative">
    <label class="block uppercase text-gray-600 text-xs font-bold mb-2">
      {{ msg }}</label
    ><input
      type="text"
      :value="modelValue"
      @click="init"
      @input="emitValue"
      class="invalid:border-pink-500 invalid:text-pink-600 invalid:border border-0 px-3 py-3 placeholder-gray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />

    <ul
      ref="target"
      v-show="searchProvince.length && searchShow"
      class="max-h-56 overflow-y-auto absolute z-20 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200"
    >
      <li
        class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 cursor-pointer hover:bg-gray-200"
        v-for="(item, index) in searchProvince"
        :key="index"
        @click="selectProvince(item)"
      >
        {{
          `${item.zip_code} > ${item.name_th} > ${item.district_info.name_th} > ${item.district_info.province_info.name_th}`
        }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onClickOutside, useDebounceFn, useThrottleFn } from "@vueuse/core";

const apiFetch = useBaseFetch();

const target = ref(null);
const props = defineProps([
  "msg",
  "modelValue",
  "zipcode",
  "url",
  "keyfiled",
  "subDistrict",
  "district",
  "province",
  "eng",
  "subDistrictEn",
  "districtEn",
  "provinceEn",
  "test",
]);

const emit = defineEmits([
  "update:zipcode",
  "update:subDistrict",
  "update:district",
  "update:province",
  "update:subDistrictEn",
  "update:districtEn",
  "update:provinceEn",
  "update:modelValue",
]);

const data = ref([]);
const searchData = ref([]);
const next = ref("");
const nextData = ref("");
const searchShow = ref(false);
const closeModal = () => {
  searchShow.value = false;
};
onClickOutside(target, closeModal);
const debouncedFn = useDebounceFn(
  async () => {
    const params = new URLSearchParams();
    params.append("q", props.modelValue);
    const response = await apiFetch(props.url + "?limit=100" + "&" + params, {
      credentials: "include",
    });
    if (response.results) {
      searchData.value = [...response.results];
      nextData.value = response.next;
    }
  },
  1000,
  { maxWait: 5000 }
);
async function emitValue(e) {
  searchShow.value = true;

  let value = e.target.value;
  emit("update:modelValue", value);
  debouncedFn();
}

const searchProvince = computed({
  // getter
  get() {
    if (props.modelValue) {
      return searchData.value;
    }
    return data.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
  },
});

async function init() {
  searchShow.value = true;

  if (data.value.length) {
    return;
  }
  const response = await apiFetch("/api/sub_district?limit=100", {
    credentials: "include",
  });
  console.log(response.results);
  next.value = response.next;
  data.value = [...response.results];
}

const selectProvince = async (select) => {
  searchShow.value = false;
  emit("update:zipcode", select.zip_code);

  emit("update:subDistrict", select.name_th);
  emit("update:district", select.district_info.name_th);
  emit("update:province", select.district_info.province_info.name_th);

  if (props.eng) {
    emit("update:subDistrictEn", select.name_en);
    emit("update:districtEn", select.district_info.name_en);
    emit("update:provinceEn", select.district_info.province_info.name_en);
  }
};
onMounted(() => {
  target.value.addEventListener("scroll", handleScroll);
});
async function handleScroll(element) {
  if (
    element.target.scrollTop + element.target.offsetHeight >=
    element.target.scrollHeight / 1.7
  ) {
    throttledFn();
  }
}
const throttledFn = useThrottleFn(() => {
  if (props.modelValue) {
    loadMoreData(nextData, searchData);
  }
  loadMoreData(next, data);
}, 500);
async function loadMoreData(n, d) {
  if (n.value) {
    // n.value = n.value.replace("http", "https");
    const response = await $fetch(n.value, {
      credentials: "include",
    });
    d.value.push(...response.results);
    n.value = response.next;
  }
}
</script>
