<template>
  <s-btn class="btn-primary h-10" @click="isOpen = true">Open</s-btn>

  <dialog class="modal" :class="isOpen ? 'modal-open' : ''">
    <div class="w-2/3 flex h-full flex-col" :class="isRight ? 'modal-right' : 'modal-left'">
      <div class="flex justify-between px-4 py-2 border-b">
        <div class="text-xl font-semibold">Hello Title</div>
        <s-btn class="btn-ghost btn-sm text-xl btn-circle" @click="isOpen = false" icon="mdi:close" />
      </div>

      <div class="flex-1"></div>

      <div class="flex justify-end gap-4 border-t px-4 py-2">
        <s-btn class="btn-ghost h-10" @click="isOpen = false"> Close</s-btn>
        <s-btn class="btn-primary px-10 h-10">Save</s-btn>
      </div>
    </div>
    <div class="modal-backdrop bg-black bg-opacity-30" @click="isOpen = false"></div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);

const isRight = ref(true);
</script>

<style scoped>
.modal-right,
.modal-left {
  position: fixed;
  top: 0;
  height: 100vh;
  max-height: 100%;
  border-radius: 0;
  transition: transform 0.25s ease-in-out;
  opacity: 0;
  background-color: white;
}
.modal-right {
  right: 0;
  transform: translateX(100%);
}

.modal-left {
  left: 0;
  transform: translateX(-100%);
}

.modal-open .modal-left,
.modal-open .modal-right {
  opacity: 1;
  transform: translate(0);
}
</style>
