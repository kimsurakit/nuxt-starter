export const useReport = defineStore("report", {
  state: () => ({
    sample: [],
    company_info_receipt: {
      company_name: "",
      tax_id: "",
      branch_no: "",
      address: "",
      province: "",
      district: "",
      sub_district: "",
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
    company_info_test_report: [],
    is_general_info: false,
    is_research: false,
    is_domestic_consume: false,
    is_export_to_country: false,
    other_objective: "",
    delivery_means: null,
    other_delivery_means: "",
    by_post: null,
    other_address: {
      address: "",
      province: "",
      district: "",
      sub_district: "",
      zip_code: "",
    },
    is_email_noti: false,
    is_line_noti: false,
    remark: "",
    country: "",
  }),
  actions: {},
});