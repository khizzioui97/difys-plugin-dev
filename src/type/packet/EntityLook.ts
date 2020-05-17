import SubEntity from "./SubEntity";

export default interface EntityLook {
	_type: "EntityLook";
	bonesId: number;
	skins: any[]; // TODO: What is this type ?
	indexedColors: number[];
	scales: number[];
	subentities: SubEntity[];
}
