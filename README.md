# @ebarooni/angular-eslint-config

Shared ESLint configuration for Angular projects.

## Installation

```bash
npm i -D @ebarooni/angular-eslint-config @eslint/js angular-eslint eslint eslint-config-prettier typescript typescript-eslint
```

## Compatibility

Supported versions: angular-eslint 22, ESLint 9, @eslint/js 9, eslint-config-prettier 10, TypeScript 6.0, and typescript-eslint 8.

Version 2.0.0 does not support Angular 18 to 21 or TypeScript 5.

## Setup

1. Create `tsconfig.eslint.json` at the root of the Angular project:

   ```json
   {
     "extends": "./tsconfig.app.json",
     "compilerOptions": {
       "types": ["vitest/globals"]
     },
     "include": ["src/main.ts", "src/**/*.ts", "src/**/*.spec.ts"],
     "exclude": []
   }
   ```

2. Create the ESLint configurations file (`eslint.config.mjs`):

   ```javascript
   import defineEslintConfig from "@ebarooni/angular-eslint-config";

   export default defineEslintConfig([
     {
       languageOptions: {
         parserOptions: {
           project: ["tsconfig.eslint.json"],
           tsconfigRootDir: import.meta.dirname,
         },
       },
     },
   ]);
   ```

## Usage

```bash
npx eslint
npx eslint --fix
```

## Remarks

> [!NOTE]
> `config(...)` from typescript-eslint is deprecated in favor of `defineConfig(...)` from ESLint core (`eslint/config`), which requires ESLint 9.22 or newer.
>
> This package calls `tseslint.config()`. This works on ESLint 9.
>
> [https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated](https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated)
