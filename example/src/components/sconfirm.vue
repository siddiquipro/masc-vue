<template>
  <s-card title="Modal Alert and Confirm">
    <div class="flex gap-4">
      <s-btn @click="openAlert">Open Alert</s-btn>
      <s-btn @click="openConfirm">Open Confirm</s-btn>
    </div>
  </s-card>
</template>

<script setup lang="ts">
import { useNotify } from "masc-vue";

const notify = useNotify();
async function openConfirm() {
  const yes = await notify.confirm("Please confirm if you like it?", "Confirmation Message");
  if (yes) {
    notify.success(`Yay! we have got the confirmation`);
  } else {
    notify.error(`User did not like it`);
  }
}

async function openAlert() {
  await notify.alert("This is the message for alert", "Custom Alert Title");
  notify.info("Alert closed");
}
</script>
