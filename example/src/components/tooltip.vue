<template>
	<s-card class="p-4 overflow-hidden">
		<s-btn class="my-4 btn-primary w-full" v-tooltip="text" data-placement="bottom">Directive element</s-btn>

		<div class="relative">
			<s-popper open offsetDistance="5" class="w-full">
				<s-btn class="btn-primary w-full" role="tab">Popper element</s-btn>
				<template #content>
					<div class="bg-base-100 shadow-2xl rounded border">
						<div class="p-2 border-b relative">
							<s-field size="sm" type="search" v-model="search" />
						</div>
						<div class="max-h-80 overflow-y-auto">
							<ul>
								<li v-for="item in items" class="border-b px-4 py-2 text-[0.9em] cursor-pointer hover:bg-base-200">
									<a tabindex="0">{{ item }}</a>
								</li>
							</ul>
						</div>
					</div>
				</template>
			</s-popper>
		</div>
	</s-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.`;

const items: string[] = [];
for (let i = 0; i < 20; i++) {
	if (i == 1) items.push(`Item ${i}  ` + text);
	else items.push(`Item ${i}`);
}

const search = ref("");
</script>
