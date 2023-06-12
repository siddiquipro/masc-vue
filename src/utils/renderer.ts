import { h, render } from "vue";

export function removeElement(el: any) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else {
    el.parentNode?.removeChild(el);
  }
}

export function createComponent(component: any, props: any, parentContainer: any = null, slots = {}) {
  const vNode = h(component, props, slots);
  const container = document.createElement("div");

  if (!parentContainer) parentContainer = document.body;

  parentContainer.appendChild(container);
  render(vNode, container);
  return {
    instance: vNode.component,
    remove: () => {
      removeElement(container);
    },
  };
}

export function hasWindow() {
  return typeof window !== "undefined";
}

export const MayBeHTMLElement = hasWindow() ? window.HTMLElement : Object;
