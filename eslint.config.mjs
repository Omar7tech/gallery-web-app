import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Tooling and skill scripts — not part of the application source.
    ".claude/**",
    ".agents/**",
  ]),
  {
    rules: {
      // Apostrophes in editorial copy render fine; this rule is pure noise here.
      "react/no-unescaped-entities": "off",
      // SSR-safe mount flags and media-query/storage syncing legitimately set
      // state from effects on the client.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
