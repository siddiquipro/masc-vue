<template>
  <s-card title="Dropdown">
    <s-dropdown class="w-56">
      <s-btn class="btn-primary w-full">DropDown Button</s-btn>

      <template v-slot:content>
        <ul class="menu p-2">
          <li v-for="item in 10">
            <a>Item {{ item }}</a>
          </li>
        </ul>
      </template>
    </s-dropdown>
  </s-card>
</template>

<script setup lang="ts"></script>
