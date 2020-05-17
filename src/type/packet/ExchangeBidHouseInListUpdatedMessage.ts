import ObjectEffectInteger from "./ObjectEffectInteger";

export default interface ExchangeBidHouseInListUpdatedMessage {
	effects: ObjectEffectInteger[]; // TODO: Test if it's the good type
	itemUID: number;
	objGenericId: number;
	prices: number[];
	_isInitialized: boolean;
	_messageType: "ExchangeBidHouseInListUpdatedMessage";
}
