<template>
  <select class="select select-bordered w-full" v-model="dataValue" :disabled="props.readonly">
    <option v-for="o in ds.options" :data-before="o.text" :value="o.value">
      {{ o.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { watch, reactive } from "vue";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  options: { type: Array, default: [] },
  modelValue: { type: [String, Number] },
  select: { type: Object, default: null },
  keyValue: { type: String, default: "value" },
  keyText: { type: String, default: "text" },
  readonly: { type: Boolean, default: false },
});

const ds: any = reactive({ options: [] });

async function setInitialData() {
  const opts = Array.isArray(props.options) ? props.options : [];
  // add logic for api and data selection
  const convert = (x: any) => {
    const text = typeof x === "string" ? x : x[props.keyText];
    const value = typeof x === "string" ? x : x[props.keyValue];
    return { text, value };
  };

  ds.options = opts.map((x: any) => convert(x));
}

const dataValue = useVModel(props, "modelValue");
watch(() => props.options, setInitialData);
setInitialData();
</script>
