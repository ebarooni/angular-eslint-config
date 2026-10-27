// @ts-check

import angular from "angular-eslint";
import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * @typedef {object} DefineEslintConfigOptions
 * @property {string} [tsconfigRootDir] Directory that contains the TypeScript project.
 * @property {string[]} [ignores] Extra ignore patterns.
 */

/**
 * Build the shared ESLint config for an Angular project.
 * A call with no arguments uses the TypeScript project service.
 * Pass extra config objects after the options object.
 *
 * Angular 22 uses OnPush when a component omits `changeDetection`.
 * `allowExplicitOnPush: false` reports a redundant `OnPush` value.
 *
 * An array argument throws. Pass an options object.
 *
 * @param {DefineEslintConfigOptions} [options]
 * @param {...import("eslint").Linter.Config} overrides
 * @returns {import("eslint").Linter.Config[]}
 */
function defineEslintConfig(options = {}, ...overrides) {
  if (Array.isArray(options)) {
    throw new TypeError(
      "defineEslintConfig() takes an options object, not an array. Put extra config objects after the options object.",
    );
  }

  /** @type {import("eslint").Linter.ParserOptions} */
  const parserOptions = {
    projectService: true,
  };

  if (options.tsconfigRootDir) {
    parserOptions.tsconfigRootDir = options.tsconfigRootDir;
  }

  return defineConfig(
    globalIgnores(
      [".angular/", "dist/", "coverage/", ...(options.ignores ?? [])],
      "@ebarooni/angular-eslint-config/ignores",
    ),
    {
      files: ["**/*.ts"],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        ...angular.configs.tsRecommended,
        prettier,
      ],
      languageOptions: {
        parserOptions,
      },
      processor: angular.processInlineTemplates,
      rules: {
        "@angular-eslint/prefer-on-push-component-change-detection": [
          "error",
          { allowExplicitOnPush: false },
        ],
        "@angular-eslint/no-uncalled-signals": "error",
        "@angular-eslint/prefer-signals": "error",
        "@angular-eslint/prefer-output-readonly": "error",
      },
    },
    {
      files: ["**/*.html"],
      extends: [
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
      ],
      rules: {
        "@angular-eslint/template/button-has-type": "error",
        "@angular-eslint/template/no-duplicate-attributes": "error",
        "@angular-eslint/template/prefer-ngsrc": "error",
      },
    },
    ...overrides,
  );
}

export default defineEslintConfig;
