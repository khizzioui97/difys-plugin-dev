export default interface SystemMessageDisplayMessage {
	_messageType: "SystemMessageDisplayMessage";
	hangUp: boolean;
	msgId: number;
	parameters: any[]; // TODO: Find the array elements type(s)
	_isInitialized: boolean;
	text: string;
	title: string;
}
