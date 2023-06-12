# masc-vue

(WIP) Vue3 UI components based on [daisyui](https://github.com/saadeghi/daisyui).

## Usage

Install:

```bash
$ pnpm add masc-vue
# or
$ npm add masc-vue
# or
$ yarn add masc-vue
```

Import all(❌ not recommended):

```ts
// main.ts
import masc from "masc-vue";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(masc); // register all components
```
