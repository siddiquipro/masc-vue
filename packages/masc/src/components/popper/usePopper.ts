import { toRefs, watch, nextTick, onBeforeUnmount, reactive } from "vue";
import { createPopper, preventOverflow, flip, offset, arrow, Instance } from "@popperjs/core";

const toInt = (x: any) => parseInt(x, 10);

interface IOptions {
	arrowPadding: any;
	emit: any;
	locked: any;
	offsetDistance: any;
	offsetSkid: any;
	placement: any;
	popperNode: any;
	triggerNode: any;
}

export function usePopper({ arrowPadding, emit, locked, offsetDistance, offsetSkid, placement, popperNode, triggerNode }: IOptions) {
	const state = reactive({
		isOpen: false,
		popperInstance: null as Instance | null,
	});

	// Enable or disable event listeners to optimize performance.
	const setPopperEventListeners = (enabled: boolean) => {
		state.popperInstance?.setOptions((options: any) => ({
			...options,
			modifiers: [...options.modifiers, { name: "eventListeners", enabled }],
		}));
	};

	const enablePopperEventListeners = () => setPopperEventListeners(true);
	const disablePopperEventListeners = () => setPopperEventListeners(false);

	const close = () => {
		if (!state.isOpen) return;
		state.isOpen = false;
		emit("close:popper");
	};

	const open = () => {
		if (state.isOpen) return;
		state.isOpen = true;
		emit("open:popper");
	};

	// When isOpen or placement change
	watch([() => state.isOpen, placement], async ([isOpen]) => {
		if (isOpen) {
			await initializePopper();
			enablePopperEventListeners();
		} else {
			disablePopperEventListeners();
		}
	});

	const initializePopper = async () => {
		await nextTick();

		const actTriggerNode = triggerNode.value.children[0];

		//match the width of the trigger element and the popper element
		popperNode.value.style.width = `${actTriggerNode.clientWidth}px`;

		state.popperInstance = createPopper(actTriggerNode, popperNode.value, {
			placement: placement.value,
			strategy: "fixed",
			modifiers: [
				preventOverflow,
				flip,
				{
					name: "flip",
					enabled: !locked.value,
				},
				arrow,
				{
					name: "arrow",
					options: {
						padding: toInt(arrowPadding.value),
					},
				},
				offset,
				{
					name: "offset",
					options: {
						offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)],
					},
				},
			],
		});

		// Update its position
		state.popperInstance.update();
	};

	onBeforeUnmount(() => {
		state.popperInstance?.destroy();
	});

	return {
		...toRefs(state),
		open,
		close,
	};
}
