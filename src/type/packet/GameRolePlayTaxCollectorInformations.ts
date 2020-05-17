import TaxCollectorStaticExtendedInformations from "./TaxCollectorStaticExtendedInformations";
import EntityDispositionInformations from "./EntityDispositionInformations";
import EntityLook from "./EntityLook";
import Npc from "./Npc";

export default interface GameRolePlayTaxCollectorInformations {
	contextualId: number;
	disposition: EntityDispositionInformations;
	guildLevel: number;
	identification: TaxCollectorStaticExtendedInformations;
	look: EntityLook;
	npcId: number;
	taxCollectorAttack: number;
	_npcData: Npc;
	_type: "GameRolePlayTaxCollectorInformations";
}
