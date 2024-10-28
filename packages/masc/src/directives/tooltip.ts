import { Instance, Placement, createPopper } from "@popperjs/core";
import { useEventListener } from "@vueuse/core";

export default function tooltip(el: HTMLElement, binding: any) {
	if (!binding || !binding.value) return;
	const content = `${binding.value}`;
	const options = el.dataset || {};
	const keepOpen = options.open !== undefined;

	// get the placement from the argument or the dataset or fallback to default (top)
	const placement = (options.placement || "top") as Placement;

	// get the class from the argument or the dataset or fallback to default (bg-black text-white)
	const baseClasses = "text-sm p-2 rounded shadow-lg max-w-sm bg-black text-white";
	const classList = ["s-popper", options.class || baseClasses].join(" ");

	// Create a tooltip element
	const tooltipEL = document.createElement("div");
	tooltipEL.className = classList;
	tooltipEL.innerHTML = content + `<div class="s-arrow" data-popper-arrow></div>`;

	// get the instance of the popper
	let popperInstnace: Instance | null = null;
	const parentEL = document.body; //to append the tooltip to

	function showPopper() {
		// Append the tooltip to the body
		parentEL.appendChild(tooltipEL);

		//create popper
		popperInstnace = createPopper(el, tooltipEL, { placement, modifiers: [{ name: "offset", options: { offset: [0, 10] } }] });
	}

	function removePopper() {
		//destroy popper
		popperInstnace?.destroy();

		// Remove the tooltip from the body
		parentEL.removeChild(tooltipEL);
	}

	if (keepOpen) return showPopper();

	// Set up event listeners to show and hide the tooltip
	useEventListener(el, "mouseenter", showPopper);
	useEventListener(el, "mouseleave", removePopper);
	useEventListener(el, "mousedown", removePopper);
}
