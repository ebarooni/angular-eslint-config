// @ts-check

import angular from "angular-eslint";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * @param {...import("typescript-eslint").InfiniteDepthConfigWithExtends} customConfigs
 */
function defineEslintConfig(...customConfigs) {
  return tseslint.config(
    {
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        ...angular.configs.tsRecommended,
        prettier,
      ],
      files: ["**/*.ts"],
      processor: angular.processInlineTemplates,
    },
    {
      extends: [
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
      ],
      files: ["**/*.html"],
    },
    ...customConfigs,
  );
}

export default defineEslintConfig;
