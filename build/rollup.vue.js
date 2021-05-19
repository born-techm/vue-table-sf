import vue from "rollup-plugin-vue";
import node from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
const { terser } = require("rollup-plugin-terser");

export default {
  input: "src/mfeBundle.js",
  output: {
    name: "App",
    format: "esm",
    file: "dist_sfdc/mfeRandomUser.js",
  },
  plugins: [
    node(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    vue(),
    terser(),
  ],
};
