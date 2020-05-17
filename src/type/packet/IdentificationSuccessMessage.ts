export default interface IdentificationSuccessMessage {
	login: string;
	nickname: string;
	accountId: number;
	communityId: number;
	hasRights: boolean;
	secretQuestion: string;
	subscriptionEndDate: number;
	wasAlreadyConnected: boolean;
	accountCreation: number;
	hasConsoleRight: boolean;
	_groupFlags: string;
	_applicationName: string;
	_isInitialized: boolean;
	_messageType: "IdentificationSuccessMessage";
}
