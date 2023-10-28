# Installation

A quick tutorial to walk through installing the packages, as well as the supported plugins.

## Installing package

<a href="https://www.npmjs.com/package/masc-vue" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/masc-vue?flat&colorA=002438&colorB=41c399"></a>

```bash
pnpm add masc-vue
# yarn add masc-vue
# npm i masc-vue
```

## Component Registration

Import all(❌ not recommended):

```ts
// main.ts
import masc from "masc-vue";
import { createApp } from "vue";
import App from "./App.vue";

// import custom css used in the components
import "masc-vue/style.css";

const app = createApp(App);
app.use(masc); // register all components
```

Importing individual components (Globally)

```ts
import { SCard } from "masc-vue";

const app = createApp(App);
app.component("card", SCard);
```

Importing components locally

```vue
<template>
	<s-card title="Card Title">
		<p>This is card body</p>
		<s-btn @click="openToast" class="btn-primary">Alert User</s-btn>
	</s-card>
</template>

<script setup lang="ts">
import { SCard, SBtn, useNotify } from "masc-vue";

//notify comes with alert, confirm as modals promises
//and info, success, warning, error as toast messages
const notify = useNotify();

function openToast() {
	notify.info("This is a random message");
}
</script>
```

## Tailwind configuration

`masc-vue` components are based on daisy ui and tailwind, therefore these packages needs to be configured. Below are helpful links on how to install and configure these packages.

::: info
Tailwind CSS: [Tailwind CSS](https://tailwindcss.com/docs/installation)

Daisy UI: [Daisy UI](https://daisyui.com/docs/install/)
:::

In `tailwind.config.ts`, import `mascPlugin`, and configure as such

```ts{4,11 }
//tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { mascPlugin } from "masc-vue";

const config = {
	content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/masc-vue/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [daisyui, mascPlugin],
} satisfies Config;

export default config;
```
