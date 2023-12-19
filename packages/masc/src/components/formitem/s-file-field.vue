<template>
	<div class="rounded w1">
		<label class="block cursor-pointer relative input" :class="getClasses">
			<input class="file-input opacity-0 absolute top-0 w-full z-0 cursor-pointer" type="file" name="file" :required="required"
				:readonly="readonly" @change="onFileChange" />

			<div class="w-full flex gap-2 items-center h-full">
				<Icon icon="mdi:upload" />
				<span v-if="value">{{ value.name }}</span>
				<span v-else class="file-label"> Choose a file… </span>
			</div>
		</label>
	</div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import Icon from "../icon/icon.vue";
import { PropType, computed } from "vue";

const props = defineProps({
	modelValue: {
		type: Object as PropType<any>,
		default: null,
	},
	required: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},

	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
});

const getClasses = computed(() => {
	const cls = [];
	if (props.size === "xs") cls.push("input-xs");
	if (props.size === "sm") cls.push("input-sm");
	if (props.size === "lg") cls.push("input-lg");
	return cls.join(" ");
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
