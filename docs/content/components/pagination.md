---
title: Pagination Component Documentation
description: The field component is a versatile input field component from the masc-vue component library. It allows you to create various types of input fields, including text, textarea, boolean, checkbox, select, radio, date, and search fields. This component is designed to be highly customizable and is intended for use in forms and data input scenarios.
---

# Pagination Component

The `s-pagination` component provides pagination controls for managing and displaying a large dataset in a paginated manner. It is a part of the `masc-vue` component library.

## Introduction

The `s-pagination` component simplifies the implementation of pagination controls. It allows you to specify the total number of items, items per page, and the current page, while also providing options for customizing the number of rows per page and the appearance of the pagination controls.

## Usage

To use the `s-pagination` component, follow these steps:

1. Import the component:

   ```vue
   <script setup>
   import { SPagination } from "masc-vue";
   </script>
   ```

2. Use the `s-pagination` component within your template and bind it to your data:

   ```vue
   <template>
   	<s-pagination
   		:total="totalItems"
   		:per-page="itemsPerPage"
   		:page="currentPage"
   		:rows-per-page="availableRowsPerPage"
   		@onPageChange="handlePageChange"
   		@onPerPageChange="handlePerPageChange"
   	/>
   </template>
   ```

   Customize the component by binding it to your data and handling the necessary events, such as `@onPageChange` and `@onPerPageChange`.

3. Implement the event handlers to react to changes in the page and items per page, such as `handlePageChange` and `handlePerPageChange`.

4. The `s-pagination` component will display the pagination controls based on the provided data.

## Props

The `s-pagination` component accepts the following props:

| Prop            | Type   | Default                | Description                              |
| --------------- | ------ | ---------------------- | ---------------------------------------- |
| `total`         | Number | `0`                    | The total number of items.               |
| `per-page`      | Number | `0`                    | The number of items to display per page. |
| `page`          | Number | `0`                    | The current page number.                 |
| `rows-per-page` | Array  | `[5, 10, 20, 50, 100]` | Available options for items per page.    |

## Events

The `s-pagination` component emits the following events:

| Event Name        | Description                                 |
| ----------------- | ------------------------------------------- |
| `onPageChange`    | Emitted when the current page is changed.   |
| `onPerPageChange` | Emitted when the items per page is changed. |

## Example

Here's an example of using the `s-pagination` component:

<s-comp>
  <s-card>
    <s-pagination :total="100" 	:per-page="10" :page="1"> </s-pagination>
  </s-card>
</s-comp>

```vue
<template>
	<s-pagination
		:total="totalItems"
		:per-page="itemsPerPage"
		:page="currentPage"
		:rows-per-page="availableRowsPerPage"
		@onPageChange="handlePageChange"
		@onPerPageChange="handlePerPageChange"
	/>
</template>

<script setup>
import { SPagination } from "masc-vue";

const totalItems = ref(100);
const itemsPerPage = ref(10);
const currentPage = ref(1);
const availableRowsPerPage = [5, 10, 20, 50, 100];

const handlePageChange = (newPage) => {
	// Update the current page
	currentPage.value = newPage;
};

const handlePerPageChange = (newPerPage) => {
	// Update the items per page
	itemsPerPage.value = newPerPage;
};
</script>
```

In this example, we've used the `s-pagination` component to create pagination controls for a list of 100 items, with 10 items displayed per page.
