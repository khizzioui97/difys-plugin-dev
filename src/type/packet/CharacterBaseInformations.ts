import EntityLook from "./EntityLook";

export default interface CharacterBaseInformations {
	_type: "CharacterBaseInformations";
	id: number;
	level: number;
	name: string;
	entityLook: EntityLook;
	breed: number;
	sex: boolean;
}
