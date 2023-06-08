<template>
  <div class="bg-base-100 border rounded">
    <div class="bar px-4 py-2 border-b gap-6">
      <div class="font-semibold" v-html="props.title"></div>
      <slot name="full"></slot>
      <div class="flex gap-4 items-center">
        <slot name="actions"></slot>
      </div>
    </div>

    <div class="flex flex-col gap-2" :class="compact ? '' : 'p-4'">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>
