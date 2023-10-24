<template>
  <SCard title="Loading">
    <div class="flex gap-4">
      <SBtn @click="startLoading">Start Loading</SBtn>
    </div>
  </SCard>
</template>

<script setup lang="ts">
import { useLoading, useNotify, useWait } from "masc-vue";

const loading = useLoading();
const notify = useNotify();
async function startLoading() {
  const loader = loading.show();
  await useWait(5000);
  loader.hide();
  notify.success(`Loading completed`);
}
</script>
