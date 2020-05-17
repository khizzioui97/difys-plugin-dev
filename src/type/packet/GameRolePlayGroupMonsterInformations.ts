import EntityLook from "./EntityLook";
import EntityDispositionInformations from "./EntityDispositionInformations";
import GroupMonsterStaticInformations from "./GroupMonsterStaticInformations";

export default interface GameRolePlayGroupMonsterInformations {
	_type: "GameRolePlayGroupMonsterInformations";
	ageBonus: number;
	alignmentSide: number;
	contextualId: number;
	disposition: EntityDispositionInformations;
	hasHardcoreDrop: boolean;
	keyRingBonus: boolean;
	look: EntityLook;
	lootShare: number;
	scaleLevel: number;
	staticInfos: GroupMonsterStaticInformations;
}
