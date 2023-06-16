<template>
  <div class="w-full overflow-x-auto">
    <table class="table w-full" :class="props.bordered ? 'bordered' : ''">
      <thead>
        <tr>
          <TableHead v-for="col in cols" v-bind="col"></TableHead>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in data" :class="pointerClass" @click="onRowClick(row, i)">
          <template v-for="col in props.cols">
            <slot :name="col.field" :row="row" :column="col" :index="i">
              <TableColumn :row="row" v-bind="col" />
            </slot>
          </template>
        </tr>
        <tr v-if="cols && cols.length > 0 && (!data || data.length == 0)">
          <td :colspan="cols.length" class="text-center">
            <div class="py-3">{{ props.noDataText }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      v-if="meta"
      :total="meta.total"
      :perPage="meta.perPage"
      :page="meta.page"
      @onPageChange="pageChanged"
      @onPerPageChange="perPageChanged"
    />
  </div>
</template>

<script setup lang="ts">
import TableHead from "./TableHead.vue";
import TableColumn from "./TableColumn.vue";
import Pagination from "./Pagination.vue";
import { computed } from "vue";
import type { PropType } from "vue";

export interface ICol {
  field: string;
  label?: string;
  center?: boolean;
  type?: string;
  display?: string;
  btnText?: string;
  onClick?: Function;
}

const emits = defineEmits(["onPageChange", "onPerPageChange"]);

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    default: [],
  },
  meta: {
    type: Object,
    default: null,
  },
  cols: {
    type: Array as PropType<ICol[]>,
    default: [],
  },
  onRowSelect: {
    type: Function,
    default: null,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  noDataText: {
    type: String,
    default: `There's no data`,
  },
});

const pointerClass = computed(() => {
  if (typeof props.onRowSelect === "function") return "cursor-pointer hover-row";
  return "";
});

function onRowClick(row: any, index: number) {
  if (typeof props.onRowSelect !== "function") return false;
  props.onRowSelect(row, index);
}

function pageChanged(val: number) {
  emits("onPageChange", val);
}

function perPageChanged(val: number) {
  emits("onPerPageChange", val);
}
</script>
