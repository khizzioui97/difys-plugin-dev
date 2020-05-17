import StartupActionAddObject from "./StartupActionAddObject";

export default interface StartupActionsListMessage {
	actions: StartupActionAddObject[];
	_isInitialized: boolean;
	_messageType: "StartupActionsListMessage";
}
