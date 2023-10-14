<template>
  <SCard title="Form" class="relative">
    <sForm class="grid gap-4" :data="ds.obj" v-slot="{ clearError }" @submit="onSubmit">
      <div v-for="col in config.columns">
        <sFormitem
          :label="col.label"
          :type="col.type"
          :help="col.help"
          :prop="col.field"
          :options="opts"
          :required="col.required"
          v-model="ds.obj[col.field]"
        />
      </div>

      <div class="flex gap-4 mt-4">
        <s-btn type="submit" class="px-10 btn-primary">Submit</s-btn>
        <s-btn type="button" class="px-10 btn-ghost" @click="clearError()">Clear</s-btn>
      </div>
    </sForm>
  </SCard>
</template>

<script lang="ts" setup>
import { useNotify } from "../..";
import sForm from "../../components/form/s-form.vue";
import sFormitem from "../../components/formitem/s-formitem.vue";

import { reactive } from "vue";

const notify = useNotify();
const ds: any = reactive({ obj: {} });

const opts: any[] = [];
for (let i = 1; i <= 10; i++) {
  opts.push({ value: `Value ${i}`, text: `Text ${i}` });
}

const config = {
  columns: [
    {
      field: "texta",
      help: "Please provide something useful",
      label: "This is label for type TEXT",
      required: true,
      type: "text",
      info: "",
      errorMsg: "",
      validation: "",
      classes: "",
    },
    {
      field: "email",
      help: "Please provide your email address",
      label: "Your email address",
      required: true,
      type: "email",
      info: "",
      errorMsg: "",
      validation: "",
      classes: "",
    },
    // { field: "search", label: "This is label for type SEARCH", type: "search", info: "", errorMsg: "", validation: "", classes: "" },
    // { field: "textareab", label: "This is label for type TEXTAREA", type: "textarea", info: "", errorMsg: "", validation: "", classes: "" },
    // { field: "radioc", label: "This is label for type RADIO", type: "radio", info: "", errorMsg: "", validation: "", classes: "" },
    // { field: "dated", label: "This is label for type DATE", type: "date", info: "", errorMsg: "", validation: "", classes: "" },
    // { field: "boolean", label: "This is label for type BOOLEAN", type: "boolean", info: "", errorMsg: "", validation: "", classes: "" },
    // { field: "checkbox", label: "This is label for type CHECKBOX", type: "checkbox", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "select", label: "This is label for type SELECT", required: true, type: "select", info: "", errorMsg: "", validation: "", classes: "" },
  ],
};

function onSubmit(data: any) {
  console.log("Form submitted", data);
  notify.success("Form submitted");
}

// ordering of cols
// horizontal
// vertical
// grouped
</script>
