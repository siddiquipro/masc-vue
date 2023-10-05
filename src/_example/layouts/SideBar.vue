<template>
  <div class="w-full bg-gray-700 text-white">
    <h1 class="text-xl font-bold p-4">MASC Components</h1>
    <ul class="text-gray-50">
      <li v-for="x in 10" class="">
        <a href="#" class="block px-4 py-2">Side Item {{ x }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
