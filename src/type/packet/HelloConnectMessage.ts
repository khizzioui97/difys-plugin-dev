export default interface HelloConnectMessage {
	salt: string;
	key: number[];
	_isInitialized: boolean;
	_messageType: "HelloConnectMessage";
}
