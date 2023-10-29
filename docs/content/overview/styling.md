---
title: Styling
description: MASC Vue uses daisy ui and talwind for styling.
---

# Styling

Built with `daisyui` and `tailwindcss`, providing a powerful and flexible styling solution that allows you to easily customize the look and feel of your components. `daisyui` provides a set of pre-built components and utilities that work seamlessly with `tailwindcss`, making it easy to create beautiful and responsive user interfaces.

## Styling overview

### Classes

All components accept `class` attributes, just like normal component. This class will be passed through to the DOM element. You can use it in CSS as expected.

## Styling with CSS

### Styling a part

You can style a component part by targeting the `class` that you provide.

```vue
<script setup lang="ts">
import { SBtn, ... } from "masc-vue";
</script>

<template>
	<s-btn>Primary Button</s-btn>
</template>
```

## Summary

MASC Vue is designed to encapsulate styling to DaisyUI and/or Tailwind css, while ensuring you retain complete control over styling.

::: info
Daisy UI: [Daisy UI](https://daisyui.com/)

Tailwind CSS: [Tailwind CSS](https://tailwindcss.com/)
:::
