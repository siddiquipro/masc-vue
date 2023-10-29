---
title: useNotify Composable Documentation
description: The useNotify Composable provides a convenient way to display notifications and alerts. It allows you to show success messages, information messages, warnings, errors, and modal dialogs for confirmations and alerts.
---

# useNotify Composable

The `useNotify` composable provides a convenient way to display notifications and alerts in your Vue 3 applications. It allows you to show success messages, information messages, warnings, errors, and modal dialogs for confirmations and alerts.

## Introduction

The `useNotify` composable simplifies the process of notifying users by providing methods for showing different types of notifications and alerts. It uses other utility functions such as `useModal`, `useLoading`, and `useToast` to provide a complete notification system.

## Usage

To use the `useNotify` composable, follow these steps:

1. Import the `useNotify` function:

   ```vue
   <script setup>
   import { useNotify } from "masc-vue";
   </script>
   ```

2. Call the methods on the `Notify` class to display different types of notifications and alerts.

   ```vue
   <script setup>
   const notify = useNotify();
   </script>
   ```

3. Use the `notify` object to call different notification methods such as `success`, `info`, `warning`, `error`, `confirm`, and `alert`.

   ```vue
   <script setup>
   const showSuccessNotification = () => {
   	notify.success("Operation successful");
   };
   const showInfoNotification = () => {
   	notify.info("Information message");
   };
   const showWarningNotification = () => {
   	notify.warning("This is a warning");
   };
   const showErrorNotification = () => {
   	notify.error("An error occurred");
   };
   const showConfirmationDialog = async () => {
   	const result = await notify.confirm("Are you sure you want to proceed?");
   	if (result) {
   		// User confirmed
   	} else {
   		// User canceled
   	}
   };
   const showAlert = async () => {
   	await notify.alert("This is an alert");
   };
   </script>
   ```

4. Customize the content and behavior of notifications and dialogs as needed by providing additional options.

## Example

Here's an example of using the `useNotify` composable to show various types of notifications and confirmations:

<s-comp>
	<div class="flex flex-wrap gap-4">
		<s-btn class="btn-primary" @click="showSuccessNotification">Show Success</s-btn>
		<s-btn class="btn-primary" @click="showInfoNotification">Show Info</s-btn>
		<s-btn class="btn-primary" @click="showWarningNotification">Show Warning</s-btn>
		<s-btn class="btn-primary" @click="showErrorNotification">Show Error</s-btn>
		<s-btn class="btn-primary" @click="showConfirmationDialog">Show Confirmation</s-btn>
		<s-btn class="btn-primary" @click="showAlert">Show Alert</s-btn>
	</div>
</s-comp>

<script setup>
import { useNotify } from "masc-vue";

const notify = useNotify();

const showSuccessNotification = () => {
	notify.success("Operation successful");
};

const showInfoNotification = () => {
	notify.info("Information message");
};

const showWarningNotification = () => {
	notify.warning("This is a warning");
};

const showErrorNotification = () => {
	notify.error("An error occurred");
};

const showConfirmationDialog = async () => {
	const result = await notify.confirm("Are you sure you want to proceed?");
	if (result) {
		 	notify.success("User confirmed");
	} else {
	   notify.error('User cancelled')
	}
};

const showAlert = async () => {
	await notify.alert("This is an alert");
};
</script>

```vue
<template>
	<div>
		<button @click="showSuccessNotification">Show Success</button>
		<button @click="showInfoNotification">Show Info</button>
		<button @click="showWarningNotification">Show Warning</button>
		<button @click="showErrorNotification">Show Error</button>
		<button @click="showConfirmationDialog">Show Confirmation</button>
		<button @click="showAlert">Show Alert</button>
	</div>
</template>

<script setup>
import { useNotify } from "masc-vue";

const notify = useNotify();

const showSuccessNotification = () => {
	notify.success("Operation successful");
};

const showInfoNotification = () => {
	notify.info("Information message");
};

const showWarningNotification = () => {
	notify.warning("This is a warning");
};

const showErrorNotification = () => {
	notify.error("An error occurred");
};

const showConfirmationDialog = async () => {
	const result = await notify.confirm("Are you sure you want to proceed?");
	if (result) {
		// User confirmed
	} else {
		// User canceled
	}
};

const showAlert = async () => {
	await notify.alert("This is an alert");
};
</script>
```

In this example, we've used the `useNotify` composable to display various types of notifications and confirmations.
