# Button Component

The Button Component is a versatile component for creating buttons in your Vue 3 application. It provides options for various attributes and slots to customize the appearance and behavior of the button.

## Registration

You can register `s-btn` globally or locally in your component.

```ts
import { SBtn } from "masc-vue";
```

## Usage

To use the `s-btn` Component, you can include it in your Vue templates and customize it as needed.

<s-btn class="btn-primary px-10" icon="mdi:home"> Home </s-btn>

```vue
<template>
	<s-btn class="btn-primary px-10" icon="mdi:home"> Home </s-btn>
</template>

<script setup>
import { SBtn } from "masc-vue";
</script>
```

### Button sizes

You can define size as a class or through `size` prop.

<div class="flex flex-wrap gap-4">
  <s-btn size="xs"> X-Small </s-btn>
  <s-btn class="btn-sm"  > Small </s-btn>
  <s-btn> Normal </s-btn>
  <s-btn size="lg"> Large </s-btn> 
</div>

```vue
<template>
	<div class="flex flex-wrap gap-4">
		<s-btn size="xs"> X-Small </s-btn>
		<s-btn class="btn-sm"> Small </s-btn>
		<s-btn> Normal </s-btn>
		<s-btn size="lg"> Large </s-btn>
	</div>
</template>

<script setup>
import { SBtn } from "masc-vue";
</script>
```

### Buttons with brand colors

You can define size as a class as per daisy ui or tailwind colors.

<div class="flex flex-wrap gap-4">
  <s-btn>Button</s-btn>
  <s-btn class="btn-neutral">Neutral</s-btn>
  <s-btn class="btn-primary">Primary</s-btn>
  <s-btn class="btn-secondary">Secondary</s-btn>
  <s-btn class="btn-accent">Accent</s-btn>
  <s-btn class="btn-ghost">Ghost</s-btn>
  <s-btn class="btn-link">Link</s-btn>
</div>

```vue
<template>
	<div class="flex flex-wrap gap-4">
		<s-btn>Button</s-btn>
		<s-btn class="btn-neutral">Neutral</s-btn>
		<s-btn class="btn-primary">Primary</s-btn>
		<s-btn class="btn-secondary">Secondary</s-btn>
		<s-btn class="btn-accent">Accent</s-btn>
		<s-btn class="btn-ghost">Ghost</s-btn>
		<s-btn class="btn-link">Link</s-btn>
	</div>
</template>

<script setup>
import { SBtn } from "masc-vue";
</script>
```

### Buttons with state colors

You can use daisyui state colours with the button component

<div class="flex flex-wrap gap-4">
  <s-btn class="btn-info">Info</s-btn>
  <s-btn class="btn-success">Success</s-btn>
  <s-btn class="btn-warning">Warning</s-btn>
  <s-btn class="btn-error">Error</s-btn>
</div>

```vue
<template>
	<div class="flex flex-wrap gap-4">
		<s-btn class="btn-info">Info</s-btn>
		<s-btn class="btn-success">Success</s-btn>
		<s-btn class="btn-warning">Warning</s-btn>
		<s-btn class="btn-error">Error</s-btn>
	</div>
</template>

<script setup>
import { SBtn } from "masc-vue";
</script>
```

### Buttons with states

You can make a button as a link or make it loading state

<div class="flex flex-wrap gap-4 vp-raw">
  <s-btn loading class="btn-primary"> Loading </s-btn>
  <s-btn class="btn-primary" href="https://masc-vue.netlify.app/" target="_blank" icon="mdi:link"> Button Link </s-btn>
</div>

```vue
<template>
	<div class="flex flex-wrap gap-4">
		<s-btn loading class="btn-primary"> Loading </s-btn>
		<s-btn class="btn-primary" href="https://masc-vue.netlify.app/" target="_blank" icon="mdi:link">
			<span>Button Link</span>
		</s-btn>
	</div>
</template>

<script setup>
import { SBtn } from "masc-vue";
</script>
```

## Props

| Prop        | Type    | Default | Description                                                                |
| ----------- | ------- | ------- | -------------------------------------------------------------------------- |
| `loading`   | Boolean | `false` | Indicates whether the button is in a loading state.                        |
| `disabled`  | Boolean | `false` | Disables the button if set to `true`.                                      |
| `size`      | String  | ""      | Button size. Can be one of `"xs"`, `"sm"`, or `"lg"`.                      |
| `to`        | String  | ""      | URL to navigate to when the button is clicked.                             |
| `href`      | String  | ""      | A URL to navigate to when the button is clicked (if not using Vue Router). |
| `icon`      | String  | ""      | Icon name to display on the button.                                        |
| `iconRight` | String  | ""      | Icon name to display on the right side of the button.                      |
| `iconClass` | String  | ""      | Custom CSS class to style the button's icon(s).                            |

## Slots

The `s-btn` Component supports the following slots for customization:

| Slot Name    | Description                             |
| ------------ | --------------------------------------- |
| Default Slot | Slot for the button's label or content. |

## Styling

The component provides flexibility in styling by allowing you to specify CSS classes through the `iconClass` and `class` prop. You can further customize the appearance of the button using your own CSS.

`s-btn` Component is designed to be a versatile and reusable button component for your applications. You can customize it to create buttons with different sizes, icons, and behaviors to suit your specific project requirements.
