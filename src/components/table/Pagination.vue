<template>
  <nav class="flex items-center font-semibold px-4 py-2 text-sm gap-4">
    <div>Total: {{ total }}</div>
    <div class="w-32">
      <select class="select select-sm w-full" :value="perPage" @change="perPageChanged">
        <option v-for="(p, i) in rowsPerPage" :key="i" :value="p">{{ p }} per page</option>
      </select>
    </div>
    <div class="flex-1 flex items-center">
      <a class="flex-none btn btn-sm btn-ghost btn-circle" @click="pageChanged(page - 1)">
        <s-icon icon="mdi:chevron-left" height="22" />
      </a>

      <ul class="flex-1 flex justify-center items-center gap-4">
        <li v-for="(item, i) in visiblePages" :key="i">
          <span v-if="!item.page">&hellip;</span>
          <a v-else-if="item.page === page" class="btn btn-sm btn-primary btn-circle">{{ item.page }}</a>
          <a v-else class="btn btn-sm btn-circle" @click="pageChanged(item.page)">{{ item.page }}</a>
        </li>
      </ul>

      <a class="flex-none btn btn-sm btn-ghost btn-circle" @click="pageChanged(page + 1)">
        <s-icon icon="mdi:chevron-right" height="22" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 0,
  },
  rowsPerPage: {
    type: Array,
    default: () => [5, 10, 20, 50, 100],
  },
  pageCount: {
    type: Number,
    default: 5,
  },
});
const emits = defineEmits(["onPageChange", "onPerPageChange"]);

function pageChanged(val: number) {
  if (val < 1 || val > totalPages.value || props.page === val) return false;
  emits("onPageChange", val);
}

function perPageChanged(e: any) {
  if (!e || !e.target || !e.target.value) return false;
  emits("onPerPageChange", Number(e.target.value));
}

const totalPages = computed(() => Math.ceil(props.total / props.perPage));

const visiblePages = computed(() => {
  const elements: Array<{ type: string; page: number }> = [];
  const tPages = totalPages.value;
  const t = Math.floor(props.pageCount / 2); // no of btns to show on UI

  const add = (s: number, f: number) => {
    for (let i = s; i <= f; i++) {
      elements.push({ type: "page", page: i });
    }
  };
  const addBreak = () => elements.push({ type: "ellipse-break", page: 0 });
  const first = () => elements.push({ type: "page", page: 1 });
  const last = () => elements.push({ type: "page", page: tPages });

  if (tPages <= props.pageCount) {
    // Case without any breaks
    add(1, tPages);
  } else if (props.page >= tPages - t) {
    // Case with breaks at beginning
    first();
    addBreak();
    add(props.page - t, tPages);
  } else if (props.page <= t + 1) {
    // Case with breaks at end
    add(1, props.page + t);
    addBreak();
    last();
  } else {
    // Case with breaks at beginning and end
    first();
    addBreak();
    add(props.page - t, props.page + t);
    addBreak();
    last();
  }

  return elements;
});
</script>

<style scoped>
.c-page-no {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: block;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
