<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-gray-700 text-xl font-bold">
              ใบคำขอรับบริการ/ DNA Testing Application
            </h6>
            <div class="flex flex-row">
              <button
                v-show="show2"
                @click="toggleButton"
                type="button"
                class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-700 hover:text-white px-3"
              >
                <div class="flex flex-row align-middle">
                  <svg
                    class="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p class="ml-2">Prev</p>
                </div>
              </button>
              <button
                v-show="show1"
                type="button"
                @click="toggleButton"
                class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-700 hover:text-white px-3"
              >
                <div class="flex flex-row align-middle">
                  <span class="mr-2">Next</span>
                  <svg
                    class="w-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form @submit.prevent="submit">
            <div v-show="show1">
              <Section
                msg="วัตถุประสงค์การขอรับบริการทดสอบดีเอ็นข้าว / Objectives  "
                ><div class="flex flex-wrap space-y-4">
                  <div
                    v-show="error1"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุวัตถุประสงค์
                  </div>
                  <CheckBox
                    v-model="report.is_general_info"
                    check="true"
                    class="w-full lg:w-8/12 px-4"
                    msg="เพื่อทราบผล / General information "
                  />
                  <CheckBox
                    v-model="report.is_research"
                    check="true"
                    class="w-full lg:w-8/12 px-4"
                    msg="งานวิจัย / Research"
                  />
                  <CheckBox
                    v-model="report.is_domestic_consume"
                    check="true"
                    class="w-full lg:w-8/12 px-4"
                    msg="จำหน่ายในประเทศ / Domestic consume "
                  />
                  <CheckBox
                    v-model="report.is_export_to_country"
                    check="true"
                    class="w-full lg:w-8/12 px-4"
                    msg="ส่งออก / Export to country: "
                  >
                    <input
                      v-show="report.is_export_to_country"
                      v-model="report.country"
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                  /></CheckBox>
                  <CheckBox
                    class="w-full lg:w-8/12 px-4"
                    msg="อื่นๆ/ Other:  "
                    check="true"
                    v-model="othShow"
                  >
                    <input
                      v-show="othShow"
                      v-model="report.other_objective"
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </CheckBox></div
              ></Section>

              <hr class="mt-6 border-b-1 border-gray-300" />

              <Section msg="รายละเอียดตัวอย่าง / Sample information  ">
                <div
                  v-show="error2"
                  class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                >
                  กรุณาระบุข้อมูล
                </div>
                <div class="w-full px-4">
                  <p class="p-2">
                    จำนวนตัวอย่างที่ต้องการทดสอบ / Number of samples:
                    <span class="text-xl text-blue-500">{{ numb }}</span>
                  </p>
                </div>
                <div class="flex bg-white text-lg border-gray-200 border-b">
                  <div class="hidden lg:block w-full lg:w-2/12 p-4 text-center">
                    ลำดับ No.
                  </div>
                  <div class="w-full lg:w-5/12 p-4 text-center">
                    ชื่อตัวอย่าง/รหัสตัวอย่าง Sample & Code Name
                  </div>
                  <div class="w-full lg:w-5/12 p-4 text-center">
                    รายการทดสอบ Test item
                  </div>
                </div>

                <div v-if="numb" class="p-3 bg-white flex flex-col gap-y-3">
                  <div
                    v-for="sample in samples"
                    :key="sample.id"
                    class="flex flex-wrap items-center"
                  >
                    <div
                      class="w-1/12 lg:w-2/12 px-4 flex items-center justify-center"
                    >
                      <div
                        class="relative w-full flex items-center justify-center"
                      >
                        <div
                          class="flex items-center justify-center text-white p-4 shadow-sm bg-gray-500 w-6 h-6 rounded-full"
                        >
                          {{ sample.id }}
                        </div>
                      </div>
                    </div>
                    <div class="w-8/12 lg:w-4/12 px-4">
                      <div class="relative w-full">
                        <input
                          v-model="sample.sample_code_name"
                          type="text"
                          class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div class="w-3/12 lg:w-4/12 px-4">
                      <div class="relative w-full">
                        <label class="block">
                          <select
                            v-model="sample.test_item"
                            class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="01" selected>
                              ตรวจการปลอมปนข้าวหอมมะลิไทย
                            </option>
                            <option value="02" disabled>
                              ตรวจการปลอมปนข้าวหอมไทย
                            </option>
                            <option value="03" disabled>
                              ตรวจความบริสุทธิ์ของเมล็ดพันธุ์ข้าว
                            </option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div
                      class="w-full lg:w-2/12 px-4 flex items-center justify-center"
                    >
                      <div
                        @click="removeSample(sample)"
                        class="flex items-center justify-center p-4 shadow-sm rounded-full text-red-600 hover:text-gray-400 cursor-pointer text-xl"
                      >
                        <Icon name="ic:baseline-delete" />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  v-if="numb < 8"
                  @click="
                    () => {
                      if (numb < 8) {
                        numb++;
                      }
                    }
                  "
                  type="button"
                  class="w-full bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
                >
                  <Icon class="text-3xl" name="ic:baseline-add-circle" />
                </button>
              </Section>
              <hr class="mt-6 border-b-1 border-gray-300" />

              <Section msg="วิธีการจัดส่งตัวอย่าง / Sample Delivery Means">
                <div class="flex flex-wrap space-y-4">
                  <div
                    v-show="error3"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    msg="ส่งด้วยตัวเอง / By hand"
                    value="BH"
                    name="ship"
                    v-model="report.delivery_means"
                  ></Radio>
                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    msg="ส่งทางบริการขนส่งสินค้า / By Logistic"
                    value="BL"
                    name="ship"
                    v-model="report.delivery_means"
                  ></Radio>

                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    msg="อื่นๆ / Other : "
                    name="ship"
                    value="OT"
                    v-model="report.delivery_means"
                  >
                    <input
                      v-show="report.delivery_means === 'OT'"
                      v-model="report.other_delivery_means"
                      type="text"
                      class="block w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                      placeholder=""
                  /></Radio></div
              ></Section>

              <hr class="mt-6 border-b-1 border-gray-300" />

              <div class="p-3 flex justify-end">
                <button
                  v-show="show1"
                  type="button"
                  @click="toggleButton"
                  class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-700 hover:text-white px-3"
                >
                  <div class="flex flex-row align-middle">
                    <span class="mr-2">Next</span>
                    <svg
                      class="w-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div v-show="show2">
              <Section
                msg="ชื่อบริษัทและที่อยู่ที่ระบุในใบเสร็จรับเงิน / Company name and address for Receipt"
              >
                <div class="flex flex-wrap gap-y-3">
                  <div
                    v-show="error7"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <AddressSelect
                    v-if="addressList.length"
                    v-model:addressList="addressList"
                    v-model:otherAddressCheck="otherAddressCheck"
                    v-model:addressSelect="addressSelect"
                  />

                  <!--  -->
                  <div
                    v-show="otherAddressCheck"
                    class="w-full flex flex-wrap gap-y-3"
                  >
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ชื่อบริษัท/Company name "
                      name="text"
                      v-model="report.company_info_receipt.name_th"
                    />
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ชื่อบริษัท(ภาษาอังกฤษ)"
                      name="text"
                      v-model="report.company_info_receipt.name_en"
                    />
                    <TextInput
                      class="w-full lg:w-6/12 px-4"
                      msg="เลขประจำตัวผู้เสียภาษี/Tax ID"
                      name="text"
                      v-model="report.company_info_receipt.tax_id"
                    />
                    <TextInput
                      class="w-full lg:w-6/12 px-4"
                      msg="สาขาที่/Branch No."
                      name="text"
                      v-model="report.company_info_receipt.branch_no"
                    />
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ที่อยู่/Address"
                      name="text"
                      v-model="report.company_info_receipt.address_th"
                    />

                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="จังหวัด/PROVINCE"
                      url="/api/v1/province/search"
                      v-model="report.company_info_receipt.province"
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:zipcode="report.company_info_receipt.zip_code"
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                      v-model:subDistrictStr="
                        report.company_info_receipt.sub_district_str
                      "
                    ></SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="อำเภอ/เขต/District"
                      url="/api/v1/district/search"
                      v-model="report.company_info_receipt.district"
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:subDistrictStr="
                        report.company_info_receipt.sub_district_str
                      "
                      v-model:zipcode="report.company_info_receipt.zip_code"
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                    >
                    </SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="ตำบล/แขวง/Sub-district"
                      url="/api/v1/sub_district"
                      v-model="report.company_info_receipt.sub_district_str"
                      v-model:subDistrictStr="
                        report.company_info_receipt.sub_district_str
                      "
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:zipcode="report.company_info_receipt.zip_code"
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                    ></SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="รหัสไปรษณีย์/ZIP Code"
                      url="/api/v1/zip_code/search"
                      v-model="report.company_info_receipt.zip_code"
                      v-model:subDistrictStr="
                        report.company_info_receipt.sub_district_str
                      "
                      v-model:sub-district="
                        report.company_info_receipt.sub_district
                      "
                      v-model:zipcode="report.company_info_receipt.zip_code"
                      v-model:district="report.company_info_receipt.district"
                      v-model:province="report.company_info_receipt.province"
                    ></SubDistrictAuto>
                  </div>
                </div>
              </Section>
              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section
                msg="ชื่อบริษัทและที่อยู่ระบุในใบรายงานผล / Company name and address for test report "
              >
                <div class="flex flex-wrap gap-y-3">
                  <div
                    v-show="error8"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <AddressSelect
                    v-if="addressList.length"
                    v-model:addressList="addressList"
                    v-model:otherAddressCheck="otherAddressReportCheck"
                    v-model:addressSelect="addressSelectReport"
                  />

                  <!--  -->
                  <div
                    v-show="otherAddressReportCheck"
                    class="w-full flex flex-wrap gap-y-3"
                  >
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ชื่อบริษัท"
                      name="text"
                      v-model="report.company_info_test_report.name_th"
                    ></TextInput>
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ที่อยู่"
                      name="text"
                      v-model="report.company_info_test_report.address_th"
                    ></TextInput>
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ชื่อบริษัท(ภาษาอังกฤษ)"
                      name="text"
                      v-model="report.company_info_test_report.name_en"
                    ></TextInput>
                    <TextInput
                      class="w-full lg:w-12/12 px-4"
                      msg="ที่อยู่(ภาษาอังกฤษ)"
                      name="text"
                      v-model="report.company_info_test_report.address_en"
                    ></TextInput>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="จังหวัด/PROVINCE"
                      url="/api/v1/province/search"
                      v-model="report.company_info_test_report.province"
                      v-model:province="
                        report.company_info_test_report.province
                      "
                      v-model:zipcode="report.company_info_test_report.zip_code"
                      v-model:sub-district="
                        report.company_info_test_report.sub_district
                      "
                      v-model:subDistrictStr="
                        report.company_info_test_report.sub_district_str
                      "
                      v-model:district="
                        report.company_info_test_report.district
                      "
                    ></SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="อำเภอ/เขต/District"
                      url="/api/v1/district/search"
                      eng="true"
                      v-model="report.company_info_test_report.district"
                      v-model:subDistrictStr="
                        report.company_info_test_report.sub_district_str
                      "
                      v-model:province="
                        report.company_info_test_report.province
                      "
                      v-model:zipcode="report.company_info_test_report.zip_code"
                      v-model:sub-district="
                        report.company_info_test_report.sub_district
                      "
                      v-model:district="
                        report.company_info_test_report.district
                      "
                    >
                    </SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="ตำบล/แขวง/Sub-district"
                      url="/api/v1/sub_district"
                      eng="true"
                      v-model="report.company_info_test_report.sub_district_str"
                      v-model:subDistrictStr="
                        report.company_info_test_report.sub_district_str
                      "
                      v-model:province="
                        report.company_info_test_report.province
                      "
                      v-model:zipcode="report.company_info_test_report.zip_code"
                      v-model:sub-district="
                        report.company_info_test_report.sub_district
                      "
                      v-model:district="
                        report.company_info_test_report.district
                      "
                    ></SubDistrictAuto>
                    <SubDistrictAuto
                      class="w-full lg:w-6/12 px-4"
                      msg="รหัสไปรษณีย์/ZIP Code"
                      url="/api/v1/zip_code/search"
                      eng="true"
                      v-model="report.company_info_test_report.zip_code"
                      v-model:subDistrictStr="
                        report.company_info_test_report.sub_district_str
                      "
                      v-model:province="
                        report.company_info_test_report.province
                      "
                      v-model:zipcode="report.company_info_test_report.zip_code"
                      v-model:sub-district="
                        report.company_info_test_report.sub_district
                      "
                      v-model:district="
                        report.company_info_test_report.district
                      "
                    ></SubDistrictAuto>
                  </div>
                </div>
              </Section>

              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section msg="การส่งผลทางไปรษณีย์ / By post  ">
                <div class="flex flex-wrap space-y-4">
                  <div
                    v-show="error4"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    name="post"
                    msg="ตามที่อยู่ใบรายงานผล"
                    value="01"
                    v-model="report.by_post"
                  ></Radio>
                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    name="post"
                    msg="ตามที่อยู่ใบเสร็จรับเงิน"
                    value="02"
                    v-model="report.by_post"
                  ></Radio>

                  <Radio
                    class="w-full lg:w-8/12 px-4"
                    name="post"
                    msg="ตามที่อยู่อื่นๆ / Other address : "
                    value="OT"
                    v-model="report.by_post"
                  ></Radio>
                  <div
                    v-show="report.by_post === 'OT'"
                    class="w-full lg:w-12/12 px-4"
                  >
                    <div class="flex flex-wrap gap-y-3">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-600 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            ที่อยู่/Address </label
                          ><input
                            v-model="report.other_address.address_th"
                            type="text"
                            class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <SubDistrictAuto
                        class="w-full lg:w-6/12 px-4"
                        msg="จังหวัด/PROVINCE"
                        url="/api/v1/province/search"
                        v-model="report.other_address.province"
                        v-model:zipcode="report.other_address.zip_code"
                        v-model:sub-district="report.other_address.sub_district"
                        v-model:district="report.other_address.district"
                        v-model:province="report.other_address.province"
                        v-model:subDistrictStr="
                          report.other_address.sub_district_str
                        "
                      ></SubDistrictAuto>
                      <SubDistrictAuto
                        class="w-full lg:w-6/12 px-4"
                        msg="อำเภอ/เขต/District"
                        url="/api/v1/district/search"
                        v-model="report.other_address.district"
                        v-model:zipcode="report.other_address.zip_code"
                        v-model:sub-district="report.other_address.sub_district"
                        v-model:district="report.other_address.district"
                        v-model:province="report.other_address.province"
                        v-model:subDistrictStr="
                          report.other_address.sub_district_str
                        "
                      >
                      </SubDistrictAuto>
                      <SubDistrictAuto
                        class="w-full lg:w-6/12 px-4"
                        msg="ตำบล/แขวง/Sub-district"
                        url="/api/v1/sub_district"
                        v-model="report.other_address.sub_district_str"
                        v-model:zipcode="report.other_address.zip_code"
                        v-model:sub-district="report.other_address.sub_district"
                        v-model:district="report.other_address.district"
                        v-model:province="report.other_address.province"
                        v-model:subDistrictStr="
                          report.other_address.sub_district_str
                        "
                      ></SubDistrictAuto>
                      <SubDistrictAuto
                        class="w-full lg:w-6/12 px-4"
                        msg="รหัสไปรษณีย์/ZIP Code"
                        url="/api/v1/zip_code/search"
                        v-model="report.other_address.zip_code"
                        v-model:zipcode="report.other_address.zip_code"
                        v-model:sub-district="report.other_address.sub_district"
                        v-model:district="report.other_address.district"
                        v-model:province="report.other_address.province"
                        v-model:subDistrictStr="
                          report.other_address.sub_district_str
                        "
                      ></SubDistrictAuto>
                    </div>
                  </div>
                </div>
              </Section>
              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section msg="ผู้ติดต่อ / Contact person">
                <div class="flex flex-wrap gap-y-3">
                  <div
                    v-show="error5"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <TextInput
                    class="w-full lg:w-4/12 px-4"
                    msg="ชื่อ/First Name"
                    :defaultVal="user.first_name"
                    name="text"
                    v-model="report.company_info_person.first_name"
                  />
                  <TextInput
                    class="w-full lg:w-4/12 px-4"
                    msg="นามสกุล/Last Name"
                    name="text"
                    v-model="report.company_info_person.last_name"
                  />
                  <TextInput
                    class="w-full lg:w-4/12 px-4"
                    msg="ตำแหน่ง/Position"
                    name="text"
                    v-model="report.company_info_person.position"
                  />
                  <TextInput
                    class="w-full lg:w-3/12 px-4"
                    msg="อีเมล์/Email Address"
                    name="email"
                    v-model="report.company_info_person.email"
                  />
                  <TextInput
                    class="w-full lg:w-3/12 px-4"
                    msg="ไลน์/LINE ID"
                    name="text"
                    v-model="report.company_info_person.line_id"
                  />
                  <TextInput
                    class="w-full lg:w-3/12 px-4"
                    msg="โทรศัพท์/Telephone"
                    name="tel"
                    v-model="report.company_info_person.telephone"
                  />
                  <TextInput
                    class="w-full lg:w-3/12 px-4"
                    msg="มือถือ/Mobile"
                    name="tel"
                    v-model="report.company_info_person.mobile"
                  />
                </div>
              </Section>
              <hr class="mt-6 border-b-1 border-gray-300" />

              <Section msg="การแจ้งผลทดสอบ / TR Inform">
                <div class="flex flex-wrap">
                  <div
                    v-show="error6"
                    class="w-full bg-red-300 p-4 border-l-8 border-red-600"
                  >
                    กรุณาระบุข้อมูล
                  </div>
                  <CheckBox
                    class="w-full lg:w-8/12 px-4 flex justify-center"
                    msg="E-mail"
                    check="true"
                    v-model="report.is_email_noti"
                  ></CheckBox>
                  <CheckBox
                    class="w-full lg:w-8/12 px-4 flex justify-center"
                    msg="LINE"
                    check="true"
                    v-model="report.is_line_noti"
                  ></CheckBox>
                </div>
              </Section>

              <hr class="mt-6 border-b-1 border-gray-300" />
              <Section msg="หมายเหตุ / remark ">
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-8/12 px-4 flex justify-center">
                    <textarea
                      v-model="report.remark"
                      class="mt-1 block w-full"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </Section>
              <div class="p-3 flex justify-end gap-x-2">
                <button
                  v-show="show2"
                  @click="toggleButton"
                  type="button"
                  class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-700 hover:text-white px-3"
                >
                  <div class="flex flex-row align-middle">
                    <svg
                      class="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="ml-2">Prev</p>
                  </div>
                </button>
                <button
                  class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md border-orange-500 border-2 text-orange-500 bg-white hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer"
                  type="submit"
                >
                  <svg
                    v-if="show"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Save
                </button>
                <button
                  class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer"
                  type="submit"
                >
                  <svg
                    v-if="show"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "index",
});
const route = useRoute();

