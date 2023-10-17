<template>
  <form @submit.prevent="onSubmit" novalidate>
    <slot :reset="onReset"></slot>
  </form>
</template>

<script lang="ts" setup>
import { formContextKey } from "./constants";
import { provide, reactive, ref } from "vue";

const emits = defineEmits(["submit"]);

const fields: any[] = [];
const isDirty = ref(false);

//add field to form context
function addField(field: any, validateField: Function, reset: Function) {
  fields.push({ ...field, validateField, reset });
}

//validate form fields
function validateForm() {
  let hasError = false;
  for (const field of fields) {
    const valid = field.validateField();
    if (!valid) hasError = true;
  }

  isDirty.value = hasError;
  return !hasError;
}

function onReset() {
  isDirty.value = false;
  for (const field of fields) {
    field.reset();
  }
}

function onSubmit() {
  const valid = validateForm();
  if (!valid) return;
  emits("submit");
}

provide(formContextKey, reactive({ onReset, addField }));
</script>
