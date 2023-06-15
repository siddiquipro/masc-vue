<template>
  <SCard title="Form">
    <div v-for="col in config.columns">
      <sFormitem :label="col.label" :type="col.type" :options="opts" v-model="ds[col.field]" />
    </div>
    <!-- <SNForm :config="config" horizontal> </SNForm> -->
  </SCard>
</template>

<script lang="ts" setup>
import sFormitem from "../../components/formitem/s-formitem.vue";

import { reactive } from "vue";

//  'textarea'
//  'boolean'
//  'checkbox'
//  'select'
//  'radio'
//  'date'

const ds: any = reactive({ obj: {} });

const opts: any[] = [];
for (let i = 1; i <= 10; i++) {
  opts.push({ value: `Value ${i}`, text: `Text ${i}` });
}

const config = {
  columns: [
    // {
    //   columns: [
    //     { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    //     { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    //     { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    //   ],
    // },

    { field: "texta", label: "This is label for type TEXT", type: "text", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "search", label: "This is label for type SEARCH", type: "search", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "textareab", label: "This is label for type TEXTAREA", type: "textarea", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "radioc", label: "This is label for type RADIO", type: "radio", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "dated", label: "This is label for type DATE", type: "date", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "boolean", label: "This is label for type BOOLEAN", type: "boolean", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "checkbox", label: "This is label for type CHECKBOX", type: "checkbox", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "select", label: "This is label for type SELECT", type: "select", info: "", errorMsg: "", validation: "", classes: "" },
  ],
};

console.log(config);

// ordering of cols
// horizontal
// vertical
// grouped
</script>
