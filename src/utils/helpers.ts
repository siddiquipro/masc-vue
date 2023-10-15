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

export default { getColClasses, toDateFormat, getObjectValue };
