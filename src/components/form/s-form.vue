<template>
  <form @submit.prevent="onSubmit" novalidate>
    <slot :clearError="clearError"></slot>
  </form>
</template>

<script lang="ts" setup>
import { formContextKey } from "./constants";
import { provide, reactive, watch } from "vue";
import { getRegExpression } from "../../utils/helpers";

const emailRegEx = getRegExpression("email");
const emits = defineEmits(["submit"]);

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const fields: any[] = [];
const ds: any = reactive({ errors: {} });
const hasError = () => Object.values(ds.errors).some((v) => v);

function addField(field: any) {
  fields.push(field);
}

function validateField(field: any, value: any) {
  const prop = field.prop;
  const label = field.label || field.prop;
  ds.errors[prop] = "";

  //required check
  if (field.required && !value) {
    ds.errors[prop] = `${label} is required`;
    return false;
  }

  //email type check
  if (field.type === "email" && !emailRegEx.test(value)) {
    ds.errors[prop] = `${label} is not a valid email address`;
    return false;
  }

  return true;
}

function validateForm(data: any) {
  let hasError = false;
  for (const field of fields) {
    const valid = validateField(field, data[field.prop]);
    if (!valid) hasError = true;
  }
  return !hasError;
}

function clearError(prop: string | null = null) {
  if (prop) return (ds.errors[prop] = "");

  //clear all errors
  for (const key of Object.keys(ds.errors)) {
    ds.errors[key] = "";
  }
  return;
}

function onSubmit() {
  const valid = validateForm(props.data);
  valid ? console.log("Form is valid") : console.log("Form is invalid");
  if (!valid) return;
  emits("submit", props.data);
}

provide(formContextKey, reactive({ errors: ds.errors, clearError, addField }));

function onValueChange(newData: any) {
  if (!hasError()) return;
  validateForm(newData);
}

watch(() => props.data, onValueChange, { deep: true });
</script>
