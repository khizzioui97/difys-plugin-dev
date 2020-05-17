import ObjectEffectInteger from "./ObjectEffectInteger";

export default interface ObjectItemToSellInBid {
	effects: ObjectEffectInteger[]; // TODO: Test if it's the good type
	objectGID: number;
	objectPrice: number;
	objectUID: number;
	quantity: number;
	unsoldDelay: number;
	_type: "ObjectItemToSellInBid";
}
