export default interface PluginConfig {
	name: string;
	description: string;
	author: string;
	version: string;
	requiredPlugins: string[];
	dependencies: string[];
	binaries: string[];
}
