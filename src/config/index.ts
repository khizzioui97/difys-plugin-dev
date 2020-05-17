export interface GeneralDatabase {
	_type: string;
	host: string;
	port: number;
	dbname: string;
}

export interface WebAPI {
	enabled: boolean;
	port: number;
}

export interface General {
	lang: string;
	country: string;
	debug: boolean;
	antiAfk: boolean;
	delays: {
		connection: number;
		reconnection: number;
		nicknameRetry: number;
		startupAction: number;
	};
	webAPI: WebAPI;
	cluster: {
		enabled: boolean;
		maxCPUCores: number;
	};
	databases: GeneralDatabase[];
}

export interface Defaults {
	request: {
		ciphers: string;
	};
	script: {
		infiniteLoopThreshold: number;
	};
	cluster: {
		workerId: number;
	};
	webAPI: {
		socketPingInterval: number;
		jwtSecret: string;
		user: {
			username: string;
			password: string;
		};
	};
	userAgent: string;
	server: string;
	character: any;
}
