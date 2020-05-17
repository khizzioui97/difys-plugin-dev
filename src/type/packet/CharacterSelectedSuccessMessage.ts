import CharacterBaseInformations from "./CharacterBaseInformations";

export default interface CharacterSelectedSuccessMessage {
	infos: CharacterBaseInformations;
	_isInitialized: boolean;
	_messageType: "CharacterSelectedSuccessMessage";
}