const othShow = ref(false);
const numb = ref(null);
const samples = ref([]);
const error1 = ref(false);
const error2 = ref(false);
const error3 = ref(false);
const error4 = ref(false);
const error5 = ref(false);
const error6 = ref(false);
const error7 = ref(false);
const error8 = ref(false);

const show = ref(false);
const show1 = ref(true);
const show2 = ref(false);
const user = ref({});
const otherAddressCheck = ref(true);
const otherAddressReportCheck = ref(true);

const report = reactive({
  sample: [],
  company_info_receipt: {
    address_th: "",
    address_en: "",
    name_th: "",
    name_en: "",
    tax_id: "",
    branch_no: "",
    sub_district: null,
    sub_district_str: "",
    district: "",
    province: "",
    zip_code: "",
  },
  other_address: {
    address_th: "",
    address_en: "",
    sub_district: null,
    sub_district_str: "",
    district: "",
    province: "",
    zip_code: "",
  },
  company_info_person: {
    first_name: "",
    last_name: "",
    position: "",
    email: "",
    line_id: "",
    telephone: "",
    mobile: "",
  },
  company_info_test_report: {
    address_th: "",
    address_en: "",
    name_th: "",
    name_en: "",
    tax_id: "",
    branch_no: "",
    sub_district: null,
    sub_district_str: "",
    district: "",
    province: "",
    zip_code: "",
  },
  is_general_info: false,
  is_research: false,
  is_domestic_consume: false,
  is_export_to_country: false,
  other_objective: "",
  delivery_means: null,
  other_delivery_means: "",
  is_email_noti: false,
  is_line_noti: false,
  by_post: null,
  remark: "",
  country: "",
});

