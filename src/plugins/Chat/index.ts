import pluginPackage from "./plugin.json";
import pluginConfig from "../../config/plugins/Chat.json";
import logger from "../../lib/logger";
import { ChatServerMessage } from "./events";

function mount() {
	logger.debug(`${pluginPackage.name} Plugin | Mounted`);
	return true;
}

function hook() {
	return true;
}

const listeners = [["ChatServerMessage", ChatServerMessage]];

export default {
	mount,
	hook,
	listeners,
	package: pluginPackage,
	config: pluginConfig
};
