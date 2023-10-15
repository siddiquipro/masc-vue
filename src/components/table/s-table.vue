<template>
  <div class="w-full overflow-x-auto">
    <div v-if="selectable && selectedRows.length" class="font-semibold tag is-warning w1">{{ selectedRows.length }} rows selected</div>
    <table class="s-table w-full">
      <thead>
        <tr>
          <th v-if="selectable">
            <checkboxField :name="keyInst + 'ALL'" @change="onSelectALLChange" />
          </th>
          <TableHead v-for="(h, i) in slotData" :key="i" v-bind="h.props"></TableHead>
        </tr>
        <tr v-if="hasFilter">
          <th v-if="selectable"></th>
          <TableFilter v-for="(h, i) in slotData" :key="i" v-bind="h.props" :filters="filters" @onFilter="onFilter" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in data" :key="i" @click="onRowClick(row, i)" :class="row.rowClass">
          <td v-if="selectable">
            <checkboxField :name="keyInst" v-model="row.isSelected" @change="setSelected" />
          </td>
          <component v-for="(h, c) in slotData" :key="i + c" :is="h" :row="row"></component>
        </tr>
        <tr v-if="slotData && slotData.length > 0 && (!data || data.length == 0)">
          <td :colspan="colCount" class="text-center">
            <div class="py-3">{{ props.noDataText }}</div>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="meta && meta.page">
        <tr>
          <td :colspan="colCount">
            <sPagination
              :total="meta.total"
              :perPage="meta.perPage"
              :page="meta.page"
              @onPageChange="pageChanged"
              @onPerPageChange="perPageChanged"
            />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import TableHead from "./s-table-head.vue";
import TableFilter from "./s-table-filter.vue";
import { computed, useSlots } from "vue";
import type { PropType } from "vue";
import sPagination from "./s-pagination.vue";
import { useVModel } from "@vueuse/core";
import { isDefined, genRandom } from "../../utils/helpers";
import checkboxField from "../formitem/s-checkbox-field.vue";

const keyInst = genRandom();

const emits = defineEmits(["onPageChange", "onPerPageChange", "onFilter", "update:selected"]);

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  meta: {
    type: Object,
    default: () => ({}),
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Array,
    default: () => [],
  },
  onRowSelect: {
    type: Function,
    default: null,
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
  noDataText: {
    type: String,
    default: `There's no data`,
  },
});

const selectedRows = useVModel(props, "selected", emits);
const metaData = useVModel(props, "meta", emits);

const colCount = computed(() => slotData.value.length + (props.selectable ? 1 : 0));

const slotData = computed(() => {
  const slots = useSlots();
  const temps = slots && slots.default ? slots.default() : [];

  const cols = [];
  for (const col of temps) {
    const children: any = col.children;
    if (children && children.length > 0) {
      cols.push(...children);
    } else {
      cols.push(col);
    }
  }
  return cols;
});

const hasFilter = computed(() => {
  const match = slotData.value.find((x) => x.props && isDefined(x.props.filterable));
  return match ? true : false;
});

function onRowClick(row: any, index: number) {
  if (typeof props.onRowSelect !== "function") return false;
  props.onRowSelect(row, index);
}

function onFilter(val: any) {
  emits("onFilter", val);
}

function pageChanged(val: number) {
  metaData.value.page = val;
  console.log("pageChanged", val);
  emits("onPageChange", val);
}

function perPageChanged(val: number) {
  console.log("perPageChanged", val);
  metaData.value.perPage = val;
  metaData.value.page = 1;
  emits("onPerPageChange", val);
}

function setSelected() {
  selectedRows.value = props.data.filter((x) => x.isSelected);
}

function onSelectALLChange(event: any) {
  if (event?.target.checked) props.data.forEach((x) => (x.isSelected = true));
  else props.data.forEach((x) => (x.isSelected = false));
  setSelected();
}
</script>
