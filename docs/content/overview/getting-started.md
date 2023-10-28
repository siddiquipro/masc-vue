---
title: Getting started
description: A quick tutorial to get you up and running with MASC Vue.
name: Button
---

# Getting started

A quick tutorial to get you up and running with Radix Primitives.

## Implementing a Button

In this quick tutorial, we will install and style the [Button](../components/button) component.

### 1. Install the library

Install the component from your command line.

```bash
npm install masc-vue
```

### 2. Import the parts

Import and structure the parts.

```vue
<script setup lang="ts">
import { SBtn } from "masc-vue";
</script>

<template>
	<s-btn>Default Button</s-btn>
</template>
```

### 3. Add your classes

Add classes as desired.

```vue
<template>
	<s-btn class="btn-primary px-10">Primary Button</s-btn>
</template>
```

### Demo

Here's How it looks.

<div class="flex gap-6">
  <s-btn>Default Button</s-btn>
  <s-btn class="btn-primary px-10">Primary Button</s-btn>
</div>

## Summary

The steps above outline briefly what's involved in using a MASC component in your application.

In a few simple steps, we've implemented a button component, without having to worry about many of its complexities.
