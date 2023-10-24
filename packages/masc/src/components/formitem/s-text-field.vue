<template>
  <input v-model="value" v-bind="$attrs" :placeholder="placeholder" class="input w-full" ref="input" :type="props.type" :class="getClasses" />
</template>

<script setup lang="ts">
import { ref, computed, PropType } from "vue";
import { whenever, useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  triggerFocus: {
    type: Boolean,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  bordered: {
    type: Boolean,
  },
  right: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"xs" | "sm" | "lg">,
    default: "",
  },
});

const input = ref<HTMLElement | null>(null);

const getClasses = computed(() => {
  const cls = [];
  if (props.right) cls.push("text-right");

  if (props.size === "xs") cls.push("input-xs");
  if (props.size === "sm") cls.push("input-sm");
  if (props.size === "lg") cls.push("input-lg");

  return cls.join(" ");
});

whenever(
  () => props.triggerFocus,
  () => (input.value ? input.value.focus() : "")
);

const value = useVModel(props, "modelValue");
</script>
