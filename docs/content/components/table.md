---
title: Table Component Documentation
description: The Table component simplifies the creation of tables with features like row selection, pagination, and filtering. You can easily display and interact with tabular data by binding it to your data and configuring its behavior through props.
---

# Table Component

The `s-table` component is a flexible and customizable Vue 3 component for rendering tables. It supports various features such as data pagination, row selection, filtering, and dynamic column rendering. This component is part of the `masc-vue` component library.

## Introduction

The `s-table` component simplifies the creation of tables with features like row selection, pagination, and filtering. You can easily display and interact with tabular data by binding it to your data and configuring its behavior through props.

In order to define columns heading and content, use `s-table-column`

## Usage

To use the `s-table` component, follow these steps:

1. Import the component and any other necessary components:

   ```vue
   <script setup>
   import { STable, STableColumn } from "masc-vue";
   </script>
   ```

2. Use the `s-table` and `s-table-column` component within your template:

   ```vue
   <template>
   	<s-table
   		:data="tableData"
   		:meta="tableMeta"
   		:selectable="enableRowSelection"
   		:selected="selectedRows"
   		:onRowSelect="handleRowSelect"
   		:filters="tableFilters"
   		:noDataText="noDataMessage"
   	>
   		<!-- Define table columns and slots here -->
   		<!-- Example: -->
   		<s-table-column field="name" label="Name" />
   		<s-table-column field="email" label="Email" />
   	</s-table>
   </template>
   ```

3. Customize the component by binding it to your data and using the provided props to configure its behavior.

4. The `s-table` component will render the table based on the provided data and user interactions.

## Props

The `s-table` component accepts the following props:

| Prop          | Type             | Default             | Description                                                |
| ------------- | ---------------- | ------------------- | ---------------------------------------------------------- |
| `data`        | Array of Objects | `[]`                | The data to be displayed in the table.                     |
| `meta`        | Object           | `{}`                | Metadata for controlling pagination.                       |
| `selectable`  | Boolean          | `false`             | Enable row selection in the table.                         |
| `selected`    | Array of Objects | `[]`                | The selected rows in the table.                            |
| `onRowSelect` | Function         | `null`              | Callback function when a row is selected.                  |
| `filters`     | Object           | `{}`                | Filters to be applied to the table columns.                |
| `noDataText`  | String           | `"There's no data"` | Text to display when there's no data to show in the table. |

## Events

The `s-table` component emits the following events:

| Event Name        | Description                                 |
| ----------------- | ------------------------------------------- |
| `onPageChange`    | Emitted when the current page is changed.   |
| `onPerPageChange` | Emitted when the items per page is changed. |
| `onFilter`        | Emitted when a column filter is applied.    |
| `update:selected` | Emitted when the selected rows are updated. |

## Example

Here's an example of using the `s-table` component:

<script setup>
import exTable from '../../components/ex-table.vue'
</script>

<ex-table></ex-table>

```vue
<template>
	<s-table :data="data" :meta="meta">
		<s-table-column field="name" label="Name" filterable />
		<s-table-column field="email" label="Email" />
		<s-table-column field="new" label="New User?" type="boolean" />
		<s-table-column field="date" label="Date" type="date" class="text-center" />
		<s-table-column v-slot="props">
			<s-btn class="btn-xs w-full" @click="onEdit(props.row)">Edit</s-btn>
		</s-table-column>
	</s-table>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { STable, STableColumn, useNotify } from "masc-vue";

const notify = useNotify();
function onEdit(row: any) {
	notify.alert(`Editing ${row.name}`);
}

type TdataRow = {
	name: string;
	email: string;
	new: boolean;
	date: Date;
};

const data = computed(() => {
	const start = Number(meta.value.page || 1);
	const count = Number(meta.value.perPage || 10);
	const startCount = (start - 1) * count;
	const rows: TdataRow[] = [];
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
```

In this example, we've used the `s-table` component to create a table with custom columns and row selection.

## Table Column Component

The `s-table-column` component is used in conjunction with the `s-table` component to define custom columns within a table. It allows you to specify the content and formatting of individual table cells.

The `s-table-column` component is used to define the content and formatting of a column in a table. You can customize the display value, data source, and various other attributes for each column to tailor the appearance and behavior of your table.

## Table Column Props

The `s-table-column` component accepts the following props:

| Prop         | Type                           | Default  | Description                                            |
| ------------ | ------------------------------ | -------- | ------------------------------------------------------ |
| `field`      | String                         | `""`     | The field name from the row data.                      |
| `display`    | String                         | `""`     | The display field name to use (if different).          |
| `type`       | String                         | `"text"` | The type of content (e.g., "text", "date", "boolean"). |
| `btnText`    | String                         | `""`     | Text for the button (if used).                         |
| `onClick`    | Function                       | `null`   | Callback function for button click.                    |
| `to`         | String                         | `""`     | URL to navigate when the button is clicked.            |
| `filterable` | String, Boolean, Number, Array | `null`   | Filterable options for the column.                     |
| `options`    | Array of Objects               | `[]`     | Options for a select input (if used).                  |
