---
title: Styling
description: MASC uses daisy ui and talwind for styling.
---

# Styling

MASC uses daisy ui and talwind for styling

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
Daisy UI: [Daisy UI](https://daisyui.com/) <br/>
Tailwind CSS: [Tailwind CSS](https://tailwindcss.com/)
:::
