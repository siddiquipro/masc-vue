<template>
  <component :is="tag" v-bind="attributes" ref="submitBtn" :class="classes">
    <span v-if="props.icon" class="bg-transparent" :class="spacing">
      <Icon :icon="props.icon" />
    </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, useSlots, useAttrs } from "vue";

const attrs = useAttrs();
const slots = useSlots();
const slotData = slots && slots.default ? slots.default() : [];

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  noan: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const attributes = computed(() => {
  if (props.to) return { to: props.to, class: attrs };
  if (props.href) return { href: props.href, class: attrs };
  return { disabled: props.disabled || props.loading, class: attrs };
});

const tag = computed(() => (props.href ? "a" : "button"));

const classes = computed(() => {
  const classes = ["btn"];
  if (props.loading) classes.push("loading");
  return classes.join(" ");
});

const spacing = computed(() => (!props.icon || slotData.length === 0 ? "" : "mr-2"));
</script>
