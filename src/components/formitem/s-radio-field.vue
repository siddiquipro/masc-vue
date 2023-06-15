<template>
  <div class="flex gap-4" :class="rows ? 'flex-col' : ''">
    <div v-for="r in options" class="flex gap-2">
      <input type="radio" :name="key" :id="key + r.value" :value="r.value" class="radio radio-primary" v-model="selValue" />
      <label :for="key + r.value" class="cursor-pointer">{{ r.text }} </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useVModel } from "@vueuse/core";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: [],
  },
  rows: {
    type: Boolean,
    default: false,
  },
});

const key = Date.now().toString();
const selValue = useVModel(props, "modelValue", emits);
const options: any = computed(() => (props.options.length > 0 ? props.options : [{ value: props.value, text: props.text }]));
</script>
