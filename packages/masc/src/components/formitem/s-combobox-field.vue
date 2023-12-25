<template>
	<div class="relative">
		<s-popper offsetDistance="3" class="w-full" :show="show" ref="target">
			<div class="has-addons-right">
				<div ref="input" :class="multiClass" @click="openPopper" class="input w-full flex items-center gap-2 flex-wrap py-2" v-if="props.multiple">
					<s-tag v-for="opt in selMultipleValue" class="bg-base-200 shrink-0" :key="opt" closable @close="removeItem(opt)">
						{{ opt.text }}
					</s-tag>
				</div>
				<input type="text" class="input w-full" :class="getClasses" v-else v-bind="$attrs" :value="selValue" readonly @focus="openPopper" />

				<div class="input-icon right-0 top-0 z-[1]">
					<s-icon v-if="props.clearable && dataValue" icon="mdi:close" class="opacity-70 cursor-pointer" @click="dataValue = ''" />
					<s-icon v-else icon="mdi:chevron-down" class="opacity-70" />
				</div>
			</div>

			<template #content>
				<div class="bg-base-100 sel-shadow rounded border border-base-200 z-10">
					<div class="p-2 border-b flex items-center gap-2">
						<s-icon icon="mdi:magnify" class="opacity-50" />
						<input ref="searchInputEL" class="h-6 w-full outline-none text-sm" v-model="search" placeholder="Search..." />
					</div>
					<ul class="max-h-64 overflow-y-auto p-2 scroll">
						<li v-for="opt in filteredOptions" class="text-sm hover:bg-base-200 hover:bg-opacity-40 rounded">
							<a
								tabindex="0"
								class="w-full block pl-4 pr-8 py-2 cursor-pointer relative"
								role="option"
								:data-option="opt.text"
								:data-value="opt.value"
								@click="setSelection(opt)"
							>
								<span :class="isSelected(opt) ? 'text-primary font-semibold' : ''">{{ opt.text }}</span>
								<span class="absolute top-0 right-2 h-full grid items-center">
									<s-icon icon="mdi:check" v-if="isSelected(opt)" class="text-primary text-lg" />
								</span>
							</a>
						</li>
						<li v-if="filteredOptions.length == 0 && search">
							<p class="text-base-content text-opacity-50 px-4 py-2 text-sm">No matching data</p>
						</li>
					</ul>
				</div>
			</template>
		</s-popper>
	</div>
</template>

<script setup lang="ts">
import { watch, reactive, computed, ref } from "vue";
import { useVModel, onClickOutside } from "@vueuse/core";
import sPopper from "../popper/s-popper.vue";
import sIcon from "../icon/icon.vue";
import sTag from "../tag/s-tag.vue";

const props = defineProps({
	options: {
		type: Array,
		default: [],
	},
	modelValue: {
		type: [String, Number, Array],
	},
	select: {
		type: Object,
		default: null,
	},
	keyValue: {
		type: String,
		default: "value",
	},
	keyText: {
		type: String,
		default: "text",
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: "",
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: false,
	},
});

const ds: any = reactive({ options: [] });
const search = ref("");
const show = ref(false);
const input = ref<HTMLElement | null>(null);
const target = ref<HTMLElement | null>(null);
const searchInputEL = ref<HTMLElement | null>(null);

const openPopper = () => {
	show.value = true;
	setTimeout(() => {
		searchInputEL.value?.focus();
	}, 100);
};

const closePopper = () => {
	show.value = false;
};

onClickOutside(target, () => closePopper());

const selMultipleValue = computed(() => {
	if (!Array.isArray(dataValue.value)) return [];
	return dataValue.value
		.map((x: any) => {
			return ds.options.find((y: any) => y && y.value === x);
		})
		.filter((x: any) => x);
});

const selValue = computed(() => {
	if (props.multiple) return "";
	const opt = ds.options.find((x: any) => x && x.value === dataValue.value);
	return opt ? opt.text : "";
});

const filteredOptions = computed(() => {
	if (!search.value) return ds.options;
	return ds.options.filter((x: any) => x && x.text.toLowerCase().includes(search.value.toLowerCase()));
});

function isSelected(opt: any) {
	if (props.multiple) return Array.isArray(dataValue.value) && dataValue.value.includes(opt.value);
	return opt && opt.value === dataValue.value;
}

function setSelection(opt: any) {
	if (props.multiple) return setMultipleSelection(opt);
	dataValue.value = opt.value;
	closePopper();
}

function setMultipleSelection(opt: any) {
	const val = Array.isArray(dataValue.value) ? dataValue.value : [];
	const idx = val.indexOf(opt.value);
	if (idx > -1) val.splice(idx, 1);
	else val.push(opt.value);
	dataValue.value = val;
}

function removeItem(opt: any) {
	const val = Array.isArray(dataValue.value) ? dataValue.value : [];
	const idx = val.indexOf(opt.value);
	if (idx > -1) val.splice(idx, 1);
	dataValue.value = val;
}

async function setInitialData() {
	const opts = Array.isArray(props.options) ? props.options : [];
	// add logic for api and data selection
	const convert = (x: any) => {
		const text = typeof x === "string" ? x : x[props.keyText];
		const value = typeof x === "string" ? x : x[props.keyValue];
		return { text, value };
	};

	ds.options = opts.map((x: any) => convert(x));
}

const getClasses = computed(() => {
	const cls = [];
	if (props.size === "xs") cls.push("input-xs");
	if (props.size === "sm") cls.push("input-sm");
	if (props.size === "lg") cls.push("input-lg");

	if (show.value) cls.push("border-primary ring-1 ring-primary");

	return cls.join(" ");
});

const multiClass = computed(() => {
	const cls = ["h-auto"];
	if (props.size === "xs") cls.push("min-h-[1.5rem]");
	else if (props.size === "sm") cls.push("min-h-[2rem]");
	else if (props.size === "lg") cls.push("min-h-[3rem]");
	else cls.push("min-h-[2.5rem]");

	if (show.value) cls.push("border-primary ring-1 ring-primary");
	return cls.join(" ");
});

const dataValue = useVModel(props, "modelValue");
watch(() => props.options, setInitialData);
setInitialData();
</script>
