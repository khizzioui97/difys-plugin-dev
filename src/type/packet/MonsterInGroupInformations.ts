import EntityLook from "./EntityLook";

export default interface MonsterInGroupInformations {
	_type: "MonsterInGroupInformations";
	creatureGenericId: number;
	grade: number;
	look: EntityLook;
	staticInfos: {
		isBoss: boolean;
		isMiniBoss: boolean;
		level: number;
		nameId: string;
		xp: number;
	};
}
