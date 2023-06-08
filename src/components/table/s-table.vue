<template>
  <div class="w-full">
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
            <div class="py-3">There's no data</div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination v-if="meta" :meta="meta" @onPageChange="pageChanged" @onPerPageChange="perPageChanged" />
  </div>
</template>

<script setup lang="ts">
import TableHead from "./TableHead.vue";
import TableColumn from "./TableColumn.vue";
import Pagination from "./Pagination.vue";
import { computed } from "vue";

const emits = defineEmits(["onPageChange", "onPerPageChange"]);

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  meta: {
    type: Object,
    default: null,
  },
  cols: {
    type: Array,
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
