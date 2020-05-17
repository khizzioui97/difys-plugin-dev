import * as http from "http";
import { Socket } from "net";

export interface IPrimusParser {
	encoder: (data: any, fn: (error: Error, response: any) => void) => void;
	decoder: (data: any, fn: (error: Error, response: any) => void) => void;
}

export default class Primus {
	constructor(server: http.Server | string, options?: IPrimusOptions);
	authorize(req: http.ClientRequest, done: () => void): void;
	before(event: string, cb: () => void): void;
	before(
		event: string,
		cb: (
			req: http.ClientRequest,
			res: http.ServerResponse,
			next: any
		) => void
	): void;
	before(
		event: string,
		cb: (req: http.ClientRequest, res: http.ServerResponse) => void
	): void;
	destroy(): void;
	disable(name: string): void;
	emits(event: string, parser: (next: any, parser: any) => void): void; // might be better tied to a TSD for https://github.com/primus/emits
	enable(name: string): void;
	end(): void;
	forEach(cb: (spark: ISpark, id: string, connections: any) => void): void;
	id(cb: (id: any) => void): void;
	library(): void;
	on(event: string, cb: (...args: any) => void): void;
	open(): void;
	remove(name: string): void;
	socket: Socket;
	static createSocket(options?: IPrimusOptions): Socket;
	transform(event: string, cb: (packet: any) => void): void;
	transforms(event: string, parser: (packet: any, next: any) => void): void; // might be better tied to a TSD for https://github.com/primus/emits
	use(name: string, plugin: Object): void;
	write(data: any): void;
}

export interface IPrimusOptions {
	authorization?: Function;
	compression?: boolean;
	credentials?: boolean;
	exposed?: boolean;
	global?: string;
	headers?: boolean;
	maxAge?: string;
	methods?: string;
	origins?: string;
	parser?: "JSON" | "binary" | "EJSON" | IPrimusParser;
	pathname?: string;
	plugin?: any;
	strategy?: string | ["online" | "timeout" | "disconnect"];
	timeout?: number;
	transformer?: string;
	[key: string]: any;
	pingInterval?: number;
	maxLength?: number;
	transport?: any;
	idGenerator?: Function;
}

export interface IPrimusConnectOptions {
	jsonp?: boolean;
	forceJSONP?: boolean;
	pingTimeout?: number;
	manual?: boolean;
	websockets?: boolean;
	network?: boolean;
	queueSize?: any;
	reconnect?: {
		max?: any;
		min?: number;
		retries?: number;
		"reconnect timeout"?: number;
		factor?: number;
	};
}

export interface ISpark {
	headers: any[];
	address: string;
	query: string;
	id: string;
	request: http.ClientRequest;

	write(data: any): void;
	end(data?: any, options?: Object): void;
	emits(event: string, parser: (next: any, parser: any) => void): void; // might be better tied to a TSD for https://github.com/primus/emits
	on(event: string, cb: (...args: any) => void): void;
}
