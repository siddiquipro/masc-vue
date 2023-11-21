<template>
	<div class="rounded input h-auto w1">
		<label class="flex items-center justify-center flex-col cursor-pointer">
			<input class="file-input opacity-0 absolute top-0" type="file" name="file" :required="required" @change="onFileChange" />
			<div class="w-full flex flex-col items-center py-8" v-if="value">
				<div>{{ value.name }}</div>
			</div>
			<div v-else class="w-full flex flex-col items-center py-4">
				<Icon icon="mdi:upload" height="32" class="text-3xl" />
				<span class="file-label"> Choose a file… </span>
			</div>
		</label>
	</div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import Icon from "../icon/icon.vue";
import { PropType } from "vue";

const props = defineProps({
	modelValue: {
		type: [File] as PropType<File | null>,
		default: null,
	},
	required: {
		type: Boolean,
		default: false,
	},
});

const value = useVModel(props, "modelValue");

function onFileChange(event: any) {
	const newFile = event?.target?.files[0];
	if (!newFile) {
		value.value = null;
		return;
	}
	value.value = newFile;
}
</script>
