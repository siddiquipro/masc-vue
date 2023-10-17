<template>
  <textarea v-model="value" :placeholder="placeholder" :class="getClasses" class="textarea w-full" :type="props.type" :readonly="props.readonly" />
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { PropType, computed } from "vue";

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
  size: {
    type: String as PropType<"xs" | "sm" | "lg">,
    default: "",
  },
});

const value = useVModel(props, "modelValue");

const getClasses = computed(() => {
  const cls = [];

  if (props.size === "xs") cls.push("textarea-xs");
  if (props.size === "sm") cls.push("textarea-sm");
  if (props.size === "lg") cls.push("textarea-lg");

  return cls.join(" ");
});
</script>
