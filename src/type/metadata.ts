export interface Metadata {
	appVersion: string;
	buildVersion: string;
	assetsExtendedVersion: string;
	assetsVersion: string;
	staticDataVersion: string;
}

export interface AssetsVersion {
	assetsVersion: string;
	staticDataVersion: string;
	changedFiles: string;
}

export interface Config {
	assetsUrl: string;
	analytics: {
		ankAnalytics: {
			version: string;
			debug: boolean;
			analog: boolean;
			useUrlMap: boolean;
		};
		wizAnalytics: {
			localytics: {
				token: string;
				options: {
					sessionTimeoutSeconds: number;
					namespace: string;
				};
			};
		};
	};
	disabledFeatures: {
		shopByServerIdList: string[];
	};
	adjust: {
		appToken: string;
		environment: string;
	};
	logging: {
		groups: false;
		logLevels: {
			time: number;
			verbose: number;
			debug: number;
			info: number;
			notice: number;
			warning: number;
			error: number;
			critical: number;
			alert: number;
			emergency: number;
		};
		config: {
			console: string[];
			server: string[];
		};
		disableOverride: boolean;
	};
	dataUrl: string;
	haapi: {
		id: number;
		url: string;
		hostname: string;
	};
	serverLanguages: string[];
	notification: {
		push: {
			appId: string;
			projectId: string;
		};
	};
	recaptcha: {
		proxyUrl: string;
		ankamaUrl: string;
	};
	failoverLanguage: string;
	uiUrl: string;
	language: string;
	sessionId: string;
}
