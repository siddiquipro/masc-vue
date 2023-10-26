<template>
	<s-popper hover :distance="props.distance" arrow class="bg-base-100 rounded ring-1 ring-base-300 shadow-2xl">
		<slot tabindex="0"></slot>
		<template #content="{ close }">
			<div @click="close">
				<slot name="content" :close="close"></slot>
			</div>
		</template>
	</s-popper>
</template>

<script setup lang="ts">
import sPopper from "../popper/s-popper.vue";

const props = defineProps({
	distance: {
		type: String,
		default: "10",
	},
});
</script>
