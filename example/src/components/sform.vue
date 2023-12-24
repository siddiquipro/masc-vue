<template>
	<SCard title="Form" class="relative">
		<sForm class="grid gap-3" :data="ds.obj" v-slot="{ clearError }" @submit="onSubmit">
			<div v-for="col in config.columns">
				<sField
					:label="col.label"
					:type="col.type"
					:help="col.help"
					:prop="col.field"
					:options="col.opts"
					:required="col.required"
					v-model="ds.obj[col.field]"
					:multiple="col.multiple"
					clearable
					@update="onChange(ds.obj[col.field])"
				/>
			</div>

			<div class="flex gap-4 mt-4">
				<s-btn type="submit" class="px-10 btn-primary">Submit</s-btn>
				<s-btn type="button" class="px-10 btn-ghost" @click="clearError()">Clear</s-btn>
			</div>
		</sForm>
	</SCard>
</template>

<script lang="ts" setup>
import { useNotify } from "masc-vue";

import { reactive } from "vue";

const notify = useNotify();
const ds: any = reactive({
	obj: {
		checkbox: [],
	},
});

const onChange = (val: any) => {
	console.log("onChange", val);
};

const items = [
	{ text: "Yes", value: "yes" },
	{ text: "No", value: "no" },
	{ text: "May Be", value: "maybe" },
];

for (let i = 0; i < 50; i++) {
	items.push({ text: `Option ${i}`, value: `item-${i}` });
}

const config = {
	columns: [
		{
			field: "combobox",
			label: "Select an option multiples",
			required: true,
			type: "combobox",
			multiple: true,
			opts: items,
		},
		{
			field: "combobox2",
			label: "Select single option",
			required: true,
			type: "combobox",
			opts: items,
		},
		{
			field: "select",
			label: "Are you sure?",
			required: true,
			type: "select",
			opts: items,
		},
		{
			field: "texta",
			help: "Please provide something useful",
			label: "Your Name",
			required: true,
			type: "text",
		},
		{
			field: "email",
			help: "Please provide your email address",
			label: "Your Email ",
			required: true,
			type: "email",
		},
		// {
		//   field: "search",
		//   label: "This is label for type SEARCH",
		//   type: "search",
		// },
		{
			field: "textareab",
			label: "This is label for type TEXTAREA",
			type: "textarea",
		},

		{
			field: "dated",
			label: "Your date of birth",
			type: "date",
		},

		{
			field: "radioc",
			label: "Confirm your choice",
			type: "radio",
			opts: [
				{ text: "Yes", value: "yes" },
				{ text: "No", value: "no" },
			],
		},
		{
			field: "checkbox",
			label: "Confirm your choices",
			type: "checkbox",
			opts: [
				{ text: "Yes", value: "yes" },
				{ text: "No", value: "no" },
				{ text: "May Be", value: "maybe" },
			],
		},

		{
			field: "file",
			label: "Choose File",
			type: "file",
		},
	],
};

function onSubmit(data: any) {
	console.log("Form submitted", data);
	notify.success("Form submitted");
}

// ordering of cols
// horizontal
// vertical
// grouped
</script>
