import Primus from "./primus";
import EventEmitter from "./event-emitter";
import { EventEmitter as NativeEventEmitter } from "events";
import { Metadata } from "./metadata";
import { AccountStatus } from "./account";
import SelectedServerDataMessage from "./packet/SelectedServerDataMessage";
import ServerAck from "./server-ack";

export interface Authentication {
	sessionId: string;
	accountId: number;
	token: string;
}

export interface ConnectingServer {
	address: string;
	port: number;
	id: number;
}

export default class Socket extends Primus {
	account: Account;
	server: "login" | ConnectingServer;
	serverAckSequenceNumber: number;
	eventEmitter: EventEmitter;
	accountEventEmitter: NativeEventEmitter;
	metadata: Metadata;
	auth: Authentication;
	pluginsListeners?: any[];

	onAccountPropertyUpdated(property: string, value: any): Promise<void>;
	getConnectingServer(
		selectedServer?: SelectedServerDataMessage
	): "login" | ConnectingServer;
	reconnect(): Promise<void>;
	send(call: string, data?: any): void;
	sendMessage(type: string, data?: any): ServerAck;
	load(listeners: any): void;
	static getUrl(
		status: AccountStatus | undefined,
		sessionId: string,
		access: string | undefined
	): string;
}
