export function getRegExpression(type: string) {
	const regExp = {
		email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	} as any;
	return regExp[type];
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

export function genRandom() {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function isDefined(value: any) {
	return typeof value !== "undefined";
}

export function getBooleanProp(value: any) {
	if (typeof value === "boolean") return value;
	if (typeof value === "string") return value.toLowerCase() === "true";
	if (value === "") return true; // in case of without value boolean
	return typeof value === "boolean" ? value : false;
}

export function useWait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
