<template>
  <div>
    <SideBar
      :class="{ '-translate-x-full': !openSideBar, 'translate-x-0': openSideBar }"
      class="fixed top-0 left-0 z-20 h-full overflow-x-hidden overflow-y-auto transition origin-left transform w-60 shadow-lg"
    />
    <div class="transition" :class="mainContentClass">
      <SAppbar title="MASC Components" class="shadow-sm">
        <template #toggle>
          <SBtn class="btn-ghost text-2xl btn-circle" icon="mdi:menu" @click="openSideBar = !openSideBar" />
        </template>

        <SBtn class="btn-ghost" icon="mdi:home"> Home </SBtn>
        <SBtn class="btn-ghost" icon="mdi:about"> About </SBtn>
        <SBtn class="btn-ghost" icon="mdi:contact"> Contact </SBtn>
      </SAppbar>
      <div class="max-w-4xl mx-auto h-full w-full">
        <slot></slot>
      </div>
    </div>

    <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 lg:hidden" v-show="openSideBar" @click="openSideBar = !openSideBar" />
  </div>
</template>

<script setup lang="ts">
import SideBar from "./SideBar.vue";
import { ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
const openSideBar = ref(true);

const mainContentClass = computed(() => {
  if (width.value < 1024) return "ml-0";
  return openSideBar.value ? "ml-60" : "ml-0";
});
</script>
