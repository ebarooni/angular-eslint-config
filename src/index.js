// @ts-check

import angular from "angular-eslint";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * Shared flat config for Angular projects.
 *
 * Rule sets come from the installed presets. angular-eslint 22 adds
 * `@angular-eslint/prefer-on-push-component-change-detection` to `tsRecommended`
 * and removes `no-conflicting-lifecycle`. That OnPush rule reports
 * `ChangeDetectionStrategy.Eager` and deprecated `Default` only, so omitted
 * change detection and explicit OnPush both stay valid.
 *
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
