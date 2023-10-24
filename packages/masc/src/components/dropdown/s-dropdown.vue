<template>
  <div class="dropdown dropdown-hover">
    <slot tabindex="0"></slot>

    <div tabindex="0" class="dropdown-content">
      <div class="dropdown-menu">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
