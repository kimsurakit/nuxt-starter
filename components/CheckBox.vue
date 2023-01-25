<script setup>
const props = defineProps(["msg", "modelValue", "check"]);
const emit = defineEmits(["update:modelValue"]);
function emitValue(e) {
  let value = props.check ? e.target.checked : e.target.value;
  emit("update:modelValue", value);
}
</script>
<template>
  <div>
    <label class="relative w-full mb-3 inline-flex items-center">
      <input
        :value="modelValue"
        @input="emitValue"
        :checked="modelValue"
        type="checkbox"
        class="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
      />
      <span class="ml-2">{{ msg }} </span>
    </label>
    <slot />
  </div>
</template>
