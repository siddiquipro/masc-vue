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

// import custom css used in the components
import "masc-vue/style.css";

const app = createApp(App);
app.use(masc); // register all components
```

Importing individual components (Globally)

```ts
import { SCard } from "masc-vue";
app.component("card", SCard);
```

Importing components locally

```ts
<template>
  <SCard title="Card Title">
   <p>This is card body</p>
   <SBtn @click="openToast" class="btn-primary">Alert User</SBtn>
  </SCard>
</template>
<script setup lang="ts">
import { SCard, SBtn , useNotify} from "masc-vue";

//notify comes with alert, confirm as modals promises
//and info, success, warning, error as toast messages
const notify = useNotify();

function openToast(){
  notify.info('This is a random message' , {});
}

</script>
```
