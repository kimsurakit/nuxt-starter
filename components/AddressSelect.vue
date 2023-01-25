<template>
  <select
    :disabled="props.otherAddressCheck"
    v-model="addressID"
    class="block w-full sm:w-6/12 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  >
    <option
      v-for="(item, index) in props.addressList"
      :key="item.id"
      :value="item.id"
    >
      {{ `${item.name} (${item.name_en})` }}
    </option>
  </select>
  <!--  -->
  <div class="w-full px-4 flex flex-col lg:flex-row gap-x-2">
    <div
      @click="$emit('update:otherAddressCheck', false)"
      :class="[
        {
          'hover:bg-sky-500 hover:ring-sky-500': props.otherAddressCheck,
        },
        {
          ' border-2 border-sky-500': !props.otherAddressCheck,
        },
      ]"
      v-if="props.addressSelect"
      class="px-4 cursor-pointer group bg-white mb-4 rounded-md"
    >
      <div class="p-2 mb-4 flex flex-col h-full">
        <h2
          :class="{
            'group-hover:text-white': props.otherAddressCheck,
          }"
          class="mb-1 mr-auto text-xl font-semibold text-gray-600"
        >
          {{ props.addressSelect.name }} ({{ props.addressSelect.name_en }})
        </h2>
        <div class="flex flex-wrap flex-col items-start justify-center">
          <p
            :class="{
              'group-hover:text-white': props.otherAddressCheck,
            }"
            class="mb-2 text-base text-gray-700"
          >
            {{
              [
                props.addressSelect.address,
                props.addressSelect.province,
                props.addressSelect.district,
                props.addressSelect.sub_district,
                props.addressSelect.zip_code,
              ].join(",")
            }}
          </p>
          <div class="mb-2 flex items-end">
            <p
              :class="{
                'group-hover:text-white': props.otherAddressCheck,
              }"
              class="text-sm text-gray-400"
            >
              เลขประจำตัวผู้เสียภาษี/TAX ID
            </p>
            <p
              :class="{
                'group-hover:text-white': props.otherAddressCheck,
              }"
              class="ml-3 text-base text-gray-700"
            >
              {{ props.addressSelect.tax_id }}
            </p>
          </div>
          <div class="mb-2 flex items-end">
            <p
              :class="{
                'group-hover:text-white': props.otherAddressCheck,
              }"
              class="text-sm text-gray-400"
            >
              สาขาที่/BRANCH NO.
            </p>
            <p
              :class="{
                'group-hover:text-white': props.otherAddressCheck,
              }"
              class="ml-3 text-base text-gray-700"
            >
              {{ props.addressSelect.branch_no }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="$emit('update:otherAddressCheck', true)"
      :class="[
        {
          'hover:bg-sky-500 hover:ring-sky-500': !props.otherAddressCheck,
        },
        { 'border-2  border-sky-500': props.otherAddressCheck },
      ]"
      class="px-4 cursor-pointer group bg-white mb-4 rounded-md"
    >
      <div class="p-2 mb-4 flex justify-center items-center h-full">
        <h2
          :class="{
            'group-hover:text-white': !props.otherAddressCheck,
          }"
          class="mb-1 mr-auto text-xl font-semibold text-gray-600"
        >
          ตามที่อยู่อื่นๆ / Other address
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup>
const addressID = ref();

const props = defineProps([
  "addressList",
  "otherAddressCheck",
  "addressSelect",
]);
const emit = defineEmits(["update:otherAddressCheck", "update:addressSelect"]);
if (props.addressSelect) {
  addressID.value = props.addressSelect.id;
}
watch(addressID, () => {
  emit(
    "update:addressSelect",
    props.addressList.filter((t) => {
      if (t.id === addressID.value) {
        return t;
      }
    })[0]
  );
});
</script>
