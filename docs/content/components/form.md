---
title: Form Component Documentation
description: The Form component is a flexible and customizable component designed for building forms and validation usinf field component.
---

# Form Component

The `s-form` component is a Vue 3 component that provides a form container for managing and validating form fields. It is part of the `masc-vue` component library and is designed to simplify form management in your Vue applications.

## Introduction

The `s-form` component allows you to wrap your form fields in a form element and provides methods for adding and validating form fields. It also emits a `submit` event when the form is submitted, allowing you to handle form submissions with ease.

## Usage

To use the `s-form` component, follow these steps:

1. Import the component:

   ```vue
   <script setup>
   import { SForm } from "masc-vue";
   </script>
   ```

2. Use the `s-form` component within your template:

   ```vue
   <template>
   	<s-form @submit="handleFormSubmit">
   		<!-- Your form fields go here -->
   	</s-form>
   </template>
   ```

3. Implement the `handleFormSubmit` method to handle the form submission:

   ```vue
   <script setup>
   const handleFormSubmit = () => {
   	// Handle the form submission logic here
   };
   </script>
   ```

4. You can now add your form fields within the `s-form` component as child elements.

## Props

The `s-form` component accepts the following props:

| Prop         | Type    | Default | Description                            |
| ------------ | ------- | ------- | -------------------------------------- |
| `novalidate` | Boolean | `false` | Disable browser-native form validation |

## Slots

The `s-form` component provides one slot for adding form fields. You can also use the slot to reset the form by passing a function as the slot prop. The slot prop `reset` should be used to reset the form fields.

| Slot Name | Description                      |
| --------- | -------------------------------- |
| Default   | Slot for adding form fields      |
| `reset`   | Slot prop for resetting the form |

## Example

Here's an example of using the `s-form` component with form fields:

<s-comp> 
  <s-card title="Your Form">
    <s-form @submit="handleFormSubmit" class="flex flex-col gap-4">
      <s-field label="Name" type="text" v-model="name" required />
      <s-field label="Email"  type="email" v-model="email" required/>
      <div class="py-2"> 
        <s-btn class="btn-primary px-10" type="submit">Submit</s-btn>
      </div>
    </s-form> 
  </s-card>
</s-comp>

<script setup>
import { ref } from 'vue'
import { useNotify } from "masc-vue"

const name = ref("");
const email = ref("");

const Notify = useNotify();

const handleFormSubmit = () => {
	// Handle form submission logic
  alert(JSON.stringify({ name: name.value, email: email.value })); 
};
</script>

```vue
<template>
	<s-form @submit="handleFormSubmit">
		<s-field type="text" v-model="name" />
		<s-field type="email" v-model="email" />
		<s-btn class="btn-primary" type="submit">Submit</s-btn>
	</s-form>
</template>

<script setup>
import { SForm, SField, SBtn } from "masc-vue";

const name = ref("");
const email = ref("");

const handleFormSubmit = () => {
	// Handle form submission logic after validation
};
</script>
```

In this example, we've used the `s-form` component to wrap the form fields and handle the form submission.
