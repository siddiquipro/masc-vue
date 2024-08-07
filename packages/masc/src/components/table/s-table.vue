<template>
	<div class="w-full overflow-x-auto">
		<div v-if="selectable && selectedRows.length && showSelectedText" class="font-semibold tag is-warning w1">
			{{ selectedRows.length }} rows selected
		</div>
		<table class="s-table w-full">
			<thead>
				<tr>
					<th v-if="selectable">
						<checkboxField
							size="sm"
							:checked="isFullSelected"
							:indeterminate="isPartialSelected"
							:name="keyInst + 'ALL'"
							@change="onSelectALLChange"
						/>
					</th>
					<TableHead v-for="(h, i) in slotData" :key="i" v-bind="h.props" :meta="metaData" @onSort="onSortCol"></TableHead>
				</tr>
				<tr v-if="hasFilter">
					<th v-if="selectable"></th>
					<TableFilter v-for="(h, i) in slotData" :key="i" v-bind="h.props" :filters="filters" @onFilter="onFilter" />
				</tr>
			</thead>
			<tbody>
				<template v-for="(row, i) in data" :key="i">
					<tr @click="onRowClick(row, i)" :class="row.rowClass">
						<td v-if="selectable" class="w-2 text-center">
							<checkboxField size="sm" :name="keyInst" v-model="row.isSelected" @change="setSelected" />
						</td>

						<component
							v-for="(h, c) in slotData"
							:key="i + c"
							:is="h"
							:row="row"
							:index="i"
							:expanded="expandedRows === i"
							@onExpand="onExpandCol"
							@onSort="onSortCol"
						></component>
					</tr>

					<tr v-if="expandedRows === i" :key="i">
						<td :colspan="colCount">
							<slot name="expanded" :row="row" :index="i"> </slot>
						</td>
					</tr>
				</template>
				<tr v-if="slotData && slotData.length > 0 && (!data || data.length == 0)">
					<td :colspan="colCount" class="text-center">
						<slot name="no-data">
							<div class="py-3 s-no-data">{{ props.noDataText }}</div>
						</slot>
					</td>
				</tr>
			</tbody>
			<tfoot v-if="meta && meta.page">
				<tr>
					<td :colspan="colCount">
						<sPagination
							:total="meta.total"
							:perPage="meta.perPage"
							:page="meta.page"
							:rows-per-page="rowsPerPage"
							@onPageChange="pageChanged"
							@onPerPageChange="perPageChanged"
						/>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script setup lang="ts">
import TableHead from "./s-table-head.vue";
import TableFilter from "./s-table-filter.vue";
import { computed, useSlots, ref } from "vue";
import type { PropType } from "vue";
import sPagination from "./s-pagination.vue";
import { useVModel } from "@vueuse/core";
import { isDefined, genRandom } from "../../utils/helpers";
import checkboxField from "../formitem/s-checkbox-field.vue";

const keyInst = genRandom();

const emits = defineEmits(["onPageChange", "onPerPageChange", "onFilter", "update:selected", "onExpand", "onSort"]);

const props = defineProps({
	data: {
		type: Array as PropType<any[]>,
		default: () => [],
	},
	meta: {
		type: Object,
		default: () => ({}),
	},
	selectable: {
		type: Boolean,
		default: false,
	},
	selected: {
		type: Array,
		default: () => [],
	},
	showSelectedText: {
		type: Boolean,
		default: false,
	},
	onRowSelect: {
		type: Function,
		default: null,
	},
	filters: {
		type: Object,
		default: () => ({}),
	},
	noDataText: {
		type: String,
		default: `There's no data`,
	},
	rowsPerPage: {
		type: Array,
		default: () => [5, 10, 20, 50, 100],
	},
});

const selectedRows = useVModel(props, "selected", emits);
const metaData = useVModel(props, "meta", emits);
const expandedRows = ref<number | null>(null);

const colCount = computed(() => slotData.value.length + (props.selectable ? 1 : 0));

const slotData = computed(() => {
	const slots = useSlots();
	const temps = slots && slots.default ? slots.default() : [];
	const cols: any[] = [];
	const addToCols = (slotCols: any) => {
		for (const col of slotCols) {
			if (col?.type?.name === "STableColumn") {
				cols.push(col);
			}
		}
	};

	for (const col of temps) {
		const children: any = col.children;
		children?.length ? addToCols(children) : addToCols([col]);
	}
	return cols;
});

const isExpand = computed(() => {
	const match = slotData.value.find((x) => x.props && isDefined(x.props.type) && x.props.type === "expand");
	return match ? true : false;
});

const hasFilter = computed(() => {
	const match = slotData.value.find((x) => x.props && isDefined(x.props.filterable));
	return match ? true : false;
});

function onExpandCol(row: any, index: number) {
	if (!isExpand.value) return;
	if (expandedRows.value === index) expandedRows.value = null;
	else {
		expandedRows.value = index;
		emits("onExpand", row, index);
	}
}

function onRowClick(row: any, index: number) {
	if (typeof props.onRowSelect !== "function") return false;
	props.onRowSelect(row, index);
}

function onSortCol(val: any) {
	metaData.value.sort = val;
	emits("onSort", val);
}

function onFilter(val: any) {
	emits("onFilter", val);
}

function pageChanged(val: number) {
	metaData.value.page = val;
	emits("onPageChange", val);
}

function perPageChanged(val: number) {
	metaData.value.perPage = val;
	metaData.value.page = 1;
	emits("onPerPageChange", val);
}

const isFullSelected = computed(() => props.data.length === selectedRows.value.length);
const isPartialSelected = computed(() => selectedRows.value.length > 0 && !isFullSelected.value);

function setSelected() {
	selectedRows.value = props.data.filter((x) => x.isSelected);
}

function onSelectALLChange(event: any) {
	if (event?.target.checked) props.data.forEach((x) => (x.isSelected = true));
	else props.data.forEach((x) => (x.isSelected = false));
	setSelected();
}
</script>
