<template>
  <td :class="getColClasses(props)">
    <slot v-bind:row="row">
      <div v-if="props.type === 'btn'" class="text-center">
        <btn class="btn-primary min-w-[80px]" @click="handleClick">{{ props.btnText || props.field }}</btn>
      </div>
      <div v-if="props.type === 'boolean'" class="text-center">
        <div class="badge" :class="displayValue ? 'badge-success' : ''">{{ displayValue ? "Yes" : "No" }}</div>
      </div>
      <div v-else v-html="displayValue"></div>
    </slot>
  </td>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getObjectValue, toDateFormat, getColClasses } from "../../utils/helpers";
import btn from "../button/s-btn.vue";

const props = defineProps({
  row: {
    type: Object,
    default: {},
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
});

const displayValue = computed(() => {
  const value = getObjectValue(props.row, props.display || props.field);
  if (props.type && props.type === "date") return toDateFormat(value);
  return value || "";
});

function handleClick() {
  if (props.onClick && typeof props.onClick === "function") props.onClick(props.row);
}
</script>
