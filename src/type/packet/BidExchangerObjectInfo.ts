import ObjectEffectInteger from "./ObjectEffectInteger";

export default interface BidExchangerObjectInfo {
	effects: ObjectEffectInteger[];
	objectUID: number;
	prices: number[];
	_type: "BidExchangerObjectInfo";
}
