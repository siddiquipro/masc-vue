<template>
  <SCard title="Alerts">
    <div class="flex gap-4">
      <SBtn @click="addMsg()"> Info</SBtn>
      <SBtn @click="addMsg('success')">Success</SBtn>
      <SBtn @click="addMsg('error')">Error</SBtn>
      <SBtn @click="addMsg('warning')">Warning</SBtn>
    </div>
  </SCard>
  <div class="toast toast-end z-10">
    <div class="alert shadow-md max-w-sm w-full" v-for="x in ds.msgs" :class="getClass(x)">
      <SIcon v-if="x.icon" :icon="x.icon"></SIcon>
      <div class="flex flex-wrap">{{ x.msg }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface interfaceRow {
  icon: string;
  type: string;
  msg: string;
}

const msgs: interfaceRow[] = [];

const ds = reactive({ msgs: msgs });

function getClass(row: interfaceRow) {
  const cls = [];
  if (row.type === "info") cls.push("alert-info");
  else if (row.type === "success") cls.push("alert-success");
  else if (row.type === "error") cls.push("alert-error");
  return cls.join(" ");
}

function getIcon(type: string) {
  if (type === "info") return "mdi:information-outline";
  if (type === "success") return "mdi:check-circle-outline";
  if (type === "error") return "mdi:close-circle-outline";

  return "mdi:information-outline";
}

function addMsg(type = "info") {
  ds.msgs.push({
    type,
    msg: `This is a ${type} message and its cool and awesome and some random and stupid code for everyone to make sense and i dont know what`,
    icon: getIcon(type),
  });
}
</script>
