<template>
  <th :class="helpers.getColClasses(props)">{{ props.label }}</th>
</template>

<script setup lang="ts">
import helpers from "../../utils/helpers";
const props = defineProps(["field", "label", "type"]);
</script>
