<template>
	<div>
		<div>{{ msg }}</div>
		<div class="flex gap-4 py-4">
			<s-tag label="Default" closable rounded />
			<s-tag type="primary" label="Primary" closable />
			<s-tag type="success" label="Success" closable />
			<s-tag type="error" label="Error" closable />
		</div>

		<s-btn @click="open = true">Open Modal</s-btn>

		<s-modal title="First Modal" v-model="open" footer position="center" :persist="true" :close-icon="false">
			<div class="w-[400px] max-w-lg p-6 flex-1">
				<p>This is modal content</p>
				<p>This is modal on</p>

				<s-field label="Name" v-model="name" type="search" size="lg" />

				<s-btn @click="user = open">Add user</s-btn>
			</div>
		</s-modal>

		<s-modal title="Second Modal" v-model="user" footer position="center">
			<div class="w-[400px] max-w-lg p-6 flex-1">
				<p>This is modal content</p>
				<p>This is modal on</p>

				<s-field label="Name" v-model="name2" />
			</div>
		</s-modal>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = "Vue3 UI components based on daisyui.";
const open = ref(false);
const user = ref(false);
const name = ref("");
const name2 = ref("");
</script>

<style scoped></style>
