<template>
	<span :class="classes" v-if="show">
		<slot>{{ props.label }}</slot>
		<icon icon="mdi:close" class="cursor-pointer ml-1" v-if="props.closable" @click="onClose" />
	</span>
</template>

<script setup lang="ts">
import icon from "../icon/icon.vue";
import { computed, ref } from "vue";

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
const show = ref(true);

const onClose = () => {
	show.value = false;
	emit("close");
};

const classes = computed(() => {
	const cls = ["inline-flex items-center px-2 border"];

	if (props.rounded) cls.push("rounded-full");
	else cls.push("rounded");

	if (props.outline) cls.push("badge-outline");

	if (props.type === "primary") cls.push("badge-primary");
	else if (props.type === "ghost") cls.push("badge-ghost");
	else if (props.type === "success") cls.push("badge-success");
	else if (props.type === "warning") cls.push("badge-warning");
	else if (props.type === "error") cls.push("badge-error");

	if (props.size === "large" || props.size === "lg") cls.push("text-sm py-0.5");
	else cls.push("text-xs py-[2px] leading-[1.25]");

	return cls.join(" ");
});
</script>
