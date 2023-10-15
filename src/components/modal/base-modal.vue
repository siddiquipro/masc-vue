<template>
  <dialog class="modal" :class="isOpen && isReady ? 'modal-open' : ''">
    <div class="flex flex-col bg-base-100" :class="modalBoxClass">
      <slot></slot>
    </div>
    <div class="modal-backdrop bg-black bg-opacity-30" @click="isOpen = false"></div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useVModel } from "@vueuse/core";
import { useWait } from "../../utils/helpers";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "center",
  },
});

//ensure component is mounted for transition to work in case of v-if
const isReady = ref(false);

const modalBoxClass = computed(() => {
  if (props.position === "right") return "modal-right";
  if (props.position === "left") return "modal-left";
  if (props.position === "top") return "modal-top";
  if (props.position === "bottom") return "modal-bottom";
  return "modal-box";
});

const isOpen = useVModel(props, "modelValue", emits);

const init = async () => {
  await useWait(10);
  isReady.value = true;
};

onMounted(() => init());
</script>

<style scoped>
.modal-right,
.modal-left {
  position: fixed;
  top: 0;
  height: 100vh;
  max-height: 100%;
  border-radius: 0;
  transition: transform 0.3s;
  transition-delay: 0.1s;
  opacity: 0;
  height: 100%;
}
.modal-right {
  right: 0;
  transform: translateX(100%);
}

.modal-left {
  left: 0;
  transform: translateX(-100%);
}

.modal-box {
  padding: 0;
  border-radius: 0.25rem;
  max-height: 100vh;
  max-width: initial;
  width: initial;
  transition: all 0.3s;
  transform: translateY(100%);
}

.modal-top,
.modal-bottom {
  place-items: initial;
  position: fixed;
  right: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  transition: transform 0.3s;
  transition-delay: 0.1s;
  opacity: 0;
  transform: translateY(-100%);
}

.modal-top {
  top: 0;
  transform: translateY(-100%);
}

.modal-bottom {
  bottom: 0;
  transform: translateY(100%);
}

.modal-open .modal-top,
.modal-open .modal-bottom {
  opacity: 1;
  transform: translateY(0);
}

.modal-open .modal-left,
.modal-open .modal-right {
  opacity: 1;
  transform: translateX(0);
}

.modal-open .modal-box {
  transform: translateY(0);
}
</style>
