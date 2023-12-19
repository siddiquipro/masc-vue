<template>
	<component :is="tag" v-bind="attributes" ref="submitBtn" :class="classes">
		<span v-if="props.loading" class="loading loading-spinner"></span>
		<Icon v-else-if="props.icon" :icon="props.icon" :class="props.iconClass" />
		<slot />
		<Icon v-if="props.iconRight" :icon="props.iconRight" :class="props.iconClass" />
	</component>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, PropType } from "vue";

const props = defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
	to: {
		type: String,
		default: "",
	},
	href: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
	iconRight: {
		type: String,
		default: "",
	},
	iconClass: {
		type: String,
		default: "",
	}
});

const attributes = computed(() => {
	if (props.to) return { to: props.to };
	if (props.href) return { href: props.href };
	return { disabled: props.disabled };
});

const tag = computed(() => (props.href ? "a" : "button"));

const classes = computed(() => {
	const classes = ["btn"];
	if (props.loading) classes.push("pointer-events-none");
	if (props.size === "xs") classes.push("btn-xs");
	if (props.size === "sm") classes.push("btn-sm");
	if (props.size === "lg") classes.push("btn-lg");
	return classes.join(" ");
});
</script>
