import { rollup } from "rollup";
import { promises as fs } from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";

(async () => {
	const pluginList = await fs.readdir("./src/plugins");

	for (const pluginName of pluginList) {
		const bundle = await rollup({
			input: `./src/plugins/${pluginName}/index.ts`,
			plugins: [
				typescript({
					tsconfigOverride: {
						compilerOptions: { module: "ES2015", outDir: "build" }
					}
				}),
				commonjs({
					extensions: [".js", ".ts"]
				}),
				json(),
				resolve({ preferBuiltins: true })
			]
		});
		await bundle.write({
			file: `build/${pluginName}.js`,
			format: "cjs"
		});
	}
})();
