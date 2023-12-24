<template>
	<label class="flex items-center cursor-pointer">
		<input
			type="checkbox"
			class="toggle toggle-primary"
			:class="getClasses"
			v-bind="$attrs"
			v-model="selValue"
			:true-value="trueValue"
			:false-value="falseValue"
		/>
		<slot>
			<span class="ml-2 font-semibold" v-html="text"></span>
		</slot>
	</label>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { PropType, computed } from "vue";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
	modelValue: {
		type: [String, Boolean, Number],
		default: "",
	},
	text: {
		type: String,
		default: "",
	},
	trueValue: {
		type: [String, Number, Boolean],
		default: 1,
	},
	falseValue: {
		type: [String, Number, Boolean],
		default: 0,
	},
	size: {
		type: String as PropType<"xs" | "sm" | "lg">,
		default: "",
	},
});

const selValue = useVModel(props, "modelValue", emits);

const getClasses = computed(() => {
	const cls = [];
	if (props.size === "xs") cls.push("toggle-xs");
	if (props.size === "sm") cls.push("toggle-sm");
	if (props.size === "lg") cls.push("toggle-lg");

	return cls.join(" ");
});
</script>
