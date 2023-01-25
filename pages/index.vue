<template>
  <div>
    <main class="">
      <div class="bg-[#ebddc3]">
        <div
          class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
        >
          <h1
            class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 leading-relaxed"
          >
            การให้บริการตรวจวิเคราะห์ DNA ข้าว
          </h1>
          <h2
            class="mx-auto max-w-4xl font-display text-xl font-medium tracking-tight text-slate-900 leading-relaxed"
          >
            หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
            ศูนย์วิจัยข้าวอุบลราชธานี
          </h2>
          <div class="relative rounded-xl overflow-auto p-2">
            <div class="grid place-items-center">
              <NuxtLink
                to="/dashboard/create"
                class="bg-darkGreen hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
              >
                Get started
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lightGreen">
        <div
          class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
        >
          <h1
            class="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 leading-relaxed"
          >
            ขั้นตอนการตรวจวิเคราะห์ DNA เพื่อตรวจสอบความบริสุทธิ์ของตัวอย่างข้าว
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="px-4">
          <BoxStep
            class="z-[1]"
            msg="ผู้ขอรับบริการตรวจวิเคราะห์ DNA ข้าว ลงทะเบียนและเข้าสู่ระบบได้ที่"
            step="step1"
            head="กรอกใบคำร้องขอรับบริการตรวจวิเคราะห์DNA"
            side="right"
          >
            <NuxtLink
              to="/dashboard/create"
              class="font-medium text-white underline hover:no-underline"
            >
              dna-testing.ricethailand.go.th
            </NuxtLink></BoxStep
          >
          <BoxStep
            class="2xl:-mt-[115px] xl:-mt-[137px] lg:-mt-[173px] sm:-mt-[233px]"
            msg="ขอรับบริการตรวจวิเคราะห์ DNA ข้าว
                ชำระเงินผ่านทางธนาคารกรุงไทย และ จัดส่งตัวอย่างข้าว
                (ตัวอย่างละไม่น้อยกว่า 500 g) พร้อมแนบหลักฐานการชำระเงินหรือ
                แนบในระบบ"
            step="step2"
            head="ชำระเงิน และ จัดส่งตัวอย่างข้าว"
            side="left"
          >
            <p class="mt-2 text-white text-sm">
              ที่อยู่สำหรับการจัดส่งตัวอย่างข้าว
            </p>

            <p class="text-white text-sm">
              หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
            </p>
            <p class="text-white text-sm">
              ศูนย์วิจัยข้าวอุบลราชธานี 60 หมู่ 8 บ้านดอนชี ถนนแจ้งสนิท
              ตำบลหนองขอน อำเภอเมือง จังหวัดอุบลราชธานี 34000 โทรศัพท์
              093-592-5056
            </p>
          </BoxStep>
          <BoxStep
            class="2xl:-mt-[127px] xl:-mt-[137px] lg:-mt-[185px] sm:-mt-[245px]"
            msg="หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
                ศูนย์วิจัยข้าวอุบลราชธานี รับตัวอย่างข้าว ตรวจตัวอย่างเบื้องต้น
                และยืนยันการชำระเงิน"
            step="step3"
            head="รับตัวอย่างข้าวและยืนยันการชำระเงิน"
            side="right"
          ></BoxStep>
          <BoxStep
            class="xl:-mt-[83px] lg:-mt-[121px] sm:-mt-[239px]"
            msg="หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
                ศูนย์วิจัยข้าวอุบลราชธานี ดำเนินการตรวจวิเคราะห์ DNA
                เพื่อตรวจสอบความบริสุทธิ์ของตัวอย่างข้าว"
            step="step4"
            head="ดำเนินการตรวจวิเคราะห์ DNA ข้าว"
            side="left"
          ></BoxStep>
          <BoxStep
            class="xl:-mt-[83px] lg:-mt-[107px] sm:-mt-[251px]"
            msg="หน่วยปฏิบัติการตรวจสอบเอกลักษณ์พันธุกรรมข้าวหอมมะลิไทย
                ศูนย์วิจัยข้าวอุบลราชธานี จัดทำรายงานและส่งผลการตรวจวิเคราะห์
                DNA พร้อมใบเสร็จรับเงิน"
            step="step5"
            head="รายงาน และ ส่งผลการตรวจวิเคราะห์"
            side="right"
          ></BoxStep>
        </div>
      </div>
    </main>
    <footer class="text-center lg:text-left bg-[#ebddc3] text-gray-600">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="col-end-4">
            <h6
              class="uppercase font-semibold mb-4 flex justify-center md:justify-start"
            >
              ที่อยู่หน่วยงาน
            </h6>
            <p class="flex items-center justify-center md:justify-start mb-4">
              กรมการข้าว เลขที่ 2177 ถนนพหลโยธิน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ
              10900
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              bca_rd@rice.mail.go.th
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              0-2561-3056
            </p>
            <p class="flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                ></path>
              </svg>
              0-2561-3236
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
  </div>
</template>
<script setup></script>
