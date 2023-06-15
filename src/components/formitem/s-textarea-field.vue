<template>
  <textarea
    v-model="value"
    :placeholder="placeholder"
    class="textarea w-full"
    :type="props.type"
    :class="bordered ? 'input-bordered' : 'rounded-none'"
    :readonly="props.readonly"
  />
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    default: "textarea",
  },
  placeholder: {
    type: String,
    default: "",
  },
  bordered: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const value = useVModel(props, "modelValue");
</script>
