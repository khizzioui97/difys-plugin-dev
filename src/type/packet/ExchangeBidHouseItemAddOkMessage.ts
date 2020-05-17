import ObjectItemToSellInBid from "./ObjectItemToSellInBid";

export default interface ExchangeBidHouseItemAddOkMessage {
	itemInfo: ObjectItemToSellInBid;
	_isInitialized: boolean;
	_messageType: "ExchangeBidHouseItemAddOkMessage";
}
