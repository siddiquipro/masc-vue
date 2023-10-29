---
title: useWait Function Documentation
description: The useWait function is a utility that provides a simple way to introduce a delay or wait for a specified amount of time. It returns a Promise that resolves after the specified time delay.
---

# useWait Function

The `useWait` function is a utility that provides a simple way to introduce a delay or wait for a specified amount of time in your Vue 3 applications. It returns a Promise that resolves after the specified time delay.

## Introduction

The `useWait` function is useful when you need to create delays in your code, such as delaying the execution of certain actions or waiting for a specific time period before proceeding with the next task. This function is particularly handy when dealing with asynchronous operations that require timing control.

## Usage

To use the `useWait` function, follow these steps:

1. Import the `useWait` function:

   ```vue
   <script setup>
   import { useWait } from "masc-vue";
   </script>
   ```

2. Call the `useWait` function with the desired time delay in milliseconds as the argument.

   ```vue
   <script setup>
   const wait = useWait(2000); // Wait for 2 seconds (2000 milliseconds).
   </script>
   ```

3. Use the `wait` Promise to introduce the time delay by waiting for it to resolve.

   ```vue
   <script setup>
   const performDelayedAction = async () => {
   	// Perform some tasks before the delay.
   	console.log("Task 1");

   	// Wait for the specified time (2 seconds) using the `wait` Promise.
   	await useWait(2000);

   	// Continue with other tasks after the delay.
   	console.log("Task 2");
   };
   </script>
   ```

4. Customize the time delay as needed by passing a different number of milliseconds to the `useWait` function.

## Example

Here's an example of using the `useWait` function to introduce a time delay in a Vue component:

```vue
<template>
	<div>
		<button @click="startDelayedAction">Start Delayed Action</button>
	</div>
</template>

<script setup>
import { useWait } from "masc-vue";

const startDelayedAction = async () => {
	console.log("Action started");

	// Wait for 2 seconds using the `wait` Promise.
	await useWait(2000); // 2-second delay.

	console.log("Action completed");
};
</script>
```

In this example, we've used the `useWait` function to introduce a 2-second delay before proceeding with the next task.
