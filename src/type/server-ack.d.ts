import EventEmitter from "./event-emitter";

export default class ServerAck {
	eventEmitter: EventEmitter;
	sequenceNumber: number;
	onServerAck: boolean;

	constructor(eventEmitter: EventEmitter, sequenceNumber: number);
	BasicAckMessage(): Promise<void>;
	onBasicAck(callback: Function): Promise<void>;
	onBasicNoOperation(callback: Function): ServerAck;
}
