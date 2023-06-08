import dayjs from "dayjs";

export function getColClasses(props: any) {
  const cls = [];
  if (props.center) cls.push("text-center");
  if (props.type === "boolean") cls.push("text-center");
  return cls.join(" ");
}

export function toDateFormat(value: string, format = "MMM D, YYYY", defValue = "") {
  if (value && value !== "00000000") {
    return dayjs(value).format(format);
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

export default { getColClasses, toDateFormat, getObjectValue };
