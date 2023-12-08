<template>
	<BaseModal v-model="ds.open" :position="props.position" :width="width" @closed="onClosed" @opened="onOpened" :persist="props.persist">
		<div class="flex items-center justify-between pl-4 pr-2 py-2 border-b" v-if="props.title">
			<div class="text-lg flex-1 font-semibold">{{ title }}</div>
			<a class="btn btn-ghost btn-circle btn-sm" @click="onCancel" v-if="props.closeIcon">
				<Icon icon="mdi:close" width="20" />
			</a>
		</div>
		<slot>
			<div class="min-h-[6rem] grid items-center">
				<div class="p-4" v-html="props.msg"></div>
			</div>
		</slot>
		<div class="flex justify-between items-center px-4 py-2 gap-4 border-t" v-if="props.footer">
			<div>
				<sBtn class="btn-ghost px-6" v-if="props.cancelBtn" @click="onCancel">{{ props.cancelBtnText }}</sBtn>
			</div>
			<sBtn class="btn-primary px-10" @click="handleSuccess">{{ props.confirmBtnText }}</sBtn>
		</div>
	</BaseModal>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive, watch } from "vue";
import sBtn from "../button/s-btn.vue";
import BaseModal from "./base-modal.vue";

const emits = defineEmits(["update:modelValue", "close", "closed", "open", "opened", "message"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: true,
	},
	persist: {
		type: Boolean,
		default: false,
	},

	position: {
		type: String,
		default: "auto",
	},

	cancelBtn: {
		type: Boolean,
		default: true,
	},

	cancelBtnText: {
		type: String,
		default: "Cancel",
	},

	confirmBtnText: {
		type: String,
		default: "Ok",
	},

	onConfirm: {
		type: Function,
		default: null,
	},

	loading: {
		type: Boolean,
		default: false,
	},

	closeIcon: {
		type: Boolean,
		default: true,
	},

	msg: {
		type: String,
		default: "",
	},

	title: {
		type: String,
		default: "",
	},

	width: {
		type: String,
		default: "450px",
	},

	footer: {
		type: Boolean,
		default: false,
	},
});

const ds = reactive({ open: props.modelValue, confirm: false });

function onCancel() {
	ds.confirm = false;
	updateOpen(false);
}

async function handleSuccess() {
	if (typeof props.onConfirm === "function") return await props.onConfirm();
	ds.confirm = true;
	updateOpen(false);
}

function updateOpen(val: boolean) {
	ds.open = val;
}

function onClosed() {
	emits("close", ds.confirm);
	emits("closed");
	emits("update:modelValue", false);
}

function onOpened() {
	emits("open");
	emits("opened");
}

watch(
	() => props.modelValue,
	(val) => (val ? updateOpen(true) : updateOpen(false)),
);
</script>
