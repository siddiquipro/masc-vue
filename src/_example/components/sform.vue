<template>
  <SCard title="Form" class="relative">
    <sForm class="grid gap-4" v-slot="{ reset }" @submit="onSubmit">
      <div v-for="col in config.columns">
        <sField :options="opts" v-bind="col" size="sm" v-model="ds.obj[col.field]" />
      </div>

      <sField label="Age" type="number" v-model="ds.user.name.age" :validator="onValidate" required />

      <div class="flex gap-4 mt-4">
        <s-btn type="submit" class="px-10 btn-primary">Submit</s-btn>
        <s-btn type="button" class="px-10 btn-ghost" @click="reset()">Clear</s-btn>
      </div>
    </sForm>
  </SCard>
</template>

<script lang="ts" setup>
import { useNotify } from "../..";
import sForm from "../../components/form/s-form.vue";
import sField from "../../components/formitem/s-field.vue";

import { reactive } from "vue";

const notify = useNotify();
const ds: any = reactive({ obj: { boolean: null, checkbox: [] }, user: { name: { age: "" } } });

const opts: any[] = [];
for (let i = 1; i <= 10; i++) {
  opts.push({ value: `Value ${i}`, text: `Text ${i}` });
}

function onValidate(val: any) {
  if (!val) return "Age is required by law";
  if (val < 18) return "Age must be greater than 18";
  return "";
}

const config = {
  columns: [
    {
      field: "texta",
      help: "Please provide something useful",
      label: "Name",
      required: true,
      type: "text",

      pattern: "^[a-z0-9_-]{3,16}$",
      patternMessage: "The name must be between 3 and 16 characters long",
    },
    {
      field: "email",
      help: "Please provide your email address",
      label: "Your email address",
      required: true,
      type: "email",
    },
    // { field: "search", label: "This is label for type SEARCH", type: "search" },
    { field: "textareab", label: "This is label for type TEXTAREA", type: "textarea", hello: "world" },
    { field: "radioc", label: "This is label for type RADIO", type: "radio" },
    { field: "dated", label: "This is label for type DATE", type: "date" },
    { field: "boolean", label: "This is label for type BOOLEAN", type: "boolean" },
    { field: "checkbox", label: "This is label for type CHECKBOX", type: "checkbox" },
    { field: "select", label: "This is label for type SELECT", required: true, type: "select" },
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
