<template>
	<s-card title="Buttons">
		<div class="flex flex-wrap gap-4">
			<SBtn class="btn-xs" icon="mdi:content-save"> X-Small </SBtn>
			<SBtn class="btn-sm" icon="mdi:home"> Small </SBtn>
			<SBtn icon="mdi:menu"> Normal </SBtn>
			<SBtn class="btn-lg" icon="mdi:content-save"> Large </SBtn>
			<SBtn class="btn-primary"> Primary Button </SBtn>
			<SBtn loading class="btn-primary"> Loading </SBtn>
			<SBtn class="btn-primary" href="http://google.com" target="_blank" icon="mdi:link"> Button as Link </SBtn>
		</div>
	</s-card>
</template>

<script setup lang="ts"></script>
