import ObjectEffectInteger from "./ObjectEffectInteger";
import ObjectEffect from "./ObjectEffect";

export default interface ObjectItemInformationWithQuantity {
	_type: "ObjectItemInformationWithQuantity";
	objectGID: number;
	effects: (ObjectEffectInteger | ObjectEffect)[];
	quantity: number;
}
