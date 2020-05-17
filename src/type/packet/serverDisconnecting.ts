export default interface serverDisconnecting {
	reason: "SERVER_GONE" | "CONNECTION_FAILED";
	_messageType: "serverDisconnecting";
}
