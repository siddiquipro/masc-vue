---
title: Popper Component Documentation
description: The Popper component is designed to create popovers and tooltips. It provides a flexible and customizable way to create interactive elements that appear near a trigger element when needed.
---

# Popper Component

The `s-popper` component is designed to create popovers and tooltips. It provides a flexible and customizable way to create interactive elements that appear near a trigger element when needed. This component is part of the `masc-vue` component library.

## Introduction

The `s-popper` component simplifies the creation of popovers and tooltips. You can easily customize its behavior, appearance, and content. It can be triggered on hover, click, or manually controlled, making it suitable for various use cases.

## Usage

To use the `s-popper` component, follow these steps:

1. Import the component and any other necessary components:

   ```vue
   <script setup>
   import { SPopper } from "masc-vue";
   </script>
   ```

2. Use the `s-popper` component within your template:

   ```vue
   <template>
   	<s-popper :placement="popoverPlacement" :hover="triggerOnHover" :show="popoverVisible" :disabled="popoverDisabled" :content="popoverContent">
   		<!-- Your trigger element goes here -->
   		<button>Hover over me</button>
   	</s-popper>
   </template>
   ```

3. Customize the component by binding it to your data, and use the provided props to control its behavior.

4. The `s-popper` component will display the popover or tooltip based on the provided data and user interactions.

## Props

The `s-popper` component accepts the following props:

| Prop             | Type             | Default    | Description                                                                       |
| ---------------- | ---------------- | ---------- | --------------------------------------------------------------------------------- |
| `class`          | String           | `""`       | Additional CSS class to be applied to the popper.                                 |
| `placement`      | String           | `"bottom"` | Preferred placement for the popper.                                               |
| `offsetSkid`     | String           | `"0"`      | Offset in pixels along the trigger element.                                       |
| `offsetDistance` | String           | `"10"`     | Offset in pixels away from the trigger element.                                   |
| `hover`          | Boolean          | `false`    | Trigger the popper on hover.                                                      |
| `show`           | Boolean          | `null`     | Manually open/close the popper.                                                   |
| `disabled`       | Boolean          | `false`    | Disables the popper. If it was open, it will be closed.                           |
| `openDelay`      | Number           | `0`        | Open the popper after a delay (in milliseconds).                                  |
| `closeDelay`     | Number           | `0`        | Close the popper after a delay (in milliseconds).                                 |
| `zIndex`         | Number or String | `9999`     | The z-index of the popper.                                                        |
| `arrow`          | Boolean          | `false`    | Display an arrow on the popper.                                                   |
| `arrowPadding`   | String           | `"0"`      | Stop the arrow from reaching the edge of the popper.                              |
| `interactive`    | Boolean          | `true`     | Control if the popper is interactive.                                             |
| `locked`         | Boolean          | `false`    | Lock the popper in place; it will not flip dynamically when it runs out of space. |
| `content`        | String           | `null`     | The content of the popper. If specified, it will be used as the content.          |

## Slots

The `s-popper` component accepts the following slots:

| Slot Name | Description                          |
| --------- | ------------------------------------ |
| `default` | default slot for the popover trigger |
| `content` | slot for the popover content.        |

## Events

The `s-popper` component emits the following events:

| Event Name     | Description                        |
| -------------- | ---------------------------------- |
| `open:popper`  | Emitted when the popper is opened. |
| `close:popper` | Emitted when the popper is closed. |

## Example

Here's an example of using the `s-popper` component:

<s-comp>
	<s-popper class="bg-black text-white p-2 rounded text-center" arrow :placement="popoverPlacement" :hover="triggerOnHover" :show="popoverVisible" :disabled="popoverDisabled" :content="popoverContent">
		<s-btn @click="togglePopover">Click me for a popover</s-btn>
	</s-popper>
</s-comp>

<script setup>
import { SPopper } from "masc-vue";
import { ref } from "vue";

const popoverPlacement = "top";
const triggerOnHover = true;
const popoverVisible = ref(false);
const popoverDisabled = false;
const popoverContent = "This is a popover!";

const togglePopover = () => {
	popoverVisible.value = !popoverVisible.value;
};
</script>

```vue
<template>
	<s-popper :placement="popoverPlacement" :hover="triggerOnHover" :show="popoverVisible" :disabled="popoverDisabled" :content="popoverContent">
		<s-btn @click="togglePopover">Click me for a popover</s-btn>
	</s-popper>
</template>

<script setup>
import { SPopper } from "masc-vue";

const popoverPlacement = "top";
const triggerOnHover = true;
const popoverVisible = ref(false);
const popoverDisabled = false;
const popoverContent = "This is a popover!";

const togglePopover = () => {
	popoverVisible.value = !popoverVisible.value;
};
</script>
```

In this example, we've used the `s-popper` component to create a popover that appears when the button is clicked.
