export default interface ChatServerMessage {
	channel: number;
	content: string;
	fingerprint: string;
	senderAccountId: number;
	senderId: number;
	senderName: string;
	timestamp: number;
	urls: any[]; // TODO: Find this type
	_isInitialized: boolean;
	_messageType: "ChatServerMessage";
}
