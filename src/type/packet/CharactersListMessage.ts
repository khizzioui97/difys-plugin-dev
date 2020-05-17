import CharacterBaseInformations from "./CharacterBaseInformations";

export default interface CharactersListMessage {
	characters: CharacterBaseInformations[];
	hasStartupActions: boolean;
	_isInitialized: boolean;
	_messageType: "CharactersListMessage";
}
