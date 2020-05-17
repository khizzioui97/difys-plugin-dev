import chalk from "chalk";

const levels: {
	[name: string]: string;
} = {
	info: chalk.blueBright("INFO"),
	debug: chalk.cyan("DEBUG"),
	warn: chalk.yellow("WARN"),
	error: chalk.red("ERROR"),
	verbose: chalk.greenBright("VERBOSE")
};

function getTime() {
	const time = new Date().toLocaleTimeString();
	return chalk.blackBright(`[${time}]`);
}

function log(message: string, level: string) {
	if (level == "debug" && global.config.general.debug === false) {
		return;
	}
	console.log(`${getTime()} ${levels[level]} | ${message}`);
}

export default {
	info: (message: string) => log(message, "info"),
	debug: (message: string) => log(message, "debug"),
	warn: (message: string) => log(message, "warn"),
	error: (message: string) => log(message, "error"),
	verbose: (message: string) => log(message, "verbose")
};
