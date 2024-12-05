<template>
	<div class="flex flex-wrap gap-4" :class="rows ? 'flex-col' : ''">
		<div v-for="r in options" class="flex gap-6 items-center flex-wrap">
			<div class="block">
				<label class="cursor-pointer flex items-center gap-2 w-full">
					<input type="radio" v-bind="$attrs" :name="name" :value="r.value" class="radio radio-primary" :class="getClasses" v-model="selValue" />
					<slot :row="r">
						<div class="w-full" v-html="r.text"></div>
					</slot>
				</label>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { useVModel } from "@vueuse/core";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
	modelValue: {
		type: [String, Boolean, Number],
	},
	text: {
		type: String,
		default: "",
	},
	value: {
		type: [String, Boolean, Number],
	},
	options: {
		type: Array,
		default: [],
	},
	rows: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
	name: {
		type: String,
		default: "",
	},
});

const selValue = useVModel(props, "modelValue", emits);
const options: any = computed(() => (props.options.length > 0 ? props.options : [{ value: props.value, text: props.text }]));

const getClasses = computed(() => {
	const cls = [];
	if (props.size === "xs") cls.push("radio-xs");
	if (props.size === "sm") cls.push("radio-sm");
	if (props.size === "lg") cls.push("radio-lg");

	return cls.join(" ");
});
</script>
