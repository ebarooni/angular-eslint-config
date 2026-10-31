# @ebarooni/angular-eslint-config

Shared ESLint configuration for Angular projects.

## Installation

```bash
npm i -D @ebarooni/angular-eslint-config @eslint/js angular-eslint eslint eslint-config-prettier typescript typescript-eslint
```

## Compatibility

Supported versions: angular-eslint 22, ESLint 10, @eslint/js 10, eslint-config-prettier 10, TypeScript 6.0, and typescript-eslint 8.58.

Use 1.x for Angular 18-21 / TypeScript 5.

## Setup

Create `eslint.config.mjs` in the Angular project:

```javascript
import defineEslintConfig from "@ebarooni/angular-eslint-config";

export default defineEslintConfig({
  tsconfigRootDir: import.meta.dirname,
});
```

`defineEslintConfig()` with no arguments also works. The config uses the TypeScript project service. The config ignores `.angular/`, `dist/` and `coverage/`.

Pass extra config objects after the options object.

## Usage

```bash
npx eslint
npx eslint --fix
```

## Migration to 2.0.0

2.0.0 uses ESLint 10. It does not support ESLint 9.

2.0.0 changes the call.

Old call:

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

New call:

```javascript
import defineEslintConfig from "@ebarooni/angular-eslint-config";

export default defineEslintConfig({
  tsconfigRootDir: import.meta.dirname,
});
```

The old array call throws. Pass an options object.

Delete `tsconfig.eslint.json` when no other file uses it.

2.0.0 also enables these rules. They report errors in existing code:

- `@angular-eslint/prefer-on-push-component-change-detection` with `allowExplicitOnPush: false`. An explicit `ChangeDetectionStrategy.OnPush` is an error. The rule can remove it.
- `@angular-eslint/no-uncalled-signals`
- `@angular-eslint/prefer-signals`
- `@angular-eslint/prefer-output-readonly`
- `@angular-eslint/template/prefer-ngsrc`
- `@angular-eslint/template/no-duplicate-attributes`
- `@angular-eslint/template/button-has-type`

This package is ESM only. It does not ship a CommonJS build. Use `import`. `require()` returns a module object, not the function.
