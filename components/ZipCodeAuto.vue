<template>
  <div class="relative">
    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
      {{ msg }}</label
    ><input
      type="text"
      :value="modelValue"
      @click="init"
      @input="emitValue"
      class="invalid:border-pink-500 invalid:text-pink-600 invalid:border border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />

    <ul
      ref="target"
      v-if="searchProvince.length && searchShow"
      class="max-h-56 overflow-y-auto absolute z-20 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200"
    >
      <li
        class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 cursor-pointer"
        v-for="(item, index) in searchProvince"
        :key="index"
        @click="selectProvince(item)"
      >
        {{
          `${item.zipCode} > ${item.subDistrict.nameTH} > ${item.district.nameTH} > ${item.province.nameTH} `
        }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onClickOutside } from "@vueuse/core";
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

const searchShow = ref(false);
const closeModal = () => {
  searchShow.value = false;
};
onClickOutside(target, closeModal);

function emitValue(e) {
  searchShow.value = true;
  let value = e.target.value;
  emit("update:modelValue", value);
}

const searchProvince = computed({
  // getter
  get() {
    if (props.modelValue === "" || !props.modelValue) {
      return [...props.test];
    }
    let matches = 0;

    return props.test.filter((item) => {
      if (
        item.zipCode
          .toString()
          .toLowerCase()
          .startsWith(props.modelValue.toLowerCase())
      ) {
        return item;
      }
    });
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
  },
});

function init() {
  if (props.modelValue === "" || !props.modelValue) {
    searchProvince.value = [...props.test];
  }
  searchShow.value = true;
}

const selectProvince = async (select) => {
  searchShow.value = false;
  emit("update:modelValue", select.zipCode);

  emit("update:subDistrict", select.subDistrict.nameTH);
  emit("update:district", select.district.nameTH);
  emit("update:province", select.province.nameTH);

  if (props.eng) {
    emit("update:subDistrictEn", select.subDistrict.nameEN);
    emit("update:districtEn", select.district.nameEN);
    emit("update:provinceEn", select.province.nameEN);
  }
};
</script>
