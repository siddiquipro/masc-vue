import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import mascPlugin from "./src/tailwind/masc-plugin";

const config = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, mascPlugin],
} satisfies Config;

export default config;
