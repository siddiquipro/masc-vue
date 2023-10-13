<template>
  <BaseLayout>
    <div class="grid gap-4 p-4">
      <s-card title="Dialog Options">
        <CheckDialog />
      </s-card>

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

      <sdropdown></sdropdown>
      <alertVue></alertVue>
      <sform />
      <stable />

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
  </BaseLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useLoading, useNotify, wait } from "../index";
import alertVue from "./components/alert.vue";
import stable from "./components/stable.vue";
import sform from "./components/sform.vue";
import sdropdown from "./components/sdropdown.vue";
import BaseLayout from "./layouts/BaseLayout.vue";
import CheckDialog from "./layouts/CheckDialog.vue";

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
</script>

<style>
html,
body {
  background-color: #ebf1f5;
}

.btn {
  min-height: initial;
}

:root {
  --p: 207.1 60.8% 52.9%;
  --pf: 210 79% 46%;
  --pc: 0 0% 100%;
  --n: 0 0% 87%;
  --nf: 0 0% 75%;
  --nc: 0 0% 25%;
  --su: 122 39% 49%;
  --suc: 0 0% 100%;
  --er: 0 100% 60%;
  --erc: 0 0% 100%;
  --wa: 33.5 100% 49.2%;
  --wac: 0 0% 100%;
  --rounded-box: 0.25rem;
  --rounded-btn: 0.25rem;
  --rounded-badge: 0.25rem;
  --animation-btn: 0.25s;
  --animation-input: 0.2s;
  --btn-text-case: auto;
  --btn-focus-scale: 0.95;
  --border-btn: initial;
  --tab-border: initial;
  --tab-radius: initial;
}
</style>
