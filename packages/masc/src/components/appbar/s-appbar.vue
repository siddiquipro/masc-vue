<template>
  <nav class="bg-base-100 min-h-0 sticky inset-0 z-20 shadow">
    <div class="flex items-center h-14 gap-4 flex-1 max-w-7xl mx-auto px-4" :class="wrapClass">
      <slot name="toggle"> </slot>
      <slot name="title">
        <div class="flex-none" v-if="props.title">
          <a class="text-xl font-bold" href="/">{{ props.title }}</a>
        </div>
      </slot>
      <div class="flex-1 flex gap-2 items-center" :class="props.left ? '' : 'justify-end'">
        <slot />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  wrapClass: {
    type: String,
    default: "",
  },
  left: {
    type: Boolean,
    default: false,
  },
});
</script>
