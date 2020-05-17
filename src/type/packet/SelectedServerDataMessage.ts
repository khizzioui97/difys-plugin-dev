export default interface SelectedServerDataMessage {
	address: string;
	canCreateNewCharacter: boolean;
	port: number;
	serverId: number;
	ticket: string;
	_access: string;
	_isInitialized: boolean;
	_messageType: "SelectedServerDataMessage";
}
