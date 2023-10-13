<template>
  <div class="w-full">
    <div @click="openModal">
      <a class="input w-full cursor-pointer flex justify-between items-center">
        <span> {{ toDateFormat(selValue) }}</span>
        <icon icon="mdi:calendar-month"></icon>
      </a>
    </div>
    <Modal v-model="ds.open">
      <VueDatePicker v-model="ds.date" inline auto-apply :enable-time-picker="false" @update:model-value="handleDate" />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVModel } from "@vueuse/core";
import Modal from "../modal/s-modal.vue";
import icon from "../icon/icon.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { toDateFormat } from "../../utils/helpers";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const ds: any = reactive({ open: false, date: null });

function openModal() {
  if (props.readonly) return false;

  ds.date = props.modelValue;
  ds.open = true;
}

function handleDate(e: any) {
  selValue.value = toDateFormat(e, "YYYY-MM-DD");
  ds.open = false;
}

const selValue = useVModel(props, "modelValue", emits);
</script>
