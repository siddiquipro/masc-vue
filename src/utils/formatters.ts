import { useDateFormat } from "@vueuse/core";

export function formatBoolean(value: any, noText = "No") {
  if (value && value !== 0) {
    return "Yes";
  } else {
    return noText;
  }
}

export function formatDate(value: string | Date, format = "MMM D, YYYY", defValue = "") {
  if (value && value !== "00000000") {
    const formatted = useDateFormat(value, format);
    return formatted.value;
  } else {
    return defValue;
  }
}
