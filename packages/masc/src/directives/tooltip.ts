import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const tooltip = (el: HTMLElement, binding: any) => {
  if (!binding || !binding.value) return;
  const content = `${binding.value}`;
  const placement = binding.arg || "top-start";
  const allowHTML = true;

  tippy(el, { content, placement, allowHTML });
};

export default tooltip;
