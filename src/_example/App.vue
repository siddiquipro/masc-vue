<template>
  <BaseLayout>
    <div class="grid gap-4 p-4">
      <SCard title="Buttons">
        <div class="flex gap-4">
          <SBtn size="xs" icon="mdi:content-save"> X-Small </SBtn>
          <SBtn class="btn-sm" icon="mdi:home"> Small </SBtn>
          <SBtn icon="mdi:menu" iconRight="mdi:home" iconClass="text-xl text-primary"> Normal </SBtn>
          <SBtn class="btn-lg" icon="mdi:content-save"> Large </SBtn>
          <SBtn loading class="btn-primary"> Loading </SBtn>
          <SBtn class="btn-primary" href="http://google.com" target="_blank" icon="mdi:link"> Button as Link </SBtn>
        </div>
      </SCard>

      <SCard title="Card Title">
        <p class="font-semibold">Date Picker</p>
        <dateInput></dateInput>
      </SCard>

      <sdropdown></sdropdown>
      <alertVue></alertVue>
      <sform />
      <stable />

      <SCard title="Modal">
        <div class="flex gap-4">
          <SBtn @click="ds.open = true">Open Modal</SBtn>
          <SBtn @click="ds.right = true">Open Right Side Modal</SBtn>
          <SBtn @click="ds.left = true">Open left Side Modal</SBtn>
          <SBtn @click="ds.top = true">Open Top Modal</SBtn>
          <SBtn @click="ds.bottom = true">Open Bottom Modal</SBtn>

          <SModal title="Hello Modal" v-model="ds.open" footer>
            <div class="w-full p-6">
              <p>This is modal content</p>
            </div>
          </SModal>

          <SModal title="Hello Modal" v-model="ds.right" footer position="right" width="800px">
            <div class="w-full p-6 flex-1">
              <p>This is modal on the right</p>
              <p>This is modal content</p>
            </div>
          </SModal>

          <SModal title="Hello Modal" v-model="ds.left" footer position="left">
            <div class="w-full p-6 flex-1">
              <p>This is modal on the left</p>
              <p>This is modal content</p>
            </div>
          </SModal>

          <SModal title="Hello Modal" v-model="ds.top" footer position="top">
            <div class="w-full p-6 flex-1">
              <p>This is modal on the top</p>
              <p>This is modal content</p>
            </div>
          </SModal>

          <SModal title="Hello Modal" v-model="ds.bottom" footer position="bottom">
            <div class="w-full p-6 flex-1">
              <p>This is modal on the bottom</p>
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
import { useLoading, useNotify, useWait } from "../index";
import dateInput from "./components/date-input.vue";
import alertVue from "./components/alert.vue";
import stable from "./components/stable.vue";
import sform from "./components/sform.vue";
import sdropdown from "./components/sdropdown.vue";
import BaseLayout from "./layouts/BaseLayout.vue";

async function startLoading() {
  const loader = useLoading().show();
  await useWait(5000);
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

const ds = reactive({ open: false, right: false, left: false, top: false, bottom: false });
</script>
