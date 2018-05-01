import copy from "rollup-plugin-copy";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/js/index.js",
    format: "umd",
    name: "nkrivous-common",
    sourcemap: true
  },
  plugins: [
    copy({
      "./media/fonts": "dist/fonts",
      "./media/css": "dist/css",
      "./media/img": "dist/img"
    }),
    resolve(),
    commonjs(),
    uglify({}, minify)
  ]
};
