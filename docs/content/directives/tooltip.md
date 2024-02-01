---
title: tooltip directive Documentation
description: tooltip is a directive that provides a simple way to introduce a tooltip.
---

# tooltip directive

`v-tooltip` is a directive that provides a simple way to introduce a tooltip.

## Usage

To use the `tooltip` directive, follow these steps:

```javascript
import { tooltip } from "masc-vue";

const app = createApp(App);
app.directive("tooltip", tooltip);
app.mount("#app");
```

Once registered then tooltip can be used in templates

```html
<s-btn v-tooltip="'This is a tooltip'" class="btn-primary">Hover me</s-btn>
```

<s-comp>
  <s-btn v-tooltip="'This is a tooltip'" class="btn-primary">Hover me</s-btn>
</s-comp>
