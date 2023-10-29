const overview = {
	text: "Overview",
	collapsed: false,
	items: [
		{ text: "Introduction", link: "/overview/introduction" },
		{ text: "Getting Started", link: "/overview/getting-started" },
		{ text: "Installation", link: "/overview/installation" },
		{ text: "Styling", link: "/overview/styling" },
	],
};

const components = {
	text: "Components",
	collapsed: false,
	items: [
		{ text: "Appbar", link: "/components/appbar" },
		{ text: "Button", link: "/components/button" },
		{ text: "Card", link: "/components/card" },
		{ text: "Dropdown", link: "/components/dropdown" },
		{ text: "Field", link: "/components/field" },
		{ text: "Form", link: "/components/form" },
		{ text: "Icon", link: "/components/icon" },
		{ text: "Modal", link: "/components/modal" },
		{ text: "Pagination", link: "/components/pagination" },
		{ text: "Popper", link: "/components/popper" },
		{ text: "Table", link: "/components/table" },
	],
};

const composables = {
	text: "Composables",
	collapsed: true,
	items: [
		{ text: "useLoading", link: "/composables/useLoading" },
		{ text: "useNotify", link: "/composables/useNotify" },
		{ text: "useWait", link: "/composables/useWait" },
	],
};

const extras = {
	text: "Extras",
	collapsed: true,
	items: [{ text: "Helpers", link: "/extras/helpers" }],
};

export default [overview, components, composables, extras];
