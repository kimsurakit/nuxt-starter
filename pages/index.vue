<template>
  <div>
    <main class="">
      <div class="bg-[#ebddc3]">
        <div
          class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
        >
          <h1
            class="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 leading-relaxed"
          >
            การให้บริการตรวจวิเคราะห์ DNA ข้าว
          </h1>
          <h2
            class="mx-auto max-w-4xl text-xl font-medium tracking-tight text-slate-900 leading-relaxed"
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
            class="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-slate-900 leading-relaxed"
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
  </div>
</template>
<script setup></script>
