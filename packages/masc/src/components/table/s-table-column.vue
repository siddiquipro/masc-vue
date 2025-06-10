<template>
	<td @click="onColumnClick">
		<slot v-bind:row="row">
			<div v-if="props.type === 'expand'" class="cursor-pointer">
				<icon :icon="props.expanded ? 'mdi:chevron-down' : 'mdi:chevron-right'" class="mx-auto text-lg" />
			</div>
			<div v-else v-html="displayValue"></div>
		</slot>
	</td>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import DOMPurify from 'dompurify'

import { getObjectValue } from "../../utils/helpers";
import { formatDate, formatBoolean } from "../../utils/formatters";
import icon from "../icon/icon.vue";

defineOptions({ name: "STableColumn" });

const emits = defineEmits(["onExpand"]);

const props = defineProps({
	row: {
		type: Object as PropType<Record<string, any>>,
		default: () => ({}),
	},
	index: {
		type: Number,
	},
	expanded: {
		type: Boolean,
		default: false,
	},
	field: {
		type: String,
		default: "",
	},
	display: {
		type: String,
		default: "",
	},
	type: {
		type: String,
		default: "",
	},
	sanitize: {
		type: Boolean,
		default: false,
	},
	btnText: {
		type: String,
		default: "",
	},
	onClick: {
		type: Function,
		default: null,
	},
	to: {
		type: String,
		default: "",
	},
	filterable: {
		type: [String, Boolean, Number, Array],
		default: null,
	},
	options: {
		type: Array as PropType<any[]>,
		default: () => [],
	},
	sortable: {
		type: Boolean,
		default: false,
	},
});

const onColumnClick = () => {
	if (props.type === "expand") {
		emits("onExpand", props.row, props.index);
		return;
	}

	if (props.onClick) props.onClick(props.row);
};

const displayValue = computed(() => {
	const value = getObjectValue(props.row, props.display || props.field);
	const type = props.type || "text";
	let rawValue = "";
	if (type === "date") rawValue = formatDate(value);
	else if (type === "boolean") rawValue = formatBoolean(value);
	else if (type === "onlyYes") rawValue = formatBoolean(value, "");
	else rawValue = value || "";
	if (props.sanitize) {
		return DOMPurify.sanitize(rawValue);
	}
	return rawValue;
});
</script>
