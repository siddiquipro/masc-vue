<template>
	<s-card title="Dropdown">
		<div class="p-4 bg-base-300 w-96 overflow-hidden">
			<s-dropdown class="w-56">
				<s-btn class="btn-primary w-full">DropDown Button</s-btn>

				<template v-slot:content>
					<ul class="menu p-2">
						<li v-for="item in 10">
							<a @click="onClick(item)">Item {{ item }}</a>
						</li>
					</ul>
				</template>
			</s-dropdown>
		</div>
	</s-card>
</template>

<script setup lang="ts">
function onClick(item: number) {
	console.log(`Item ${item} clicked`);
}
</script>
