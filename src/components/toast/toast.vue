<template>
  <div class="toast z-50">
    <div class="alert" :class="getClass(x.type)" v-for="x in messages">
      <Icon :icon="getIcon(x.type)" class="text-2xl" />
      <div class="max-w-sm w-full whitespace-pre-wrap leading-[1.25]" v-html="x.message"></div>
      <button class="btn btn-sm btn-circle btn-ghost" @click="closeToast(x.id)" aria-hidden="true">
        <Icon icon="mdi:close" class="text-xl cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

type typeToast = "info" | "success" | "error" | "warning";

const props = defineProps({
  onAdd: {
    type: Function,
    default: null,
  },
});

const messages = ref<any[]>([]);

const genID = () => {
  return Date.now().toString(36) + "-" + Math.random().toString(36);
};

const onAdd = (type: typeToast, message: string, options: any = {}) => {
  if (!type || !message) return console.error("type and message are required");
  options = Object.assign({ duration: 5000 }, options);
  const id = genID();
  messages.value.push({ id, type, message });
  setTimeout(() => closeToast(id), options.duration);
};

onMounted(() => {
  if (props.onAdd) {
    props.onAdd(onAdd);
  }
});

const closeToast = (id: string) => {
  const index = messages.value.findIndex((x) => x.id === id);
  if (index === -1) return;
  messages.value.splice(index, 1);
};

const getClass = (type: typeToast = "info") => {
  return ToastConfig[type] ? ToastConfig[type].class : ToastConfig.info.class;
};

const getIcon = (type: typeToast) => {
  return ToastConfig[type].icon;
};

const ToastConfig = {
  info: {
    class: "alert-info",
    icon: "mdi:alert-circle-outline",
  },
  success: {
    class: "alert-success",
    icon: "mdi:check-circle-outline",
  },
  warning: {
    class: "alert-warning",
    icon: "mdi:alert-circle-outline",
  },
  error: {
    class: "alert-error",
    icon: "mdi:alert-circle-outline",
  },
};
</script>
