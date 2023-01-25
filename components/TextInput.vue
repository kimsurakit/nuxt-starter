<template>
  <div>
    <label class="block uppercase text-gray-600 text-xs font-bold mb-2">
      {{ msg }}</label
    ><input
      :type="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />
  </div>
</template>
<script setup>
const props = defineProps(["msg", "name", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
