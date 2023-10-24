<template>
  <Transition name="fade" appear>
    <div v-if="open" class="inset-0 h-screen grid items-center justify-center bg-base-content bg-opacity-50 z-[1000]" :class="positionClass">
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="54" height="54" stroke="#fff">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".25" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  isFullPage: {
    type: Boolean,
    default: true,
  },
});
const positionClass = props.isFullPage ? "fixed" : "absolute";
</script>
