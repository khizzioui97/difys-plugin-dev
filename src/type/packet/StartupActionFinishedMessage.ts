export default interface StartupActionFinishedMessage {
	success: boolean;
	actionId: number;
	automaticAction: boolean;
	_isInitialized: boolean;
	_messageType: "StartupActionFinishedMessage";
}
