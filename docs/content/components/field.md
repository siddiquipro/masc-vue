---
title: Field Component Documentation
description: The field component is a versatile input field component from the masc-vue component library. It allows you to create various types of input fields, including text, textarea, boolean, checkbox, select, radio, date, and search fields. This component is designed to be highly customizable and is intended for use in forms and data input scenarios.
---

# Field

The `s-field` component is a versatile input field component from the masc-vue component library. It allows you to create various types of input fields, including text, textarea, boolean, checkbox, select, radio, date, and search fields. This component is designed to be highly customizable and is intended for use in forms and data input scenarios.

## Registration

You can register `s-field` globally or locally in your component.

```ts
import { SField } from "masc-vue";
```

## Usage

To use the `s-field` component in your Vue application, you can include it in your template as follows:

```vue
<template>
	<s-field v-model="yourModelValue" type="select" label="Field Label" required :options="yourOptions" size="sm" />
</template>
```

## Props

| Prop             | Type                                   | Default  | Description                                                                                                                       |
| ---------------- | -------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`     | String, Number, Boolean, Array, Object | `""`     | The data model value for the field.                                                                                               |
| `type`           | String                                 | `'text'` | The type of field. Valid options: `'text'`, `'textarea'`, `'boolean'`, `'checkbox'`, `'select'`, `'radio'`, `'date'`, `'search'`. |
| `label`          | String                                 | `""`     | The label for the field.                                                                                                          |
| `prop`           | String                                 | `""`     | The prop associated with the field.                                                                                               |
| `labelClass`     | String                                 | `""`     | Custom class for the label element.                                                                                               |
| `horizontal`     | Boolean                                | `false`  | Display the field horizontally.                                                                                                   |
| `help`           | String                                 | `""`     | Help text to display below the field.                                                                                             |
| `required`       | Boolean                                | `false`  | Indicates if the field is required.                                                                                               |
| `readonly`       | Boolean                                | `false`  | Indicates if the field is read-only.                                                                                              |
| `disabled`       | Boolean                                | `false`  | Indicates if the field is disabled.                                                                                               |
| `options`        | Array                                  | `[]`     | An array of options (for select, checkbox, radio fields).                                                                         |
| `size`           | String (xs, sm, lg)                    | `""`     | The size of the field.                                                                                                            |
| `pattern`        | String                                 | `""`     | The pattern for input validation.                                                                                                 |
| `patternMessage` | String                                 | `""`     | Error message to display if the pattern validation fails.                                                                         |
| `validator`      | Function                               | `null`   | Custom validation function.                                                                                                       |

## Slots

The `s-field` component supports a default slot for custom content. This is particularly useful when using the `type` prop as `'radio'`.

This documentation provides you with an overview of the `s-field` component's usage, props, and slots, enabling you to create dynamic and customizable input fields for your Vue application.
