import EntityLook from "./EntityLook";
import EntityDispositionInformations from "./EntityDispositionInformations";
import HumanInformations from "./HumanInformations";
import ActorAlignmentInformations from "./ActorAlignmentInformations";

export default interface GameRolePlayCharacterInformations {
	_type: "GameRolePlayCharacterInformations";
	contextualId: number;
	look: EntityLook;
	disposition: EntityDispositionInformations;
	name: string;
	humanoidInfo: HumanInformations;
	accountId: number;
	alignmentInfos: ActorAlignmentInformations;
}
