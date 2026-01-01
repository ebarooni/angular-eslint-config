# @ebarooni/angular-eslint-config

Shared ESLint configuration for Angular projects.

## Installation

```bash
npm i -D @ebarooni/angular-eslint-config angular-eslint eslint eslint-config-prettier typescript-eslint
```

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
> `config(...)` from typescript-eslint is deprecated.
>
> Instead `defineConfig(...)` from ESLint core should be used.
>
> [https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated](https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated)
