<template>
  <input type="checkbox" class="checkbox checkbox-primary" v-model="selValue" :true-value="trueValue" :false-value="falseValue" />
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  trueValue: {
    type: [String, Number],
    default: 1,
  },
  falseValue: {
    type: [String, Number],
    default: 0,
  },
});
const selValue = useVModel(props, "modelValue", emits);
</script>
