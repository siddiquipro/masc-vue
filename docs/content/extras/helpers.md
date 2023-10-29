---
title: Helper Function Documentation
description: The Helper function is a utility that provides a simple way to introduce basic formatting via a function.
---

# Helper Functions

The Helper function is a set of utility functions that provides a simple way to introduce basic formatting via a function.

## `formatBoolean` Function

The `formatBoolean` function is a utility for formatting boolean values into human-readable text, particularly for converting `true` or `false` values into "Yes" or "No" text. This function simplifies the process of displaying boolean values in a more user-friendly way.

Import the `formatBoolean` function:

```vue
<script setup>
import { formatBoolean } from "masc-vue";
</script>
```

```vue
<script setup>
const value = true;
// Converts true to "Yes" and false to "No".
const formattedText = formatBoolean(value);
</script>
```

## `formatDate` Function

The `formatDate` function is a utility for formatting date values into a specific date format. It simplifies the process of displaying dates in a user-defined format. The `formatDate` function is helpful when you need to format date values for display in user interfaces, reports, or other parts of your application. It allows you to convert date values into a specific format, making them more readable and user-friendly.

To use the `formatDate` function, follow these steps:

1. Import the `formatDate` function:

```vue
<script setup>
import { formatDate } from "masc-vue";
</script>
```

2. Call the `formatDate` function with a date value as the first argument. You can also provide optional second and third arguments to specify the date format and a default value.

   ```vue
   <script setup>
   const dateValue = new Date(); // Replace with your date value.
   const formattedDate = formatDate(dateValue, 'MMM D, YYYY', 'Not Available');
   ```

3. Use the `formattedDate` variable in your application to display the formatted date.

4. Customize the date format and default value as needed.
