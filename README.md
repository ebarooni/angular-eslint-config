# @ebarooni/angular-eslint-config

Shared ESLint configuration for Angular projects.

## Installation

```bash
npm i -D @ebarooni/angular-eslint-config @eslint/js angular-eslint eslint eslint-config-prettier typescript typescript-eslint
```

## Compatibility

| Peer                     | Range                 |
| ------------------------ | --------------------- |
| `@eslint/js`             | `^9.0.0 \|\| ^10.0.0` |
| `angular-eslint`         | `>=18.0.0 <23.0.0`    |
| `eslint`                 | `^9.0.0 \|\| ^10.0.0` |
| `eslint-config-prettier` | `^10.0.0`             |
| `typescript`             | `>=4.8.4 <6.1.0`      |
| `typescript-eslint`      | `^8.0.0`              |

Angular 22 projects use `angular-eslint` 22 and TypeScript 6.0.x. TypeScript 6.1 and 7 are outside the range because current `typescript-eslint` 8 does not support them. `eslint` 10 is the current stable line; `eslint` 9 remains supported.

Keep `@eslint/js` on the same major as `eslint`. npm does not enforce that pairing. ESLint 9 already depends on `@eslint/js`, so the peer is present without listing it again. ESLint 10 does not depend on `@eslint/js`, so it has to be a direct devDependency. The install command above installs it for both.

When you move to ESLint 10, Yarn users and users who turn off auto-install-peers must install `@eslint/js`. ESLint 10 does not install it.

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
> This package still calls `tseslint.config()` so the same flat config works on ESLint 9.0 through 10.
>
> [https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated](https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated)
