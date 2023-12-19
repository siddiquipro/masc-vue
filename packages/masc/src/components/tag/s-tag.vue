<template>
	<span :class="classes">
		<slot>{{ props.label }}</slot>
		<icon icon="mdi:close" class="text-lg cursor-pointer" v-if="props.closable" @click="onClose" />
	</span>
</template>

<script setup lang="ts">
import icon from "../icon/icon.vue";
import { computed } from "vue";

const props = defineProps({
	closable: {
		type: Boolean,
		default: false,
	},
	rounded: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: "",
	},
	label: {
		type: [String, Number],
		default: "",
	},
	outline: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["close"]);

const onClose = () => {
	emit("close");
};

const classes = computed(() => {
	const cls = ["border px-2"];

	if (props.rounded) cls.push("rounded-full");
	else cls.push("rounded");

	if (props.closable) cls.push("inline-flex items-center justify-between gap-2");
	else cls.push("inline-block text-center");

	if (props.outline) cls.push("badge-outline");

	if (props.type === "primary") cls.push("badge-primary");
	else if (props.type === "ghost") cls.push("badge-ghost");
	else if (props.type === "success") cls.push("badge-success");
	else if (props.type === "warning") cls.push("badge-warning");
	else if (props.type === "error") cls.push("badge-error");

	if (props.size === "large" || props.size === "lg") cls.push("py-1");
	else cls.push("text-sm py-[2px]");
	return cls.join(" ");
});
</script>
