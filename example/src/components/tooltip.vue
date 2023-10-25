<template>
	<div class="p-4 bg-base-300 overflow-hidden">
		<div class="tooltip mb-4" data-tip="hello World">
			<button class="btn">Hover me</button>
		</div>

		<s-btn class="my-4 btn-primary w-full" v-tooltip="text" data-placement="bottom">Directive element</s-btn>

		<div class="relative">
			<s-popper hover arrow class="w-full z-10" open>
				<s-btn class="btn-primary w-full">Popper element</s-btn>
				<template #content>
					<div class="bg-base-100 shadow-xl rounded">
						<div class="max-h-80 overflow-y-auto">
							<ul class="menu">
								<li v-for="i in 20">
									<a>Item {{ i }}</a>
								</li>
							</ul>
						</div>
					</div>
				</template>
			</s-popper>
		</div>
	</div>
</template>

<script setup lang="ts">
const text = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.`;
</script>
