<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();
console.log(slots.default());
</script>

<style scoped></style>
