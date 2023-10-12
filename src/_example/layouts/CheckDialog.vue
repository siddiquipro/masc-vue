<template>
  <div>
    <div class="flex gap-4 items-end">
      <s-field type="select" v-model="position" label="Modal Position" :options="options" class="w-96" />
      <s-btn @click="isOpen = true">Open Sidebar</s-btn>
    </div>

    <Drawer :position="position" v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Drawer from "./Drawer.vue";
const position = ref("center");
const isOpen = ref(false);

const options = ["center", "right", "left", "top", "bottom"];
</script>
