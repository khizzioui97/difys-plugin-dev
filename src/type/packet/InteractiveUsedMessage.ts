export default interface InteractiveUsedMessage {
	duration: number;
	elemId: number;
	entityId: number;
	skillId: number;
	_isInitialized: boolean;
	_messageType: "InteractiveUsedMessage";
	_useAnimation: string;
}
