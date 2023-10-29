---
title: Icon Component Documentation
description: The Icon component component allows you to easily display icons in your application. You can customize the displayed icon by passing the icon's name as a prop.
---

# Icon Component

The `s-icon` component is a Vue 3 component that simplifies the usage of icons within your Vue applications. It leverages the iconify library which is a set of tools for developers and designers, created to make it easy to work with different icon sets in a consistent way..

## Introduction

The `s-icon` component allows you to easily display icons in your application. It uses the `@iconify/vue` component to render icons, and you can customize the displayed icon by passing the icon's name as a prop.

::: info
Important links

[Iconify Documentation](https://iconify.design/docs/)

[Iconify Vue Component](https://iconify.design/docs/icon-components/vue/#properties)
:::

## Usage

To use the `s-icon` component, follow these steps:

1. Import the component:

   ```vue
   <script setup>
   import { SIcon } from "masc-vue";
   </script>
   ```

2. Use the `s-icon` component within your template:

   ```vue
   <template>
   	<s-icon icon="icon-name" />
   </template>
   ```

   Replace `"icon-name"` with the name of the icon you want to display.

3. The `s-icon` component will render the specified icon.

## Props

The `s-icon` component accepts the following prop:

| Prop   | Type   | Default | Description                       |
| ------ | ------ | ------- | --------------------------------- |
| `icon` | String | `""`    | The name of the icon to be shown. |

## Example

Here's an example of using the `s-icon` component to display an icon:

<s-comp>
  <s-card title="Icons">
    <div class="flex gap-4">
      <s-icon icon="mdi:home" />
      <s-icon icon="mdi:heart" />
    </div>
  </s-card>
</s-comp>

```vue
<template>
	<div class="flex gap-4">
		<s-icon icon="mdi:home" />
		<s-icon icon="mdi:heart" />
	</div>
</template>

<script setup>
import { SIcon } from "masc-vue";
</script>
```

In this example, we've used the `s-icon` component to display the "mdi-heart" icon.
