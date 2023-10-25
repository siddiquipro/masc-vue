<template>
	<div class="s-arrow" data-popper-arrow></div>
</template>

<script setup lang="ts"></script>

<style>
.s-arrow,
.s-arrow::before {
	position: absolute;
	width: 10px;
	height: 10px;
	background: inherit;
	z-index: -1;
}

.s-arrow {
	visibility: hidden;
}

.s-arrow::before {
	visibility: visible;
	content: "";
	transform: rotate(45deg);
}

.s-popper[data-popper-placement^="top"] > .s-arrow {
	bottom: -5px;
}

.s-popper[data-popper-placement^="bottom"] > .s-arrow {
	top: -5px;
}

.s-popper[data-popper-placement^="left"] > .s-arrow {
	right: -5px;
}

.s-popper[data-popper-placement^="right"] > .s-arrow {
	left: -5px;
}
</style>
