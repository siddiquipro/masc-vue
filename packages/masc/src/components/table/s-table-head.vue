<template>
	<th @click="onSortClick">
		{{ props.label }}
		<div class="inline-flex" v-if="props.sort"><SIcon v-if="asc" icon="icon-park:up" /> <SIcon v-else icon="icon-park:down" /></div>
	</th>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SIcon } from "../icon/index";

//const props = defineProps(["label", "sort"]);

const emits = defineEmits(["onSort"]);
const asc = ref(false);

const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	sort: {
		type: Boolean,
		default: false,
	},
});
function onSortClick() {
	asc.value = !asc.value;
	emits("onSort");
}
</script>
