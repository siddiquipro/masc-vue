<template>
  <div>
    <SNForm :config="config" horizontal> </SNForm>
  </div>
</template>

<script lang="ts" setup>
const config = {
  columns: [
    {
      columns: [
        { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
        { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
        { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
      ],
    },

    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
    { field: "", label: "", type: "", info: "", errorMsg: "", validation: "", classes: "" },
  ],
};

// ordering of cols
// horizontal
// vertical
// grouped
</script>
