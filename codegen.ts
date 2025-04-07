import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://api.github.com/graphql": {
      headers: {
        "User-Agent": "Awesome-Octocat-App",
        Authorization: process.env.GITHUB_TOKEN ?? "",
      },
    },
  },
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/types/types.generated.ts": {
      plugins: ["typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types/types.generated.ts",
      },
      plugins: ["typescript-operations"],
      config: { withHooks: true },
    },
  },
};
export default config;
