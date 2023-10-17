import { getRegExpression } from "../../utils/helpers";
const emailRegEx = getRegExpression("email");

export function validateData(props: any, value: any) {
  const label = props.label || "This field";
  if (props.readonly) return "";

  // if custom validation passed
  if (typeof props.validator === "function") return props.validator(value, props);

  //required check
  if (!requiredCheck(props, value)) return `${label} is required`;

  //email type check
  if (!emailCheck(props, value)) return `${label} is not a valid email address`;

  //pattern validation
  if (!validatePattern(props, value)) return props.patternMessage || `${label} is not in valid format`;

  return "";
}

//required check
function requiredCheck(props: any, value: any) {
  const { required, type } = props;
  if (!required) return true;
  if (type === "number" && value === 0) return true;
  if (value) return true;
  return false;
}

//pattern validation
function validatePattern(props: any, value: any) {
  const { pattern } = props;
  if (!pattern) return true;
  const regEx = getRegExpression(pattern);
  if (regEx.test(value)) return true;
  return false;
}

function emailCheck(props: any, value: any) {
  const { type } = props;
  if (type !== "email") return true;
  if (emailRegEx.test(value)) return true;
  return false;
}
