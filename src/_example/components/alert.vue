<template>
  <SCard title="Alerts">
    <div class="flex gap-4">
      <SBtn @click="showData()"> Info</SBtn>
      <SBtn @click="showData('success')">Success</SBtn>
      <SBtn @click="showData('error')">Error</SBtn>
      <SBtn @click="showData('warning')">Warning</SBtn>
    </div>
  </SCard>
</template>

<script setup lang="ts">
import { useNotify } from "../../index";
const toast = useNotify();

function showData(type: string = "info") {
  if (type === "info") return toast.info(`This is a toast info message`, { duration: 100000 });
  if (type === "success") return toast.success(`This is a toast success message`);
  if (type === "error") return toast.error(`This is a toast error message`);
  if (type === "warning") return toast.warning(`This is a toast warning message <br/> Hello World again`, { duration: 100000 });

  return toast.error(`Invalid type passed...`);
}
</script>
