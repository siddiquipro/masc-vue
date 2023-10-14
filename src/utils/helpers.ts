import { useDateFormat } from "@vueuse/core";

export function getRegExpression(type: string) {
  const regExp = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  } as any;
  return regExp[type];
}

export function getColClasses(props: any) {
  const cls = [];
  if (props.center) cls.push("text-center");
  if (props.type === "boolean") cls.push("text-center");
  return cls.join(" ");
}

export function toDateFormat(value: string, format = "MMM D, YYYY", defValue = "") {
  if (value && value !== "00000000") {
    const formatted = useDateFormat(value, format);
    console.log(formatted);
    return formatted.value;
  } else {
    return defValue;
  }
}

export function getObjectValue(obj: any, prop: string) {
  try {
    const nests = prop.split(".");
    for (const item of nests) obj = obj[item];
    return obj;
  } catch (error) {
    return "";
  }
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks whether an element is visible
 */
export function isVisible(element: HTMLElement) {
  if (!(element instanceof Element)) {
    throw Error("You must provide a DOM element.");
  }

  return (
    !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) &&
    window.getComputedStyle(element).visibility !== "hidden" &&
    window.getComputedStyle(element).display !== "none"
  );
}

/**
 * Return the previous/next element of a list.
 */
export function getNextActiveElement(list: HTMLElement[], activeElement: HTMLElement, shouldGetNext: boolean, isCycleAllowed: boolean) {
  const listLength = list.length;
  let index = list.indexOf(activeElement);

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }

  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) index = (index + listLength) % listLength;

  return list[Math.max(0, Math.min(index, listLength - 1))];
}

export default { getColClasses, toDateFormat, getObjectValue, isVisible, getNextActiveElement };
