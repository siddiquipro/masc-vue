<template>
  <s-card title="Table">
    <s-table :data="data" :meta="meta">
      <s-table-column field="name" label="Name" filterable />
      <s-table-column field="email" label="Email" />
      <s-table-column field="new" label="New User?" type="boolean" />
      <s-table-column field="date" label="Date" type="date" class="text-center" />
      <s-table-column v-slot="props">
        <s-btn class="btn-xs w-full" @click="onEdit(props.row)">Edit</s-btn>
      </s-table-column>
    </s-table>
  </s-card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useNotify } from "masc-vue";

const notify = useNotify();
function onEdit(row: any) {
  notify.alert(`Editing ${row.name}`);
}

const data = computed(() => {
  const start = Number(meta.value.page || 1);
  const count = Number(meta.value.perPage || 10);
  const startCount = (start - 1) * count;
  const rows = [];
  for (let i = 1; i <= count; i++) {
    const x = startCount + i;
    rows.push({
      name: `Name ${x}`,
      email: `name_${x}@example.com`,
      new: i % 2 ? true : false,
      date: new Date(),
    });
  }
  return rows;
});

const meta = ref({ total: 100, perPage: 10, page: 1 });
</script>
