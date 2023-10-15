<template>
  <SCard title="Table" compact>
    <STable :cols="cols" :data="data" :meta="meta">
      <template #email="x">
        <td>
          <div v-tooltip="`tooltip for ${x.row.name}`">{{ x.row.email.toUpperCase() }} of {{ x.row.name }}</div>
        </td>
      </template>
      <template #new="x">
        <td>
          <div v-if="x.row.new">Yes</div>
        </td>
      </template>
    </STable>
  </SCard>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const data = computed(() => {
  const start = Number(meta.value.page || 1);
  const count = Number(meta.value.perPage || 10);

  const startCount = (start - 1) * count;

  const rows = [];
  for (let i = 1; i <= count; i++) {
    const x = startCount + i;
    rows.push({ name: `Name ${x}`, email: `name_${x}@example.com`, new: i % 2 ? true : false, date: new Date() });
  }

  return rows;
});

const meta = ref({ total: 100, perPage: 10, page: 1 });

const cols = [
  { field: "name", label: "Name" },
  { field: "email", label: "Email" },
  { field: "new", label: "New User?", type: "boolean" },
  { field: "date", label: "Date", type: "date" },
];
</script>
