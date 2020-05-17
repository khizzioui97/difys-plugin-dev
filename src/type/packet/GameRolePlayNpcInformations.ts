import EntityDispositionInformations from "./EntityDispositionInformations";
import EntityLook from "./EntityLook";
import Npc from "./Npc";

export default interface GameRolePlayNpcInformations {
	contextualId: number;
	disposition: EntityDispositionInformations;
	look: EntityLook;
	npcId: number;
	sex: boolean;
	specialArtworkId: number;
	_npcData: Npc;
	_type: "GameRolePlayNpcInformations";
}
