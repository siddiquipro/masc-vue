<template>
  <div class="flex gap-4" :class="rows ? 'flex-col' : ''">
    <div v-for="r in options" class="flex gap-2 items-center">
      <input type="checkbox" :class="classes" v-model="selValue" :id="key + r.value" :value="r.value" />
      <label :for="key + r.value" class="cursor-pointer text-sm">
        <slot name="label" :option="r">{{ r.text }}</slot>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useVModel } from "@vueuse/core";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Array],
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
    default: true,
  },
  size: {
    type: String,
    default: "",
  },
});

const key = Date.now();
const selValue = useVModel(props, "modelValue", emits);
const options: any = computed(() => (props.options.length > 0 ? props.options : [{ value: props.value, text: props.text }]));

const classes = computed(() => {
  const cls = ["checkbox checkbox-primary"];
  if (props.size == "xs") cls.push("checkbox-xs");
  if (props.size == "sm") cls.push("checkbox-sm");
  if (props.size == "lg") cls.push("checkbox-lg");
  return cls.join(" ");
});
</script>
