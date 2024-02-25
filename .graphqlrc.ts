import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.HYGRAPH_ENDPOINT,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				defaultScalarType: "unknown",
				enumsAsTypes: true,
				useTypeImports: true,
				skipTypename: true,
				documentMode: "documentNode",
			},
			plugins: [],
		},
	},
};

export default config;
