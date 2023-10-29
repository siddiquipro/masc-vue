---
title: Dropdown Component Documentation
description: The Dropdown component is a versatile dropdown component in the `masc-vue` component library. It provides an elegant way to create pop-up menus or tooltips with customizable properties. This component uses the `s-popper` component from the same library to manage the pop-up behavior.
---

# Dropdown

## Introduction

The `s-dropdown` component is a versatile dropdown component in the `masc-vue` component library. It provides an elegant way to create pop-up menus or tooltips with customizable properties. This component uses the `s-popper` component from the same library to manage the pop-up behavior.

## Usage

To use the `s-dropdown` component, you need to import it and place it in your Vue template. Here's a basic example:

<s-comp>
  <s-dropdown>
    <s-btn class="btn-primary px-10">DropDown Button</s-btn> 
    <template v-slot:content>
      <ul class="menu p-2">
        <li v-for="item in 10">
          <a @click="onClick(item)">Item {{ item }}</a>
        </li>
      </ul>
    </template>
  </s-dropdown>
</s-comp>

```vue
<template>
	<s-dropdown>
		<!-- Your trigger element here -->
		<s-btn class="btn-primary px-10">DropDown Button</s-btn>
		<!-- Dropdown content slot -->
		<template v-slot:content>
			<!-- Dropdown content goes here -->
			<ul class="menu p-2">
				<li v-for="item in 10">
					<a @click="onClick(item)">Item {{ item }}</a>
				</li>
			</ul>
		</template>
	</s-dropdown>
</template>

<script setup lang="ts">
import { SDropdown } from "masc-vue";
</script>
```

In this example, a basic `s-dropdown` is created with a trigger button and dropdown content. The `:distance` prop determines the distance between the trigger and the dropdown.

## Props

The `s-dropdown` component accepts the following props:

| Prop       | Type   | Default | Description                                        |
| ---------- | ------ | ------- | -------------------------------------------------- |
| `distance` | String | `"10"`  | The distance between the trigger and the dropdown. |

## Slots

| Slot Name | Description                                                                                                                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default` | The default slot is used for the trigger element, which opens the dropdown when interacted with.                                                                                                                                                                              |
| `content` | The `content` slot is used for the actual content of the dropdown. It can be customized to display any content you want, such as a menu or tooltip. It has access to the `close` function, allowing you to close the dropdown when an action is performed inside the content. |

## Usage of Slots

In the usage example provided above, you can see how to use the `default` and `content` slots. The `default` slot is where you place the trigger element (e.g., a button). The `content` slot is used for the content of the dropdown. It has access to the `close` function, which you can call to close the dropdown when an action is performed inside the content.

```vue
<template>
	<s-dropdown :distance="10">
		<button>Open Dropdown</button>
		<!-- This is placed in the default slot -->

		<!-- Dropdown content slot -->
		<template #content="{ close }">
			<div @click="close">
				<!-- You can use the `close` function to close the dropdown -->
				<!-- Dropdown content goes here -->
			</div>
		</template>
	</s-dropdown>
</template>
```

This setup allows you to create interactive dropdowns with your own content and behavior.
