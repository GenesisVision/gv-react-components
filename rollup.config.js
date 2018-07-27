import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";
import camelcase from "camelcase";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
    sourcemap: true
  },
  external: ["react", "prop-types", "classnames"],
  plugins: [
    url({ limit: 100 * 1024 }),
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/react/index.js": [
          "Component",
          "PropTypes",
          "createElement"
        ]
      }
    }),
    postcss({
      extensions: [".scss"],
      modules: {
        generateScopedName: "[local]"
      },
      namedExports(name) {
        return camelcase(name);
      },
      extract: true,
      writeDefinitions: true
    }),
    uglify({}, minify),
    typescript()
  ]
};
