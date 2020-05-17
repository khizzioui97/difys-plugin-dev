export default interface MonsterInGroupLightInformations {
	_type: "MonsterInGroupLightInformations";
	creatureGenericId: number;
	grade: number;
	staticInfos: {
		isBoss: boolean;
		isMiniBoss: boolean;
		level: number;
		nameId: string;
		xp: number;
	};
}