const apiFetch = useBaseFetch();
const { $showToast } = useNuxtApp();
const addressList = ref([]);

const addressSelect = ref();
const addressSelectReport = ref();

onBeforeMount(async () => {
  try {
    const data = await apiFetch(`/api/v1/dna/${route.params.id}`, {
      credentials: "include",
    });
    console.log(data);

    report.company_info_test_report = { ...data.company_info_test_report };
    report.company_info_person = { ...data.company_info_person };
    report.company_info_receipt = { ...data.company_info_receipt };
    report.is_domestic_consume = data.is_domestic_consume;
    report.is_email_noti = data.is_email_noti;
    report.is_export_to_country = data.is_export_to_country;
    report.is_general_info = data.is_general_info;
    report.is_line_noti = data.is_line_noti;
    report.is_research = data.is_research;
    if (data.other_objective) {
      report.other_objective = data.other_objective;
      othShow.value = true;
    }
    report.country = data.country;
    report.delivery_means = data.delivery_means;
    report.other_delivery_means = data.other_delivery_means;
    report.by_post = data.by_post;
    report.remark = data.remark;
    if (data.other_address) {
      report.other_address = { ...data.other_address };
    }

    data.sample.forEach((element, index) => {
      delete element.id;
      samples.value.push({ id: index + 1, ...element });
    });
    numb.value = samples.value.length;
    console.log(numb.value);
  } catch (error) {
    console.log(error);
  }
});

