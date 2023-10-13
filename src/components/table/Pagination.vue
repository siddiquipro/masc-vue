<template>
  <div class="bar p-2 bg-base-300 text-sm" v-if="paginate">
    <div class="flex items-center gap-2">
      <div>Rows per page</div>
      <select class="select w-28 h-8" v-model="paginate.perPage" @change="perPageChanged(paginate.perPage)">
        <option v-for="p in perPages" :value="p">{{ p }}</option>
      </select>
    </div>
    <div>{{ getText(paginate.curPage, paginate.perPage, paginate.total) }}</div>
    <div class="flex gap-2">
      <btn icon="mdi:chevron-left" size="sm" class="bg-white btn-circle text-xl" @click="pageChanged(paginate.curPage - 1)" />
      <btn icon="mdi:chevron-right" size="sm" class="bg-white btn-circle text-xl" @click="pageChanged(paginate.curPage + 1)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["onPageChange", "onPerPageChange"]);
const perPages = [10, 20, 30, 50, 100];

function pageChanged(val: number) {
  if (val < 1 || val > lastPage.value) return false;
  emits("onPageChange", val);
}

function perPageChanged(val: number) {
  emits("onPerPageChange", val);
  emits("onPageChange", 1);
}

function getText(curPage: number, perPage: number, total: number) {
  if (curPage > lastPage.value) curPage = lastPage.value;
  const start = (curPage - 1) * perPage + 1;
  const end = perPage * curPage > total ? total : perPage * curPage;
  return `${start}-${end} of ${total}`;
}

const lastPage = computed(() => Math.ceil(props.total || 0 / props.perPage || 1));

const paginate = computed(() => {
  return { curPage: props.page || 0, perPage: props.perPage || 0, total: props.total || 0 };
});
</script>
