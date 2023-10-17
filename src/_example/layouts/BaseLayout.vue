<template>
  <div>
    <div class="transition">
      <SAppbar title="MASC Components">
        <template #toggle>
          <SBtn class="btn-ghost text-2xl btn-circle" icon="mdi:menu" @click="openSideBar = !openSideBar" />
        </template>

        <SBtn class="btn-ghost" icon="mdi:home"> Home </SBtn>
        <SBtn class="btn-ghost" icon="mdi:about"> About </SBtn>
        <SBtn class="btn-ghost" icon="mdi:contact"> Contact </SBtn>
      </SAppbar>

      <div class="max-w-7xl mx-auto h-full w-full">
        <slot></slot>
      </div>
    </div>

    <!-- <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 lg:hidden" v-show="openSideBar" @click="openSideBar = !openSideBar" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const openSideBar = ref(true);
</script>
