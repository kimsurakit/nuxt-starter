<template>
  <div>
    <label class="relative w-full mb-3 inline-flex items-center">
      <input
        type="radio"
        :value="value"
        :name="name"
        :checked="props.modelValue === value"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-radio border-1 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
      />
      <span class="ml-2">{{ msg }}</span>
    </label>
    <slot />
  </div>
</template>
<script setup>
const props = defineProps(["value", "msg", "modelValue", "name"]);
const emit = defineEmits(["update:modelValue"]);
</script>
