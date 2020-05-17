// Cannot do usual imports... Otherwise it doesn't work :(

declare namespace NodeJS {
	export interface Global {
		config: {
			defaults: import("./src/config").Defaults;
			general: import("./src/config").General;
			metadata: import("./src/type/metadata").Metadata;
			accounts: {
				[username: string]: import("./src/type/account").default;
			};
		};
	}
}
