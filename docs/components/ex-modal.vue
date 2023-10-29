<template>
	<s-card title="Modal" class="vp-raw text-base-content">
		<div class="mt-4">
			<s-field type="radio" v-model="ds.position" :options="options" />
			<br />
			<s-btn class="btn-primary" @click="ds.open = true">Open Modal</s-btn>

			<s-modal title="Hello Modal" v-model="ds.open" footer :position="ds.position">
				<div class="w-[400px] max-w-lg p-6 flex-1">
					<p>This is modal content</p>
					<p>
						This is modal on <strong> {{ ds.position }} </strong>
					</p>
				</div>
			</s-modal>
		</div>
	</s-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const ds = reactive({ open: false, openRight: false, position: "center" });

const options = [
	{ text: "Center", value: "center" },
	{ text: "Top", value: "top" },
	{ text: "Bottom", value: "bottom" },
	{ text: "Left", value: "left" },
	{ text: "Right", value: "right" },
];
</script>
