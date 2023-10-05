<template>
  <nav class="navbar bg-base-100 h-14 min-h-0 sticky inset-0 z-10 shadow-md">
    <div class="flex gap-4 flex-1" :class="wrapClass">
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
