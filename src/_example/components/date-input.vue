<template>
  <div>
    <sField label="Date Input" type="date" v-model="date" />
    <pre class="mt-2">Model Value : {{ date }}</pre>
  </div>
</template>

<script setup lang="ts">
import sField from "../../components/formitem/s-formitem.vue";
import { ref } from "vue";
const date = ref("2021-09-01");
</script>
