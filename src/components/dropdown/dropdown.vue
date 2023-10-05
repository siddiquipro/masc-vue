<template>
  <div class="relative">
    <button ref="popcorn" class="btn btn-primary px-16">Dropodown</button>
    <div ref="tooltip" class="mas-popper relative bg-base-100 z-10 rounded">
      <ul class="menu p-0">
        <li v-for="i in 5" :key="i" class="border-b w-40">
          <a>Item {{ i }}</a>
        </li>
      </ul>
      <div class="mas-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createPopper, Instance } from "@popperjs/core";
import { useEventListener, onClickOutside } from "@vueuse/core";
import { ref, onMounted } from "vue";

const props = defineProps({
  trigger: {
    type: String,
    default: "click",
  },
});

const popperInstance = ref<Instance | null>(null);
const popcorn = ref<HTMLElement | null>(null);
const tooltip = ref<HTMLElement | null>(null);

function mounted() {
  if (!popcorn.value || !tooltip.value) return;

  useEventListener(popcorn.value, props.trigger, show);
  onClickOutside(popcorn.value, hide);

  const modifiers = [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ];

  popperInstance.value = createPopper(popcorn.value, tooltip.value, {
    modifiers,
  });
}

onMounted(() => mounted());

function show() {
  if (!tooltip.value || !popperInstance.value) return;

  console.log("its here ... ", Date.now());

  tooltip.value.toggleAttribute("data-show");
  // tooltip.value.setAttribute("data-show", "");
  popperInstance.value.update();
}

function hide() {
  if (!tooltip.value) return;

  tooltip.value.removeAttribute("data-show");
}
</script>

<style lang="scss" scoped>
.mas-popper {
  display: none;
  --box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  box-shadow: var(--box-shadow-light);
  border: 1px solid #e4e7ed;
}

.mas-popper[data-show] {
  display: block;
}

.mas-arrow::before {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;
  content: " ";
  transform: rotate(45deg);
  border: 1px solid #e4e7ed;
  background: #ffffff;
  box-sizing: border-box;
}

.mas-arrow {
  width: 10px;
  height: 10px;
  z-index: -1;
}

.mas-popper[data-popper-placement^="bottom"] .mas-arrow:before {
  border-bottom-color: transparent !important;
  border-right-color: transparent !important;
}

.mas-popper[data-popper-placement^="top"] .mas-arrow:before {
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}

.mas-popper[data-popper-placement^="top"] > .mas-arrow {
  bottom: -5px;
}

.mas-popper[data-popper-placement^="bottom"] > .mas-arrow {
  top: -5px;
}

.tooltip[data-popper-placement^="left"] > .arrow {
  right: -5px;
}

.tooltip[data-popper-placement^="right"] > .arrow {
  left: -5px;
}
</style>
