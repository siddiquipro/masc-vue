<template>
	<div class="flex" :class="wrapperClass">
		<div class="lab" v-if="label">
			<span class="font-semibold text-sm text-base-content text-opacity-80">
				<span>{{ label }}</span>
				<span v-if="required"> * </span>
			</span>
		</div>
		<div class="flex-1" :class="fieldClass">
			<TextareaField v-model="dataValue" v-if="type === 'textarea'" v-bind="bProps" />

			<BoolField v-model="dataValue" v-else-if="type === 'boolean'" v-bind="bProps" />

			<CheckboxField v-model="dataValue" v-else-if="type === 'checkbox'" v-bind="bProps" :options="options" />

			<SelectField v-model="dataValue" v-else-if="type === 'select'" v-bind="bProps" :options="options" />

			<RadioField v-model="dataValue" v-else-if="type === 'radio'" v-bind="bProps" :options="options">
				<slot></slot>
			</RadioField>

			<DateField v-model="dataValue" v-else-if="type === 'date'" v-bind="bProps" />

			<SearchField v-model="dataValue" v-else-if="type === 'search'" v-bind="bProps" />

			<FileField v-model="dataValue" v-else-if="type === 'file'" v-bind="bProps" />

			<TextField v-model="dataValue" v-else v-bind="bProps" :type="type" />
		</div>
		<div class="-mt-1">
			<div class="text-[0.85em] text-base-content text-opacity-80 help-text" v-if="props.help" v-text="props.help" />
			<div class="text-error text-[0.85em] error-text" v-if="errorMsg" v-text="errorMsg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import TextField from "./s-text-field.vue";
import TextareaField from "./s-textarea-field.vue";
import SelectField from "./s-select-field.vue";
import BoolField from "./s-bool-field.vue";
import RadioField from "./s-radio-field.vue";
import DateField from "./s-date-field.vue";
import CheckboxField from "./s-checkbox-field.vue";
import SearchField from "./s-search-field.vue";
import FileField from "./s-file-field.vue";
import { PropType, computed, inject, onMounted, ref, watch, useAttrs } from "vue";
import { formContextKey } from "../form/constants";
import { useVModel } from "@vueuse/core";
import { validateData } from "./validator";

const props = defineProps({
	modelValue: {
		type: [String, Number, Boolean, Array, Object] as PropType<any>,
		default: "",
	},
	type: {
		type: String,
		default: "text",
	},
	label: {
		type: String,
		default: "",
	},
	prop: {
		type: String,
		default: "",
	},
	labelClass: {
		type: String,
		default: "",
	},
	horizontal: {
		type: Boolean,
		default: false,
	},
	help: {
		type: String,
		default: "",
	},
	required: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	options: {
		type: Array,
		default: () => [],
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
	pattern: {
		type: String,
		default: "",
	},
	patternMessage: {
		type: String,
		default: "",
	},
	validator: {
		type: Function as PropType<Function | null>,
		default: null,
	},
});

const attrs = useAttrs();

const bProps = computed(() => ({
	...attrs,
	size: props.size,
	disabled: props.disabled,
	readonly: props.readonly,
	required: props.required,
}));

const initialValue = props.modelValue;
const dataValue = useVModel(props, "modelValue");

const fieldClass = computed(() => {
	const cls = [];
	if (props.readonly) cls.push("s-readonly");
	return cls.join(" ");
});

const wrapperClass = computed(() => {
	if (!props.horizontal) return "flex-col gap-1";
	const cls = ["items-center horizontal"];
	if (props.type == "box") cls.push("border-b");
	return cls.join(" ");
});

const formContext: any = inject(formContextKey, undefined);
const isDirty = ref(false);
const errorMsg = ref("");

function addToFormContext() {
	if (!formContext || !formContext.addField) return;
	formContext.addField(props, validateField, reset);
}

function validateField() {
	const error = validateData(props, dataValue.value);
	errorMsg.value = error;
	isDirty.value = error ? true : false;
	return !isDirty.value;
}

function reset() {
	errorMsg.value = "";
	dataValue.value = initialValue;
}

onMounted(() => addToFormContext());

function onValueChange() {
	if (!isDirty.value) return;
	validateField();
}

watch(() => dataValue.value, onValueChange, { deep: true });
</script>

<style>
.horizontal .s-label {
	flex: 0 0 35%;
}

.input:focus,
.textarea:focus,
.select:focus {
	outline-width: 1px;
	outline-offset: 0;
}

.input,
.textarea,
.select {
	font-weight: 400;
}
</style>
