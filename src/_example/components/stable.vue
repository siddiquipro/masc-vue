<template>
  <SCard title="Table" compact>
    <STable :cols="cols" :data="data">
      <template #email="x">
        <td>
          <div v-tooltip="`This is a example tooltip`">{{ x.row.email.toUpperCase() }} of {{ x.row.name }}</div>
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
const data: any[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({ name: `Name ${i}`, email: `name_${i}@example.com`, new: i % 2 ? true : false, date: new Date() });
}

const cols = [
  { field: "name", label: "Name" },
  { field: "email", label: "Email" },
  { field: "new", label: "New User?", type: "boolean" },
  { field: "date", label: "Date", type: "date" },
];
</script>
