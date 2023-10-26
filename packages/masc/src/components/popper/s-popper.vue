<template>
	<div :style="interactiveStyle" @mouseleave="hover && closePopper()" ref="popperContainerNode">
		<div ref="triggerNode" @mouseover="hover && openPopper()" @click="togglePopper" @focus="openPopper" @keyup.esc="closePopper">
			<!-- The default slot to trigger the popper  -->
			<slot />
		</div>
		<Transition name="fade">
			<div @click="!interactive && closePopper()" v-if="shouldShowPopper" class="s-popper z-10" :class="props.class" ref="popperNode">
				<slot name="content" :close="close" :isOpen="modifiedIsOpen">
					{{ content }}
				</slot>
				<s-arrow v-if="arrow" />
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { useDebounceFn, onClickOutside } from "@vueuse/core";
import { ref, computed, defineProps, toRefs, watch, watchEffect } from "vue";
import { usePopper } from "./usePopper";
import SArrow from "./s-arrow.vue";

const emit = defineEmits(["open:popper", "close:popper"]);

const props = defineProps({
	class: {
		type: String,
		default: "",
	},
	/**
	 * Preferred placement (the "auto" placements will choose the side with most space.)
	 */
	placement: {
		type: String,
		default: "bottom",
	},

	/**
	 * Offset in pixels along the trigger element
	 */
	offsetSkid: {
		type: String,
		default: "0",
	},
	/**
	 * Offset in pixels away from the trigger element
	 */
	offsetDistance: {
		type: String,
		default: "10",
	},
	/**
	 * Trigger the popper on hover
	 */
	hover: {
		type: Boolean,
		default: false,
	},
	/**
	 * Manually open/close the Popper, other events are ignored if this prop is set
	 */
	show: {
		type: Boolean,
		default: null,
	},
	/**
	 * Disables the Popper. If it was already open, it will be closed.
	 */
	disabled: {
		type: Boolean,
		default: false,
	},
	/**
	 * Open the Popper after a delay (ms).
	 */
	openDelay: {
		type: Number,
		default: 0,
	},
	/**
	 * Close the Popper after a delay (ms).
	 */
	closeDelay: {
		type: Number,
		default: 0,
	},
	/**
	 * The z-index of the Popper.
	 */
	zIndex: {
		type: [Number, String],
		default: 9999,
	},
	/**
	 * Display an arrow on the popper
	 */
	arrow: {
		type: Boolean,
		default: false,
	},
	/**
	 * Stop arrow from reaching the edge of the popper
	 */
	arrowPadding: {
		type: String,
		default: "0",
	},
	/**
	 * If the Popper should be interactive, it will close when clicked/hovered if false
	 */
	interactive: {
		type: Boolean,
		default: true,
	},
	/**
	 * Lock the Popper into place, it will not flip dynamically when it runs out of space if true
	 */
	locked: {
		type: Boolean,
		default: false,
	},
	/**
	 * If the content is just a simple string, it can be passed in as a prop
	 */
	content: {
		type: String,
		default: null,
	},
});

const popperContainerNode = ref(null);
const popperNode = ref(null);
const triggerNode = ref(null);
const modifiedIsOpen = ref(false);

const { arrowPadding, closeDelay, content, disabled, interactive, locked, offsetDistance, offsetSkid, openDelay, placement, show } = toRefs(props);

const { isOpen, open, close } = usePopper({
	arrowPadding,
	emit,
	locked,
	offsetDistance,
	offsetSkid,
	placement,
	popperNode,
	triggerNode,
});

const manualMode = computed(() => show.value !== null);
const invalid = computed(() => disabled.value);
const shouldShowPopper = computed(() => isOpen.value && !invalid.value);
const enableClickAway = computed(() => !manualMode.value);

// Add an invisible border to keep the Popper open when hovering from the trigger into it
const interactiveStyle = computed(() => {
	if (!interactive.value) return "";
	return `border: ${offsetDistance.value}px solid transparent; margin: -${offsetDistance.value}px;`;
});

const openPopperDebounce = useDebounceFn(open, openDelay.value);
const closePopperDebounce = useDebounceFn(close, closeDelay.value);

const openPopper = async () => {
	if (invalid.value || manualMode.value) {
		return;
	}

	openPopperDebounce();
};

const closePopper = async () => {
	if (manualMode.value) {
		return;
	}

	closePopperDebounce();
};

const togglePopper = () => {
	isOpen.value ? closePopper() : openPopper();
};

/**
 * If Popper is open, we automatically close it if it becomes
 * disabled or without content.
 */
watch([disabled], ([disabled]) => {
	if (isOpen.value && disabled) {
		close();
	}
});

/**
 * In order to eliminate flickering or visibly empty Poppers due to
 * the transition when using the isOpen slot property, we need to return a
 * separate debounced value based on isOpen.
 */
watch(isOpen, (isOpen) => {
	if (isOpen) {
		modifiedIsOpen.value = true;
	} else {
		useDebounceFn(() => {
			modifiedIsOpen.value = false;
		}, 200);
	}
});

/**
 * Watch for manual mode.
 */
watchEffect(() => {
	if (manualMode.value) {
		show.value ? openPopperDebounce() : closePopperDebounce();
	}
});

/**
 * Use click away if it should be enabled.
 */
watchEffect(() => {
	if (enableClickAway.value) {
		onClickOutside(popperContainerNode, closePopper);
	}
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
