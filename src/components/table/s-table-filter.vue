<template>
  <th>
    <div v-if="hasFilter" class="relative w-full" :class="filterValue ? 'has-icons-right' : ''">
      <div v-if="props.options && props.options.length">
        <select class="select select-sm w-full" v-model="filterValue" @change="onFilter">
          <option value=""></option>
          <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.text }}</option>
        </select>
      </div>
      <input v-else-if="props.type === 'date'" type="date" v-model="filterValue" class="input input-sm w-full" @change="onFilter" />
      <input v-else type="text" v-model="filterValue" class="input input-sm w-full" @keyup.enter="onFilter" />
      <span class="absolute right-1 top-0 flex items-center justify-center h-full" v-if="filterValue" @click="clearFilter">
        <button class="btn btn-circle btn-xs btn-ghost">
          <icon icon="mdi:close" class="text-sm" />
        </button>
      </span>
    </div>
  </th>
</template>

<script setup lang="ts">
import icon from "../icon/icon.vue";
import { computed, ref } from "vue";
import { isDefined } from "../../utils/helpers";

const props = defineProps(["field", "label", "type", "filterable", "options", "filters"]);
const hasFilter = computed(() => isDefined(props.filterable));
const emits = defineEmits(["onFilter"]);

const filterValue = ref(null);

function onFilter() {
  emits("onFilter", { field: props.field, value: filterValue.value });
}

function clearFilter() {
  filterValue.value = null;
  onFilter();
}
</script>
