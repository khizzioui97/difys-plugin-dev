import CharacterCharacteristicsInformations from "./CharacterCharacteristicsInformations";

export default interface CharacterStatsListMessage {
	stats: CharacterCharacteristicsInformations;
	_isInitialized: boolean;
	_messageType: "CharacterStatsListMessage";
}
