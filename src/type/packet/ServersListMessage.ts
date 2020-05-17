import GameServerInformations from "./GameServerInformations";

export default interface ServersListMessage {
	servers: GameServerInformations[];
	_isInitialized: boolean;
	_messageType: "ServersListMessage";
}
