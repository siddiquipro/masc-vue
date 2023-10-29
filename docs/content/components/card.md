---
title: Card Component Documentation
description: The card component is a versatile card component for displaying content with an optional title and action buttons. It provides flexibility in styling and content arrangement. This documentation will guide you through its usage and customization.
---

# Card

The `s-card` component is a versatile card component for displaying content with an optional title and action buttons. It provides flexibility in styling and content arrangement. This documentation will guide you through its usage and customization.

## Installation

To use the `s-card` component, you can import it as a Vue component and use it in your templates.

```ts
import { SCard } from "masc-vue";
```

## Usage

The `s-card` component can be used as a container for various types of content. Here's an example of basic usage:

<s-comp>
  <s-card title="Card Title">
    <p>This is the main content of the card.</p>
  </s-card> 
</s-comp>
  
```vue
<template>
	<s-card title="Card Title">
		<p>This is the main content of the card.</p>
	</s-card>
</template>
```

## Props

The `s-card` component accepts several props to customize its appearance and behavior:

| Name          | Type    | Default Value                                                  | Description                                                                                                                            |
| ------------- | ------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | String  | `""`                                                           | The title to be displayed at the top of the card. If not provided, the title section will be hidden.                                   |
| `compact`     | Boolean | `false`                                                        | Determines whether the card should have compact spacing or standard padding. When set to `true`, the card will have no extra padding.  |
| `border`      | Boolean | `true`                                                         | Controls whether the card should have a border. If set to `false`, the card will have no border.                                       |
| `headerClass` | String  | `"flex items-center justify-between px-4 py-2 border-b gap-6"` | A custom CSS class to be applied to the card header section. You can use this prop to override the default styling of the card header. |

## Slots

The `s-card` component provides several named slots to insert content into specific areas of the card:

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| Default   | The main content of the card, typically placed below the title (if provided). |
| `full`    | Content to be displayed in the header section along with the title.           |
| `actions` | Action buttons or components to be added to the card header.                  |

### Default Slot

The default slot is used for the main content of the card, typically placed below the title (if provided).

```vue
<template>
	<s-card title="Card Title">
		<p>This content goes in the main slot.</p>
	</s-card>
</template>
```

### `full` Slot

The `full` slot is used for content that should be displayed in the header section along with the title.

<s-comp>
  <s-card title="Card Title">
    <template #full>
      <s-field type="search" @click="doSomething" class="w-full" /> 
    </template>
    <p>This content goes in the main slot.</p>
  </s-card>
</s-comp>

```vue
<template>
	<s-card title="Card Title">
		<template #full>
			<s-field type="search" @click="doSomething" class="w-full" />
		</template>
		<p>This content goes in the main slot.</p>
	</s-card>
</template>
```

### `actions` Slot

The `actions` slot is used for adding action buttons or components to the card header.

<s-comp>
	<s-card title="Card Title">
		<template #actions>
			<s-btn class="btn-primary" icon="mdi:edit" @click="editCard">Edit</s-btn>
			<s-btn class="btn-primary" icon="mdi:delete" @click="deleteCard">Delete</s-btn>
		</template>
		<p>This content goes in the main slot.</p>
	</s-card>
</s-comp>

```vue
<template>
	<s-card title="Card Title">
		<template #actions>
			<s-btn class="btn-primary" icon="mdi:edit" @click="editCard">Edit</s-btn>
			<s-btn class="btn-primary" icon="mdi:delete" @click="deleteCard">Delete</s-btn>
		</template>
		<p>This content goes in the main slot.</p>
	</s-card>
</template>
```

Feel free to customize the content within these slots as needed to suit your application's requirements.
