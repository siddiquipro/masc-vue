<template>
	<div class="container mx-auto grid gap-6 py-10">
		<div class="text-xl font-semibold">MASC Vue Component</div>

		<s-text-field label="Text" />

		<Test />

		<tooltip />

		<buttons />
		<alert />

		<dropdown />
		<stable />

		<smodal />
		<sconfirm />

		<sloading />
		<sicon />

		<sform />
	</div>
</template>

<script setup lang="ts">
import sform from "./components/sform.vue";
import buttons from "./components/buttons.vue";
import alert from "./components/alert.vue";
import dropdown from "./components/dropdown.vue";
import stable from "./components/stable.vue";

import smodal from "./components/smodal.vue";
import sloading from "./components/sloading.vue";
import sicon from "./components/sicon.vue";
import sconfirm from "./components/sconfirm.vue";
import tooltip from "./components/tooltip.vue";
import Test from "./components/test.vue";
</script>
