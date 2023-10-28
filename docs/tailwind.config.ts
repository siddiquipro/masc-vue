import daisyui from "daisyui";
import { mascPlugin } from "masc-vue";

export default {
  content: [".vitepress/**/*.{js,ts,vue}", "./docs/**/*.md", "./node_modules/masc-vue/**/*.js"],
  plugins: [daisyui, mascPlugin],
};
