import EntityLook from "./EntityLook";

export default interface SubEntity {
	_type: "SubEntity";
	bindingPointCategory: number;
	bindingPointIndex: number;
	subEntityLook: EntityLook;
}
