<template>
  <div class="w-full bg-gray-700 text-white h-screen flex flex-col">
    <h1 class="text-xl font-bold p-4">MASC Components</h1>
    <ul class="text-gray-50 overflow-y-auto flex-1 h-full">
      <li v-for="x in 20" class="border-b border-gray-500">
        <a href="#" class="block px-4 py-2">Side Item {{ x }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
