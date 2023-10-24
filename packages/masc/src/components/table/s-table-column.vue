<template>
  <td>
    <slot v-bind:row="row">
      <div v-html="displayValue"></div>
    </slot>
  </td>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import { getObjectValue } from "../../utils/helpers";
import { formatDate, formatBoolean } from "../../utils/formatters";

const props = defineProps({
  row: {
    type: Object,
  },
  field: {
    type: String,
    default: "",
  },
  display: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  btnText: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function,
    default: null,
  },
  to: {
    type: String,
    default: "",
  },
  filterable: {
    type: [String, Boolean, Number, Array],
    default: null,
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
});

const displayValue = computed(() => {
  const value = getObjectValue(props.row, props.display || props.field);
  const type = props.type || "text";
  if (type === "date") return formatDate(value);
  if (type === "boolean") return formatBoolean(value);
  if (type === "onlyYes") return formatBoolean(value, "");
  return value || "";
});
</script>
