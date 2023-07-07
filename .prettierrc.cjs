// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  importOrder: ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]", "[~]", "", "<TYPES>"],
};
