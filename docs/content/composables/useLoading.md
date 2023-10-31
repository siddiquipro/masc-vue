---
title: useLoading Composable Documentation
description: The useLoading Composable is a utility for displaying loading indicators. It provides a simple and convenient way to show loading spinners or overlays during asynchronous operations or when waiting for data to load.
---

# useLoading Composable

The `useLoading` composable is a utility for displaying loading indicators in your Vue 3 applications. It provides a simple and convenient way to show loading spinners or overlays during asynchronous operations or when waiting for data to load.

## Introduction

The `useLoading` composable is designed to make it easy to show loading indicators without the need to create separate loading components or manage loading state manually. You can use this utility to display loading spinners or overlays with minimal effort.

## Usage

To use the `useLoading` composable, follow these steps:

1. Import the `useLoading` function:

   ```vue
   <script setup>
   import { useLoading } from "masc-vue";
   </script>
   ```

2. Call the `show` method from the `Loading` class when you want to display a loading indicator. You can customize the loading indicator by providing props as needed.

   ```vue
   <script setup>
   const loading = useLoading();

   const showLoading = () => {
   	loading.show();
   };
   </script>
   ```

3. You can also call the `hide` method when you want to hide the loading indicator.

   ```vue
   <script setup>
   const hideLoading = () => {
   	const loader = loading.show();
   	setTimeout(() => {
   		loader.hide(); // Hide the loading indicator after some time.
   	}, 2000);
   };
   </script>
   ```

4. Customize the loading indicator by passing relevant props to the `show` method.

## Example

Here's an example of using the `useLoading` composable to show and hide a loading indicator:

<s-comp>
  <s-card title="Loading">
    <div class="flex gap-4">
      <s-btn class="btn-primary" @click="startLoading">Start Loading</s-btn>
    </div>
  </s-card>
</s-comp>

<script setup >
import { useLoading, useNotify, useWait } from "masc-vue";

const loading = useLoading();
const notify = useNotify();
async function startLoading() {
  const loader = loading.show();
  await useWait(3000);
  loader.hide();
  notify.success(`Loading completed`);
} 
</script>

```vue
<template>
	<s-card title="Loading">
		<div class="flex gap-4">
			<s-btn class="btn-primary" @click="startLoading">Start Loading</s-btn>
		</div>
	</s-card>
</template>

<script setup lang="ts">
import { useLoading, useNotify, useWait } from "masc-vue";

const loading = useLoading();
const notify = useNotify();
async function startLoading() {
	const loader = loading.show();
	await useWait(3000);
	loader.hide();
	notify.success(`Loading completed`);
}
</script>
```

In this example, we've used the `useLoading` composable to show and hide a full-page loading indicator with custom timing.
