<template>
  <header>
    <Nav></Nav>
  </header>

  <SignIn v-if="showModal"> </SignIn>
  <SignUp v-if="showSigup"> </SignUp>
  <slot />
  <footer class="text-center lg:text-left bg-[#ebddc3] text-gray-600">
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid grid-1 lg:grid-cols-4 gap-8">
        <div class="col-end-auto lg:col-end-4">
          <h6
            class="uppercase font-semibold mb-4 flex justify-center md:justify-start"
          >
            หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
          </h6>
          <p class="flex items-center justify-center md:justify-start mb-4">
            ศูนย์วิจัยข้าวอุบลราชธานี เลขที่ 60 หมู่ที่ 8 บ้านดอนชี ถนนแจ้งสนิท
            ต.หนองขอน อ.เมือง รหัสไปรษณีย์ 34000
          </p>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <Icon class="mr-4 text-lg" name="ic:baseline-email" />

            RiceDNAtesting@gmail.com
          </p>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <Icon class="mr-4 text-lg" name="ic:baseline-call" />

            093-592-5056
          </p>
        </div>
      </div>
    </div>
    <div class="text-center p-6 bg-darkGreen text-white">
      <span>© 2023 Copyright</span>
      <!-- <a
          class="text-gray-600 font-semibold"
          href="https://tailwind-elements.com/"
          >Tailwind Elements</a
        > -->
    </div>
  </footer>
</template>
<script setup>
const { showSigup } = storeToRefs(useShowModalStore());

const { showModal } = storeToRefs(useShowModalStore());
</script>
