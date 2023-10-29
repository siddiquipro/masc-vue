---
title: Appbar Component
description: The appbar component is a flexible and customizable component designed for building navigation bars in your Vue 3 application.
---

# Appbar

The `s-appbar` component is a flexible and customizable component designed for building navigation bars in your Vue 3 application. It provides slots for various elements such as a toggle button, title, and additional content, allowing you to create navigation bars tailored to your specific needs.

## Registration

```ts
import { SAppbar } from "masc-vue";
```

## Usage

<div class="vp-raw">
  <s-appbar title="Awesome App" wrapClass="bg-primary text-white">
    <template #toggle>
      <s-btn icon="mdi:menu" class="btn-ghost btn-circle text-xl" />
    </template> 
    <s-btn class="btn-ghost">Home</s-btn>
    <s-btn class="btn-ghost">Contact</s-btn>
    <s-btn class="btn-ghost">Logout</s-btn>
  </s-appbar>
</div>

```vue
<template>
	<s-appbar title="Awesome App" wrapClass="bg-primary text-white">
		<template #toggle>
			<s-btn icon="mdi:menu" class="btn-ghost btn-circle text-xl" />
		</template>
		<s-btn class="btn-ghost">Home</s-btn>
		<s-btn class="btn-ghost">Contact</s-btn>
		<s-btn class="btn-ghost">Logout</s-btn>
	</s-appbar>
</template>

<script setup>
import { SAppbar, SBtn } from "masc-vue";
</script>
```

## Props

| Prop        | Type    | Default | Description                                                                                                |
| ----------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`     | String  | ""      | The title displayed in the navigation bar.                                                                 |
| `wrapClass` | String  | ""      | Additional CSS classes for the navigation bar container.                                                   |
| `left`      | Boolean | false   | Determines the alignment of the content. Set to `true` for left alignment and `false` for right alignment. |

## Slots

| Slot Name    | Description                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `toggle`     | Slot for the toggle button. Use this slot to provide a button or icon that triggers a sidebar or menu toggle.                         |
| `title`      | Slot for the title. Use this slot to customize the title of the navigation bar. If no slot is provided, a default title is displayed. |
| Default Slot | Use the default slot for additional content in the navigation bar, such as navigation links or custom components.                     |
