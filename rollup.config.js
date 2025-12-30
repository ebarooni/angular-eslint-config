export default {
  external: [
    "@eslint/js",
    "angular-eslint",
    "eslint",
    "eslint-config-prettier",
    "typescript",
    "typescript-eslint",
  ],
  input: "src/index.js",
  output: {
    file: "dist/index.cjs",
    format: "cjs",
    generatedCode: {
      constBindings: true,
      objectShorthand: true,
    },
  },
};
