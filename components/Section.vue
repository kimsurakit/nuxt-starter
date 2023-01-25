<template>
  <h6 class="text-white p-3 bg-darkGreen text-sm mt-3 mb-6 font-bold uppercase">
    {{ msg }}
  </h6>
  <slot />
</template>
<script setup>
const props = defineProps({
  msg: String,
});
</script>
