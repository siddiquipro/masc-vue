<template>
  <Icon :icon="props.icon" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>
