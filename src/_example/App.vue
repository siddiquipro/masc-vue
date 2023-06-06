<template>
  <div class="min-h-screen bg-base-300 flex flex-col gap-4 p-4">
    <div class="text-xl font-bold">MASC Components</div>
    <div class="divider m-0"></div>
    <div class="flex gap-4">
      <SBtn class="btn-primary" icon="mdi:content-save"> Normal Button </SBtn>
      <SBtn class="btn-primary" href="http://google.com" target="_blank" icon="mdi:link"> Button as Link </SBtn>
    </div>
    <SCard title="Card Title">
      <p class="py-4">Card Body</p>
    </SCard>
  </div>
</template>

<script setup lang="ts"></script>
