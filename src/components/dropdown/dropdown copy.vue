<template>
  <Dropdown ref="baseDropdownRef" :distance="14" :triggers="['click']" placement="bottom-start" auto-hide @show="show" @hide="hide">
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { BaseDropdownRef, Props } from "./dropdown.types";
import { Dropdown } from "floating-vue";
import { getNextActiveElement, isVisible } from "../../utils/helpers";
import { onBeforeUnmount, ref } from "vue";

const props = defineProps(Props);
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const ESCAPE_KEY = "Escape";
const ENTER_KEY = "Enter";
const SPACE_KEY = " ";
const baseDropdownRef = ref<BaseDropdownRef | null>(null);

const popoverKeydown = (e: KeyboardEvent) => {
  const popover = baseDropdownRef.value;

  if (!popover) {
    return;
  }

  if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(e.key)) {
    e.preventDefault();

    let items = [...popover.$refs.popperContent.$el.querySelectorAll(`${props.itemSelector}`)] as HTMLElement[];

    items = items.filter((element) => isVisible(element as HTMLElement));

    if (!items.length) {
      return;
    }

    const target = e.target as HTMLElement;

    getNextActiveElement(items, target, e.key === ARROW_DOWN_KEY, !items.includes(target)).focus();
  }

  if (e.key === ESCAPE_KEY) {
    popover.hide();
  }

  if ((e.key === ENTER_KEY || e.key === SPACE_KEY) && e.target === popover.$refs.popperContent.$el) {
    e.preventDefault();
    popover.hide();
  }
};

const show = () => {
  if (props.enableArrowNavigation) {
    document.addEventListener("keydown", popoverKeydown);
  }
};

const hide = () => {
  document.removeEventListener("keydown", popoverKeydown);
  const popover = baseDropdownRef.value;

  popover?.$refs.popper.$_targetNodes?.[0]?.focus();
};

onBeforeUnmount(() => {
  document.removeEventListener("keydown", popoverKeydown);
});
</script>

<style>
.v-popper--theme-simple-dropdown .v-popper__arrow-container {
  display: none;
}
</style>
