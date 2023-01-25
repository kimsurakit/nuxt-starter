<template>
  <div
    :class="[step]"
    class="relative after:block after:clear-both after:w-full before:block before:clear-both before:absolute before:w-full before:h-full"
  >
    <div
      :class="[side === 'right' ? 'sm:rotate-45' : 'sm:-rotate-[135deg]']"
      class="-mt-[30px] mb-[20px] sm:mt-auto sm:mb-auto m-auto relative rotate-[135deg] sm:absolute inset-0 flex items-center justify-center w-[210px] h-[210px] origin-center border-transparent border-solid border-[25px] rounded-full"
    >
      <div
        :class="[side === 'right' ? 'sm:-rotate-45' : 'sm:rotate-[135deg]']"
        class="step -rotate-[135deg] m-auto origin-center rounded-full w-28 h-28 leading-[7rem] text-center font-bold text-3xl shadow-[0px_0px_20px_rgba(0,0,0,0.3)]"
      >
        {{ step }}
      </div>
    </div>
    <div
      :class="[
        side === 'right'
          ? 'sm:float-right lg:before:-left-[24%] md:before:-left-[10%] sm:before:-left-[2%]'
          : 'sm:float-left lg:before:-right-[24%] md:before:-right-[10%] sm:before:right-[2%] sm:before:left-auto',
      ]"
      class="before:-z-10 before:w-[15px] before:h-[25px] before:left-1/2 before:-translate-x-1/2 before:-top-[22px] sm:before:translate-x-0 w-full float-none rounded-b-lg sm:rounded-none text-center py-[25px] px-[20px] my-0 mx-auto relative before:block before:absolute sm:before:top-2/4 sm:before:w-1/4 sm:before:h-[15px] sm:before:-translate-y-1/2 sm:w-[35%] sm:py-8 sm:px-5 sm:my-12"
    >
      <h3 class="text-white font-bold mb-2 text-xl">
        {{ head }}
      </h3>
      <p>
        {{ msg }}
      </p>
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  msg: String,
  step: String,
  head: String,
  side: String,
  link: String,
});
</script>
<style lang="scss">
.step1 {
  div:first-child {
    @apply border-r-[#94b6d2] border-t-[#94b6d2];
  }
  .step {
    @apply text-[#94b6d2] shadow-[#94b6d2];
  }
  div:nth-child(2) {
    @apply shadow-[#94b6d2] before:bg-[#94b6d2] bg-[#94b6d2];
  }
}
.step2 {
  div:first-child {
    @apply border-r-[#dd8047] border-t-[#dd8047];
  }
  .step {
    @apply text-[#dd8047] shadow-[#dd8047];
  }
  div:nth-child(2) {
    @apply shadow-[#dd8047] before:bg-[#dd8047] bg-[#dd8047];
  }
}
.step3 {
  div:first-child {
    @apply border-r-[#a5ab81] border-t-[#a5ab81];
  }
  .step {
    @apply text-[#a5ab81] shadow-[#a5ab81];
  }
  div:nth-child(2) {
    @apply shadow-[#a5ab81] before:bg-[#a5ab81] bg-[#a5ab81];
  }
}
.step4 {
  div:first-child {
    @apply border-r-[#d8b25c] border-t-[#d8b25c];
  }
  .step {
    @apply text-[#d8b25c] shadow-[#d8b25c];
  }
  div:nth-child(2) {
    @apply shadow-[#d8b25c] before:bg-[#d8b25c] bg-[#d8b25c];
  }
}
.step5 {
  div:first-child {
    @apply border-r-[#7ba79d] border-t-[#7ba79d];
  }
  .step {
    @apply text-[#7ba79d] shadow-[#7ba79d];
  }
  div:nth-child(2) {
    @apply shadow-[#7ba79d] before:bg-[#7ba79d] bg-[#7ba79d];
  }
}
</style>
