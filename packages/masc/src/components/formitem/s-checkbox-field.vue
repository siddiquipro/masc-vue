<template>
	<div class="flex gap-4" :class="rows ? 'flex-col' : ''">
		<div v-for="r in options" class="flex gap-2 items-center">
			<label :for="key + r.value" class="cursor-pointer text-sm flex items-center gap-2 w-full">
				<input type="checkbox" v-bind="$attrs" :class="classes" v-model="selValue" :id="key + r.value" :value="r.value" />
				<slot :option="r">
					<div class="w-full" v-html="r.text"></div>
				</slot>
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { useVModel } from "@vueuse/core";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
	modelValue: {
		type: [String, Array, Boolean, Number],
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
		default: true,
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
});

const key = Date.now();
const selValue = useVModel(props, "modelValue", emits);
const options: any = computed(() => (props.options.length > 0 ? props.options : [{ value: props.value, text: props.text }]));

const classes = computed(() => {
	const cls = ["checkbox checkbox-primary"];
	if (props.size == "xs") cls.push("checkbox-xs");
	if (props.size == "sm") cls.push("checkbox-sm");
	if (props.size == "lg") cls.push("checkbox-lg");
	return cls.join(" ");
});
</script>
