import EntityDispositionInformations from "./EntityDispositionInformations";
import AlliancePrismInformation from "./AlliancePrismInformation";
import EntityLook from "./EntityLook";
import Npc from "./Npc";

export default interface GameRolePlayPrismInformations {
	contextualId: number;
	disposition: EntityDispositionInformations;
	look: EntityLook;
	npcId: number;
	prism: AlliancePrismInformation;
	_npcData: Npc;
	_type: "GameRolePlayPrismInformations";
}
