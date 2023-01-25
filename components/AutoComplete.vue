<template>
  <div class="relative">
    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
      {{ msg }}</label
    ><input
      type="text"
      :value="modelValue"
      @click="test"
      @input="emitValue"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />

    <ul
      ref="target"
      v-if="searchProvince.length && searchShow"
      class="max-h-56 overflow-y-auto absolute z-20 w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200"
    >
      <li
        class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 cursor-pointer"
        v-for="item in searchProvince"
        :key="item.id"
        @click="selectProvince(item)"
      >
        {{
          eng !== undefined
            ? `${item[defaultName]} / ${item.name_en}`
            : item[defaultName]
        }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onClickOutside } from "@vueuse/core";
const target = ref(null);
const props = defineProps(["msg", "modelValue", "url", "keyfiled", "eng"]);
const emit = defineEmits(["update:modelValue", "update:eng"]);
const defaultName = "name_th";
const { data } = await useFetch(props.url);
const searchShow = ref(false);
const closeModal = () => {
  searchShow.value = false;
};
onClickOutside(target, closeModal);

function emitValue(e) {
  searchShow.value = true;
  let value = e.target.value;
  emit("update:modelValue", value);
  if (searchProvince.value.length > 1 || !value) {
    emit("update:eng", "");
  } else if (searchProvince.value.length === 1) {
    emit("update:eng", searchProvince.value[0].name_en);
  }
}

const searchProvince = computed({
  // getter
  get() {
    if (props.modelValue === "" || !props.modelValue) {
      return [...data.value];
    }
    let matches = 0;

    return data.value.filter((item) => {
      if (
        item[defaultName]
          .toLowerCase()
          .includes(props.modelValue.toLowerCase()) &&
        matches < 10
      ) {
        matches++;
        return item;
      }
    });
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
  },
});

function test() {
  if (props.modelValue === "" || !props.modelValue) {
    searchShow.value = true;

    searchProvince.value = [...data.value];
  }
}

const selectProvince = (select) => {
  emit("update:modelValue", select[defaultName]);
  emit("update:eng", select.name_en);
  searchShow.value = false;
};
</script>
