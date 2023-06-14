<template>
  <div class="min-h-screen flex flex-col gap-4 p-4">
    <div class="text-xl font-bold">MASC Components</div>

    <SCard title="Buttons">
      <div class="flex gap-4">
        <SBtn class="btn-sm" icon="mdi:content-save"> Small Button </SBtn>
        <SBtn icon="mdi:content-save"> Normal Button </SBtn>
        <SBtn loading class="btn-primary"> Loading Button </SBtn>
        <SBtn class="btn-primary" href="http://google.com" target="_blank" icon="mdi:link"> Button as Link </SBtn>
      </div>
    </SCard>
    <SCard title="Card Title">
      <p class="">Card Body</p>
    </SCard>

    <alertVue></alertVue>

    <SAppbar title="Awesome App" class="rounded">
      <SBtn class="btn-ghost" icon="mdi:home"> Home </SBtn>
      <SBtn class="btn-ghost" icon="mdi:about"> About </SBtn>
      <SBtn class="btn-ghost" icon="mdi:contact"> Contact </SBtn>
    </SAppbar>

    <SCard title="Table" compact>
      <STable :cols="cols" :data="data">
        <template #email="x">
          <td>
            <div>{{ x.row.email.toUpperCase() }} of {{ x.row.name }}</div>
          </td>
        </template>
        <template #new="x">
          <td>
            <div v-if="x.row.new">Yes</div>
          </td>
        </template>
      </STable>
    </SCard>

    <SCard title="Modal">
      <div class="flex gap-4">
        <SBtn @click="ds.open = true">Open Modal</SBtn>
        <SBtn @click="ds.openRight = true">Open Right Side Modal</SBtn>

        <SModal title="Hello Modal" v-model="ds.open" footer>
          <div class="w-full min-w-[400px] p-6">
            <p>This is modal content</p>
          </div>
        </SModal>

        <SModal title="Hello Modal" v-model="ds.openRight" footer position="right">
          <div class="w-full p-6 flex-1">
            <p>This is modal on the right</p>
            <p>This is modal content</p>
          </div>
        </SModal>
      </div>
    </SCard>

    <SCard title="Icon">
      <p>Icons can be used from iconify : <a class="link link-primary" href="https://icones.js.org/">https://icones.js.org/</a></p>

      <div class="flex gap-4">
        <SIcon icon="mdi:home" class="text-xl" />
        <SIcon icon="prime:android" class="text-xl" />
      </div>
    </SCard>

    <SCard title="Loading">
      <div class="flex gap-4">
        <SBtn @click="startLoading">Start Loading</SBtn>
      </div>
    </SCard>

    <SCard title="Modal Alert and Confirm">
      <div class="flex gap-4">
        <SBtn @click="openAlert">Open Alert</SBtn>
        <SBtn @click="openConfirm">Open Confirm</SBtn>
      </div>
    </SCard>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useLoading, useNotify, wait } from "../index";
import alertVue from "./components/alert.vue";

async function startLoading() {
  const loader = useLoading().show();
  await wait(5000);
  loader.hide();
}

async function openConfirm() {
  const notify = useNotify();
  notify.confirm("This is message for confirmation?", "Confirmation Message");
}

async function openAlert() {
  const notify = useNotify();
  notify.alert("This is the message for alert", "Alert Title");
}

const ds = reactive({ open: false, openRight: false });

const data: any[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({ name: `Name ${i}`, email: `name_${i}@example.com`, new: i % 2 ? true : false, date: new Date() });
}

const cols = [
  { field: "name", label: "Name" },
  { field: "email", label: "Email" },
  { field: "new", label: "New User?", type: "boolean" },
  { field: "date", label: "Date", type: "date" },
];
</script>

<style>
html,
body {
  background-color: #ebf1f5;
}
</style>
