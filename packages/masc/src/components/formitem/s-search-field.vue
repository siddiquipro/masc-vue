<template>
	<form class="inline-flex relative w-full has-addons-left has-addons-right" @submit.prevent="searchNow()">
		<div class="input-icon left-0 top-0">
			<sBtn type="sbmit" class="opacity-70 btn-link text-base-content" icon="mdi:search" />
		</div>

		<input :class="getClasses" v-bind="$attrs" v-model="value" :placeholder="placeholder" class="w-full input" ref="input" />

		<div class="input-icon right-0 top-0">
			<sBtn type="button" icon="mdi:close" class="btn-link text-base-content" @click.prevent="clearValue" v-if="value" />
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
		default: true,
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
	if (!props.triggerFocus) return;

	setTimeout(() => {
		setFocus();
	}, 300);
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
