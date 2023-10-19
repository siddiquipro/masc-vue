import plugin from "tailwindcss/plugin";

const mascPlugin = plugin(function ({ addBase, addComponents }) {
  //1. add css variable definitions
  addBase({
    ":root": {
      "--b1": "0 0% 100%",
      "--b2": "0 0% 90%",
      "--b3": "0 0% 80%",
      "--bc": "0 0% 20%",
      "--p": "256.2 60% 58.8%",
      "--pf": "256.1 59.8% 51.2%",
      "--pc": "0 0% 100%",
      "--n": "0 0% 87%",
      "--nf": "0 0% 75%",
      "--nc": "0 0% 25%",
      "--su": "122 39% 49%",
      "--suc": "0 0% 100%",
      "--er": "0 100% 60%",
      "--erc": "0 0% 100%",
      "--wa": "33.5 100% 49.2%",
      "--wac": "0 0% 100%",
      "--in": "207.1 60.8% 52.9%",
      "--inc": "0 0% 100%",
      "--rounded-box": "0.25rem",
      "--rounded-btn": "0.25rem",
      "--rounded-badge": "0.25rem",
      "--animation-btn": "0.25s",
      "--animation-input": "0.2s",
      "--btn-text-case": "auto",
      "--btn-focus-scale": "0.95",
      "--border-btn": "initial",
      "--tab-border": "initial",
      "--tab-radius": "initial",
    },
  });

  //2. extend daisyui classes
  addComponents({
    ".btn,.input,.select": { "@apply min-h-[initial] h-10": {} },
    ".btn-circle": { "@apply w-10 h-10": {} },
    ".input,.select,.textarea": {
      "@apply px-3 focus:outline-none focus-visible:outline-none focus-within:outline-none ring-1 ring-base-300 focus:ring-primary": {},
    },
    ".btn-xs,.input-xs,.select-xs": { "@apply h-6": {} },
    ".btn-circle.btn-xs": { "@apply w-6 h-6": {} },
    ".btn-sm,.input-sm,.select-sm": { "@apply h-8": {} },
    ".btn-circle.btn-sm": { "@apply w-8 h-8": {} },
    ".btn-lg": { "@apply h-14": {} },
    ".btn-circle .btn-lg": { "@apply w-14 h-14": {} },
    ".dropdown-content": { "@apply min-w-full z-10": {} },
    ".dropdown-menu": {
      "@apply bg-base-100 mt-2 divide-y rounded-md  shadow-2xl ring-1 ring-black ring-opacity-10 focus:outline-none": {},
    },
  });
});

export default mascPlugin;
