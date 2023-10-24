<template>
  <SCard title="Alerts">
    <div class="flex gap-4">
      <s-btn class="px-10 btn-info" @click="showData()"> Info </s-btn>
      <s-btn class="px-10 btn-success" @click="showData('success')">Success</s-btn>
      <s-btn class="px-10 btn-warning" @click="showData('warning')">Warning</s-btn>
      <s-btn class="px-10 btn-error" @click="showData('error')">Error</s-btn>
    </div>
  </SCard>
</template>

<script setup lang="ts">
import { useNotify } from "masc-vue";
const toast = useNotify();

function showData(type: string = "info") {
  if (type === "info") return toast.info(`This is a toast info message`, { duration: 100000 });
  if (type === "success") return toast.success(`This is a toast success message`);
  if (type === "error") return toast.error(`This is a toast error message`);
  if (type === "warning")
    return toast.warning(`This is a toast warning message <br/> Hello World again`, {
      duration: 100000,
    });

  return toast.error(`Invalid type passed...`);
}
</script>
