type Listener = [Function, any?, string?];
type NamedListener = [string, Function, any?, string?];

export default class EventEmitter {
	scope: EventEmitter;
	executingEvent: boolean;
	events: { [eventName: string]: Event[] };
	waitingEvents: any[];
	emittedEvents: any[][];

	on(
		...args:
			| NamedListener
			| Listener
			| Function[]
			| NamedListener[]
			| Listener[]
	): number[];

	once(key: string, callback: Function, scope?: any): void;
	exist(key: string): Event[] | false;
	off(key: string | string[], index?: number | Function): void;
	emit(key: string, data: unknown[]): void;
}
