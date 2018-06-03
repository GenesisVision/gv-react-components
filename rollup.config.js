import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import camelcase from "camelcase";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
    name: "nkrivous-common",
    sourcemap: true
  },
  external: ["react", "prop-types"],
  plugins: [
    // copy({
    //   "./media/fonts": "dist/fonts",
    //   "./media/css": "dist/css",
    //   "./media/img": "dist/img"
    // }),
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
        console.log(name, camelcase(name));
        return camelcase(name);
      },
      extract: true,

      writeDefinitions: true
    }),
    uglify({}, minify),
    typescript()
  ]
};
