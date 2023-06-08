<template>
  <component :is="tag" v-bind="attributes" ref="submitBtn" :class="classes">
    <span v-if="props.loading" class="loading loading-spinner"></span>
    <Icon v-else-if="props.icon" :icon="props.icon" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

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
  return { disabled: props.disabled, class: attrs };
});

const tag = computed(() => (props.href ? "a" : "button"));

const classes = computed(() => {
  const classes = ["btn"];
  if (props.loading) classes.push("pointer-events-none");
  return classes.join(" ");
});
</script>
