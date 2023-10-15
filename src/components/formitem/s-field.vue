<template>
  <div class="flex" :class="wrapperClass">
    <div class="lab" v-if="label">
      <span class="font-semibold text-sm text-base-content text-opacity-80">
        <span>{{ label }}</span>
        <span v-if="required"> * </span>
      </span>
    </div>
    <div class="flex-1" :class="inputClass">
      <TextareaField v-if="type === 'textarea'" v-bind="$attrs" :readonly="readonly" />
      <BoolField v-else-if="type === 'boolean'" v-bind="$attrs" :readonly="readonly" />
      <CheckboxField v-else-if="type === 'checkbox'" v-bind="$attrs" :readonly="readonly" />
      <SelectField v-else-if="type === 'select'" v-bind="$attrs" :readonly="readonly" />
      <RadioField v-else-if="type === 'radio'" v-bind="$attrs" :readonly="readonly" />
      <DateField v-else-if="type === 'date'" v-bind="$attrs" :readonly="readonly" />
      <SearchField v-else-if="type === 'search'" v-bind="$attrs" :readonly="readonly" />
      <TextField v-else v-bind="$attrs" :type="type" :readonly="readonly" />
    </div>
    <div class="-mt-1">
      <div class="text-[0.85em] text-base-content text-opacity-80 help-text" v-if="props.help" v-text="props.help" />
      <div class="text-error text-[0.85em] error-text" v-if="errorMsg" v-text="errorMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "./s-text-field.vue";
import TextareaField from "./s-textarea-field.vue";
import SelectField from "./s-select-field.vue";
import BoolField from "./s-bool-field.vue";
import RadioField from "./s-radio-field.vue";
import DateField from "./s-date-field.vue";
import CheckboxField from "./s-checkbox-field.vue";
import SearchField from "./s-search-field.vue";
import { computed, inject, onMounted } from "vue";
import { formContextKey } from "../form/constants";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  prop: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: "",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const noBorderFor = ["radio", "boolean", "checkbox"];
const inputClass = computed(() => {
  const cls = [];
  if (props.readonly) cls.push("readonly");
  if (props.horizontal) return cls.join(" ");
  if (!noBorderFor.includes(props.type)) cls.push("");
  return cls.join(" ");
});

const wrapperClass = computed(() => {
  if (!props.horizontal) return "flex-col gap-1";
  const cls = ["items-center"];
  if (props.type == "box") cls.push("border-b");
  return cls.join(" ");
});

const formContext: any = inject(formContextKey, undefined);

const errorMsg = computed(() => {
  if (!formContext || !formContext.errors) return "";
  // const field = formContext.fields.find((f: any) => f.prop === props.prop);
  // return field ? field.error : "";
  // return formContext.errors;
  return formContext.errors[props.prop];
});

function addToFormContext() {
  if (!formContext || !formContext.addField) return;
  formContext.addField(props);
}

onMounted(() => addToFormContext());
</script>

<style>
.lab {
  flex: 0 0 35%;
}

.input:focus,
.textarea:focus,
.select:focus {
  outline-width: 1px;
  outline-offset: 0;
}

.input,
.textarea,
.select {
  font-weight: 400;
}
</style>
