<template>
  <div class="min-h-screen flex flex-col gap-4 p-4">
    <div class="text-xl font-bold">MASC Components</div>

    <SCard title="Buttons">
      <div class="flex gap-4">
        <SBtn class="btn-sm" icon="mdi:content-save"> Small Button </SBtn>
        <SBtn icon="mdi:content-save"> Normal Button </SBtn>
        <SBtn loading class="btn-primary"> Loading Button </SBtn>
        <SBtn class="btn-primary" href="http://google.com" target="_blank" icon="mdi:link"> Button as Link </SBtn>
      </div>
    </SCard>
    <SCard title="Card Title">
      <p class="">Card Body</p>
    </SCard>

    <SAppbar title="Awesome App" class="rounded" left>
      <SBtn class="btn-ghost" icon="mdi:home"> Home </SBtn>
      <SBtn class="btn-ghost" icon="mdi:about"> About </SBtn>
      <SBtn class="btn-ghost" icon="mdi:contact"> Contact </SBtn>
    </SAppbar>
  </div>
</template>

<script setup lang="ts"></script>

<style>
html,
body {
  background-color: #ebf1f5;
}
</style>
