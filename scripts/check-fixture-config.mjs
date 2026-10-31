// The fixture calls defineEslintConfig({ tsconfigRootDir }).
// A 1.0 dist spreads that object into the config array.
// ESLint 10 then reports an unnamed config with an unexpected key.
// This check fails that case before the fixture lint, and it fails a 2.0
// regression that puts the key in the wrong place.

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const configPath = path.join(root, "test/eslint.config.mjs");
const packageUrl = import.meta.resolve(
  "@ebarooni/angular-eslint-config",
  pathToFileURL(configPath),
);
const packagePath = fileURLToPath(packageUrl);
const packageSource = readFileSync(packagePath, "utf8");

if (packageSource.includes("...customConfigs")) {
  throw new Error(
    `${packagePath} is the 1.0 build. It puts the options object on the ESLint config. Run npm run build.`,
  );
}

const { default: configs } = await import(pathToFileURL(configPath).href);

if (!Array.isArray(configs)) {
  throw new Error("The fixture config must be an array.");
}

for (const [index, config] of configs.entries()) {
  if (
    config &&
    Object.prototype.hasOwnProperty.call(config, "tsconfigRootDir")
  ) {
    const name = config.name || "(unnamed)";
    throw new Error(
      `Config ${name} at index ${index} has tsconfigRootDir at the top level. Put it under languageOptions.parserOptions.`,
    );
  }
}

const parserOptions = configs
  .map((config) => config.languageOptions?.parserOptions)
  .filter((options) => options?.tsconfigRootDir);

if (parserOptions.length !== 1) {
  throw new Error(
    `Expected one parserOptions.tsconfigRootDir. Found ${parserOptions.length}.`,
  );
}

const expectedDir = path.join(root, "test");

if (parserOptions[0].tsconfigRootDir !== expectedDir) {
  throw new Error(
    `parserOptions.tsconfigRootDir is ${parserOptions[0].tsconfigRootDir}. Expected ${expectedDir}.`,
  );
}

if (parserOptions[0].projectService !== true) {
  throw new Error("parserOptions.projectService must be true.");
}
