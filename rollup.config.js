import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js", // Entry point of your application
  output: {
    file: "dist/bundle.js", // Output bundle file
    format: "iife", // Output format (immediately-invoked function expression)
    sourcemap: true, // Generate sourcemaps
  },
  plugins: [
    resolve(), // Resolve node modules
    commonjs(), // Convert CommonJS modules to ES6
    babel({
      presets: ["@babel/preset-env"],
      babelHelpers: "bundled",
    }), // Babel for transpilation
    terser(), // Minify the output bundle
  ],
  // Specify external dependencies that should not be bundled
  external: ["react", "react-dom"],
};
