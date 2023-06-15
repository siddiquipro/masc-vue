<template>
  <form class="border overflow-hidden flex rounded nofocus hover:border-primary" @submit.prevent="searchNow()">
    <input v-model="value" :placeholder="placeholder" class="w-full input" ref="input" />

    <div class="flex items-center gap-1">
      <sBtn type="button" class="search-icon" icon="mdi:close" @click.prevent="clearValue" v-if="value" />
      <sBtn type="sbmit" class="search-icon" icon="mdi:search" />
    </div>
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
.search-icon {
  height: 30px;
  font-size: 1.5rem;
  padding: 0;
  width: 30px;
  background: transparent;
  border: 0;
  color: grey;
}

.search-icon:hover {
  color: #222;
}
</style>
