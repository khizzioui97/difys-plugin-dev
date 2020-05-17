import InteractiveElement from "./InteractiveElement";

export default interface InteractiveElementUpdatedMessage {
	interactiveElement: InteractiveElement;
	_isInitialized: boolean;
	_messageType: "InteractiveElementUpdatedMessage";
}