watch(numb, (newValue, oldValue) => {
  if (oldValue === null) {
    return;
  }

  if (numb.value < 0 || !numb.value) {
    numb.value = 0;
    samples.value = [];
  } else if (oldValue < newValue) {
    if (newValue > 8) {
      newValue.value = 8;
      return;
    }
    for (let i = oldValue + 1; i <= newValue; i++) {
      samples.value.push({ id: i, test_item: "01" });
    }
  } else if (oldValue > newValue) {
    samples.value.forEach((sample, index) => {
      if (sample.id !== index + 1) {
        sample.id = index + 1;
      }
    });
    for (let i = oldValue; i > newValue; i--) {
      samples.value = samples.value.filter((t) => t.id !== i);
    }
  }
});
async function submit() {
  console.log(report.value);

  error1.value = false;
  error2.value = false;
  error3.value = false;
  error4.value = false;
  error5.value = false;
  error6.value = false;
  error7.value = false;
  error8.value = false;
  if (
    !report.is_research &&
    !report.is_domestic_consume &&
    !report.is_export_to_country &&
    !report.is_general_info &&
    !report.other_objective
  ) {
    error1.value = true;
    console.log(report.other_objective);
    $showToast("Fail", "error", 2000);
    show1.value = true;
    show2.value = false;
    window.scrollTo(0, 0);

    return;
  }

  if (!samples.value.length) {
    $showToast("Fail", "error", 2000);

    error2.value = true;

    show1.value = true;
    show2.value = false;
    window.scrollTo(0, 0);
    return;
  }
  let check = false;
  samples.value.forEach((element) => {
    if (!element.sample_code_name) {
      check = true;
    }
  });
  if (check) {
    $showToast("Fail", "error", 2000);

    error2.value = true;

    show1.value = true;
    show2.value = false;
    window.scrollTo(0, 0);
    return;
  }
  if (!report.delivery_means) {
    $showToast("Fail", "error", 2000);

    error3.value = true;

    show1.value = true;
    show2.value = false;
    window.scrollTo(0, 0);
    return;
  }
  if (
    !report.company_info_receipt.address_th ||
    !report.company_info_receipt.branch_no ||
    !report.company_info_receipt.name_en ||
    !report.company_info_receipt.name_th ||
    !report.company_info_receipt.sub_district ||
    !report.company_info_receipt.tax_id
  ) {
    $showToast("Fail", "error", 2000);

    error7.value = true;

    show1.value = false;
    show2.value = true;
    window.scrollTo(0, 0);
    return;
  }
  if (
    !report.company_info_test_report.address_en ||
    !report.company_info_test_report.address_th ||
    !report.company_info_test_report.branch_no ||
    !report.company_info_test_report.name_en ||
    !report.company_info_test_report.name_th ||
    !report.company_info_test_report.sub_district
  ) {
    console.log(report.company_info_test_report);
    $showToast("Fail", "error", 2000);

    error8.value = true;

    show1.value = false;
    show2.value = true;
    window.scrollTo(0, 0);
    return;
  }
  if (!report.by_post) {
    $showToast("Fail", "error", 2000);

    error4.value = true;

    show1.value = false;
    show2.value = true;
    window.scrollTo(0, 0);
    return;
  }
  if (report.by_post == "OT") {
    console.log(report.other_address);
    if (
      !report.other_address.address_th ||
      !report.other_address.sub_district
    ) {
      $showToast("Fail", "error", 2000);

      error4.value = true;

      show1.value = false;
      show2.value = true;
      window.scrollTo(0, 0);
      return;
    }
  }
  if (
    !report.company_info_person.first_name ||
    !report.company_info_person.last_name ||
    !report.company_info_person.position ||
    !report.company_info_person.email ||
    !report.company_info_person.line_id ||
    !report.company_info_person.telephone ||
    !report.company_info_person.mobile
  ) {
    $showToast("Fail", "error", 2000);

    error5.value = true;

    show1.value = false;
    show2.value = true;
    window.scrollTo(0, 0);
    return;
  }
  if (!report.is_email_noti && !report.is_line_noti) {
    $showToast("Fail", "error", 2000);

    error6.value = true;

    show1.value = false;
    show2.value = true;
    window.scrollTo(0, 0);
    return;
  }
  report.sample = samples.value.map(({ sample_code_name, test_item }) => ({
    sample_code_name,
    test_item,
  }));

  if (!otherAddressCheck.value) {
    console.log();
    report.company_info_receipt = { ...addressSelect.value };
  }

  if (!otherAddressReportCheck.value) {
    report.company_info_test_report = { ...addressSelectReport.value };
    console.log(report.company_info_test_report);
  }
  try {
    show.value = true;
    delete report.id;
    const response = await apiFetch(`/api/v1/dna/update/${route.params.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(report),
    });
    if (response) {
      console.log(response);
      $showToast("Success", "success", 2000);

      await navigateTo(`/dashboard/report/confirm/${response.id}`);
    }
  } catch (error) {
    $showToast("Fail", "error", 2000);
  } finally {
    show.value = false;
  }
}

function removeSample(sample) {
  samples.value = samples.value.filter((t) => t !== sample);

  numb.value = samples.value.length;
}

function toggleButton() {
  show1.value = show1.value ? false : true;
  show2.value = show2.value ? false : true;

  window.scrollTo(0, 0);
}
</script>
