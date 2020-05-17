import PrismGeolocalizedInformation from "./PrismGeolocalizedInformation";
import PrismSubareaEmptyInfo from "./PrismSubareaEmptyInfo";

export default interface PrismsListMessage {
	prisms: (PrismGeolocalizedInformation | PrismSubareaEmptyInfo)[];
	_isInitialized: boolean;
	_messageType: "PrismsListMessage";
}
