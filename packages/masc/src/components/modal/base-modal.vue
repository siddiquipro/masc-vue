<template>
	<dialog class="modal" :class="show ? 'modal-open' : ''">
		<Transition v-bind="contentTransition" appear>
			<div class="flex flex-col bg-base-100" v-if="show" :class="modalBoxClass" :style="contentStyle">
				<slot></slot>
			</div>
		</Transition>
		<div class="modal-backdrop bg-black bg-opacity-30 backdrop-blur-sm" @click="onBackDropClick"></div>
	</dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useWait } from "../../utils/helpers";

const emits = defineEmits(["update:modelValue", "closed", "opened"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	position: {
		type: String,
		default: "center",
	},
	width: {
		type: String,
		default: "450px",
	},
	persist: {
		type: Boolean,
		default: false,
	},
});

//ensure component is mounted for transition to work in case of v-if
const show = ref(false);

function onBackDropClick() {
	if (props.persist) return;
	emits("update:modelValue", false);
}

async function startOpen() {
	if (show.value) return;
	emits("update:modelValue", true);
	await useWait(5);
	show.value = true;
	emits("opened");
}

async function startClose() {
	if (!show.value) return;
	show.value = false;
	await useWait(300);
	emits("update:modelValue", false);
	emits("closed");
}

watch(
	() => props.modelValue,
	(val) => (val ? startOpen() : startClose()),
	{ immediate: true },
);

const contentTransition = computed(() => {
	if (props.position === "right") return { name: "s-slide-right" };
	if (props.position === "left") return { name: "s-slide-left" };
	if (props.position === "top") return { name: "s-slide-up" };
	if (props.position === "bottom") return { name: "s-slide-down" };
	return { name: "s-slide-down" };
});

const modalBoxClass = computed(() => {
	if (props.position === "right") return "modal-right";
	if (props.position === "left") return "modal-left";
	if (props.position === "top") return "modal-top";
	if (props.position === "bottom") return "modal-bottom";
	return "modal-box";
});

const contentStyle = computed(() => {
	if (props.position === "top" || props.position === "bottom") return {};

	return { maxWidth: props.width };
});
</script>

<style scoped>
.modal-right,
.modal-left {
	position: fixed;
	top: 0;
	height: 100vh;
	max-height: 100%;
	border-radius: 0;
	height: 100%;
	width: 100%;
}
.modal-right {
	right: 0;
}

.modal-left {
	left: 0;
}

.modal-box {
	padding: 0;
	border-radius: 0.25rem;
	max-height: 100vh;
	width: 100%;
	transform: none;
}

.modal-top,
.modal-bottom {
	place-items: initial;
	position: fixed;
	right: 0;
	left: 0;
	width: 100%;
	border-radius: 0;
}

.modal-top {
	top: 0;
}

.modal-bottom {
	bottom: 0;
}

.s-slide-up-enter-active,
.s-slide-up-leave-active,
.s-slide-down-enter-active,
.s-slide-down-leave-active {
	transition: transform 0.3s ease;
}
.s-slide-down-enter-from,
.s-slide-down-leave-to {
	transform: translateY(100vh) !important;
}
.s-slide-up-enter-from,
.s-slide-up-leave-to {
	transform: translateY(-100vh) !important;
}

.s-slide-right-enter-active,
.s-slide-right-leave-active,
.s-slide-left-enter-active,
.s-slide-left-leave-active {
	transition: transform 0.3s ease;
}
.s-slide-right-enter-from,
.s-slide-right-leave-to {
	transform: translateX(100vw) !important;
}
.s-slide-left-enter-from,
.s-slide-left-leave-to {
	transform: translateX(-100vw) !important;
}
</style>
