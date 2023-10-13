<template>
  <form class="block relative w-full has-addons" @submit.prevent="searchNow()">
    <sBtn type="sbmit" class="left-0 input-icon opacity-70" icon="mdi:search" />
    <input v-model="value" :placeholder="placeholder" class="w-full input" ref="input" />
    <sBtn type="button" class="right-0 input-icon" icon="mdi:close" @click.prevent="clearValue" v-if="value" />
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useVModel } from "@vueuse/core";
import sBtn from "../button/s-btn.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  triggerFocus: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue", "search"]);

const input = ref<HTMLElement | null>(null);

function setFocus() {
  if (!input.value) return;
  input.value.focus();
}

function searchNow(val = value.value) {
  emits("search", val);
}

function clearValue() {
  value.value = "";
  searchNow("");
}

onMounted(() => setFocus());

const value = useVModel(props, "modelValue", emits);
</script>

<style scoped>
.has-addons input {
  padding-left: 2rem;
  padding-right: 2rem;
}

.input-icon {
  position: absolute;
  background: transparent;
  outline: none;
  border: none;
  padding: 0 0.5rem;
  font-size: 1.2rem;
}
</style>
