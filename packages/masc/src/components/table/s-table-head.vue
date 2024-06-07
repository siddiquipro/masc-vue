<template>
	<th @click="onSortClick" class="s-th relative" :class="{ 'cursor-pointer': sortable }">
		<div>{{ label }}</div>
		<div class="absolute right-0 top-0 h-full aspect-square flex items-center justify-center text-[1.1em] s-sort" v-if="sortable">
			<s-icon v-if="isAscending" icon="ph:sort-ascending-bold" />
			<s-icon v-else-if="isDescending" icon="ph:sort-descending-bold" />
			<s-icon v-else icon="ph:caret-up-down-bold" />
		</div>
	</th>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { SIcon } from "../icon/index";

const emits = defineEmits(["onSort"]);

const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	field: {
		type: String,
	},
	sortable: {
		type: Boolean,
		default: false,
	},
	meta: {
		type: Object as PropType<Record<string, any>>,
	},
});

const isAscending = computed(() => props.meta?.sort?.order === "asc" && props.meta?.sort?.field === props.field);
const isDescending = computed(() => props.meta?.sort?.order === "desc" && props.meta?.sort?.field === props.field);

function onSortClick() {
	if (!props.sortable) return;

	const order = isAscending.value ? "desc" : "asc";
	emits("onSort", { field: props.field, order });
}
</script>
