<template>
  <!-- <select class="select w-full" v-bind="$attrs" :class="getClasses" v-model="dataValue" :disabled="props.readonly">
    <option v-for="o in ds.options" :data-before="o.text" :value="o.value">
      {{ o.text }}
    </option>
  </select> -->
  <div class="relative">
    <s-popper offsetDistance="3" class="w-full">
      <div class="has-addons-right">
        <input type="text" class="input w-full" :class="getClasses" v-bind="$attrs" :value="selValue" readonly>
        <div class="input-icon right-0 top-0">
          <s-icon icon="mdi:chevron-down" class="opacity-70" />
        </div>
      </div>
      <template #content="x">
        <div class="bg-base-100 sel-shadow rounded border border-base-200">
          <div class="p-2 border-b">
            <s-field size="sm" type="search" v-model="search" />
          </div>
          <ul class="max-h-80 overflow-y-auto">
            <li v-for="opt in filteredOptions" class="text-sm hover:bg-base-200 hover:bg-opacity-40">
              <a tabindex="0" class="w-full block pl-4 pr-8 py-2 cursor-pointer relative" role="option" :data-option="opt.text"
                :data-value="opt.value" @click="setSelection(opt, x)">
                <span :class="isSelected(opt) ? 'text-primary font-semibold' : ''">{{ opt.text }}</span>

                <span class="absolute top-0 right-2 h-full grid items-center">
                  <s-icon icon="mdi:check" v-if="isSelected(opt)" class="text-primary text-lg" />
                </span>
              </a>
            </li>
            <li v-if="filteredOptions.length == 0 && search">
              <p class="text-base-content text-opacity-50 px-4 py-2">No matching data</p>
            </li>
          </ul>
        </div>
      </template>
    </s-popper>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive, computed, ref } from 'vue';
import { useVModel } from "@vueuse/core";
import sPopper from "../popper/s-popper.vue";
import sIcon from "../icon/icon.vue";
import sField from "./s-field.vue";

const props = defineProps({
  options: { type: Array, default: [] },
  modelValue: { type: [String, Number] },
  select: { type: Object, default: null },
  keyValue: { type: String, default: "value" },
  keyText: { type: String, default: "text" },
  readonly: { type: Boolean, default: false },
  size: { type: String, default: "" },
});

const ds: any = reactive({ options: [] });
const search = ref("");

const selValue = computed(() => {
  const opt = ds.options.find((x: any) => x.value === dataValue.value);
  return opt ? opt.text : "";
});

const filteredOptions = computed(() => {
  if (!search.value) return ds.options;
  return ds.options.filter((x: any) => x.text.toLowerCase().includes(search.value.toLowerCase()));
});

function isSelected(opt: any) {
  return opt && opt.value === dataValue.value;
}


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

function setSelection(opt: any, slotProp: any) {
  dataValue.value = opt.value;
  if (slotProp && slotProp.close) slotProp.close();
}

const getClasses = computed(() => {
  const cls = [];
  if (props.size === "xs") cls.push("input-xs");
  if (props.size === "sm") cls.push("input-sm");
  if (props.size === "lg") cls.push("input-lg");

  // if (props.size === "xs") cls.push("select-xs");
  // if (props.size === "sm") cls.push("select-sm");
  // if (props.size === "lg") cls.push("select-lg");

  return cls.join(" ");
});

const dataValue = useVModel(props, "modelValue");
watch(() => props.options, setInitialData);
setInitialData();
</script>
