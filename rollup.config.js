import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import sourceMaps from "rollup-plugin-sourcemaps";
import { minify } from "uglify-es";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

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
      extract: true, // extracts to `${basename(dest)}.css`
      //plugins: [autoprefixer, clean],
      writeDefinitions: true
      // postcssModulesOptions: { ... }
    }),
    uglify({}, minify),
    sourceMaps(),
    typescript()
  ]
};
