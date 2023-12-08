<template>
	<form class="inline-flex relative w-full has-addons" @submit.prevent="searchNow()">
		<div class="left-0 input-icon">
			<sBtn type="sbmit" class="opacity-70" icon="mdi:search" />
		</div>

		<input :class="getClasses" v-bind="$attrs" v-model="value" :placeholder="placeholder" class="w-full input" ref="input" />

		<div class="input-icon right-0">
			<sBtn type="button" icon="mdi:close" @click.prevent="clearValue" v-if="value" />
		</div>
	</form>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType, computed } from "vue";
import { useVModel } from "@vueuse/core";
import sBtn from "../button/s-btn.vue";

const props = defineProps({
	modelValue: {
		type: String,
		default: null,
	},
	type: {
		type: String,
		default: "text",
	},
	triggerFocus: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	placeholder: {
		type: String,
		default: "",
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
});

const emits = defineEmits(["update:modelValue", "search"]);

const input = ref<HTMLElement | null>(null);

function setFocus() {
	if (!input.value) return;
	input.value.focus();
}

function searchNow(val = value.value) {
	emits("search", val);
}

function clearValue() {
	value.value = "";
	searchNow("");
}

onMounted(() => {
	setTimeout(() => {
		setFocus();
	}, 500);
});

const value = useVModel(props, "modelValue", emits);

const getClasses = computed(() => {
	const cls = [];

	if (props.size === "xs") cls.push("input-xs");
	if (props.size === "sm") cls.push("input-sm");
	if (props.size === "lg") cls.push("input-lg");

	return cls.join(" ");
});
</script>

<style scoped>
.has-addons input {
	padding-left: 2em;
	padding-right: 2em;
}

.input-icon {
	position: absolute;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2em;
}

.input-icon button {
	height: 100%;
	outline: 0;
	border: 0;
	background: transparent;
	font-size: 1em;
}
</style>
