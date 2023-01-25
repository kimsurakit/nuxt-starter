<template>
  <header>
    <Nav></Nav>
  </header>

  <SignIn v-if="showModal"> </SignIn>
  <SignUp v-if="showSigup"> </SignUp>
  <slot />
</template>
<script setup>
const { showSigup } = storeToRefs(useShowModalStore());

const { showModal } = storeToRefs(useShowModalStore());
</script>
