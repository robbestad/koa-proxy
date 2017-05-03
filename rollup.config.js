import buble from "rollup-plugin-buble";
import nodeResolve from "rollup-plugin-node-resolve";
const pkg = require("./package.json");
import builtins from "rollup-plugin-node-builtins";

export default {
  entry: "src/index.js",
  plugins: [
    builtins(),
    buble(),
    nodeResolve({
      module: true, // Default: true
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true, // Default: false
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true, // Default: true
      skip: [], // Default: []
      browser: false,
      extensions: [".js"], // Default: ['.js']
      preferBuiltins: false // Default: true
    })
  ],
  targets: [
    {
      dest: pkg.main,
      format: "umd",
      moduleName: pkg.shortname,
      sourceMap: false
    },
    {
      dest: pkg.module,
      format: "cjs",
      moduleName: pkg.shortname,
      sourceMap: false
    }
  ]
};
