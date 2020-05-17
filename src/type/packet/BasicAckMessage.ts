export default interface BasicAckMessage {
	lastPacketId: number;
	seq: number;
	_isInitialized: boolean;
	_messageType: "BasicAckMessage";
}
