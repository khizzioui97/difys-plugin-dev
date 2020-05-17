import StatedElement from "./StatedElement";

export default interface StatedElementUpdatedMessage {
	statedElement: StatedElement;
	_isInitialized: boolean;
	_messageType: "StatedElementUpdatedMessage";
}
