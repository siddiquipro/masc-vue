---
title: Modal Component Documentation
description: The Modal component is designed to create modal dialog boxes. It provides customizable options for creating dialog boxes for displaying messages, confirmation prompts, or any other user interaction.
---

# Modal Component

The `s-modal` component is designed to create modal dialog boxes. It provides customizable options for creating dialog boxes for displaying messages, confirmation prompts, or any other user interaction. This component is part of the `masc-vue` library.

## Introduction

The `s-modal` component simplifies the creation of modal dialog boxes. You can easily customize the appearance and behavior of the dialog box, including its title, message, buttons, and other properties.

## Usage

To use the `s-modal` component, follow these steps:

1. Import the component and any other necessary components:

   ```vue
   <script setup>
   import { SModal } from "masc-vue";
   </script>
   ```

2. Use the `s-modal` component within your template. You can customize the content and behavior of the modal using various props:

   ```vue
   <template>
   	<s-modal v-model="showModal" :title="modalTitle" :cancelBtn="showCancelButton" :confirmBtnText="confirmButtonText" :onConfirm="handleConfirm">
   		<!-- Custom content goes here -->
   	</s-modal>
   </template>
   ```

3. Implement any custom logic, such as the `handleConfirm` method, to handle user interactions.

4. You can use the `v-model` directive to control the visibility of the modal by binding it to a Boolean value (`showModal` in the example above).

## Props

The `s-modal` component accepts the following props:

| Prop             | Type     | Default    | Description                                                     |
| ---------------- | -------- | ---------- | --------------------------------------------------------------- |
| `modelValue`     | Boolean  | `true`     | Controls the visibility of the modal.                           |
| `persist`        | Boolean  | `false`    | Indicates if the modal should persist after confirmation.       |
| `position`       | String   | `center`   | Sets the position (`left`, `right`, `top`, `bottom`, `center`). |
| `cancelBtn`      | Boolean  | `true`     | Determines whether the Cancel button is displayed.              |
| `cancelBtnText`  | String   | `"Cancel"` | Sets the text for the Cancel button.                            |
| `confirmBtnText` | String   | `"Ok"`     | Sets the text for the Confirm button.                           |
| `onConfirm`      | Function | `null`     | A callback function to handle the Confirm button action.        |
| `loading`        | Boolean  | `false`    | Indicates if the modal is in a loading state.                   |
| `closeIcon`      | Boolean  | `true`     | Determines whether the close icon is displayed.                 |
| `msg`            | String   | `""`       | The message to be displayed in the modal.                       |
| `title`          | String   | `""`       | The title of the modal.                                         |
| `width`          | String   | `450px`    | Sets the width of the modal.                                    |
| `footer`         | Boolean  | `false`    | Determines whether the footer section is displayed.             |

## Example

Here's an example of using the `s-modal` component:

<script setup>
import exModal from '../../components/ex-modal.vue'
</script>

<ex-modal></ex-modal>

```vue
<template>
	<s-card title="Modal">
		<div class="mt-4">
			<s-field type="radio" v-model="ds.position" :options="options" />
			<s-btn class="btn-primary mt-6" @click="ds.open = true">Open Modal</s-btn>

			<s-modal title="Hello Modal" v-model="ds.open" footer :position="ds.position">
				<div class="w-[400px] max-w-lg p-6 flex-1">
					<p>This is modal content</p>
					<p>
						This is modal on <strong> {{ ds.position }} </strong>
					</p>
				</div>
			</s-modal>
		</div>
	</s-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const ds = reactive({ open: false, openRight: false, position: "center" });

const options = [
	{ text: "Center", value: "center" },
	{ text: "Top", value: "top" },
	{ text: "Bottom", value: "bottom" },
	{ text: "Left", value: "left" },
	{ text: "Right", value: "right" },
];
</script>
```

In this example, we've used the `s-modal` component to create a confirmation dialog for deleting an item.

This concludes the documentation for the `s-modal` component in the `masc-vue` component library.
