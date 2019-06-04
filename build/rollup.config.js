import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support
import image from "rollup-plugin-image";
import postcss from "rollup-plugin-postcss";
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: "src/index.js", // Path relative to package.json
  output: {
    name: "onsetRunner",
    exports: "named"
  },
  plugins: [
    postcss({
      extensions: [".css"]
    }),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble(),
    image(),
    commonjs()
  ]
};
