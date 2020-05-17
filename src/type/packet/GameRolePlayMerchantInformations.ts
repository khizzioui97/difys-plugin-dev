import EntityLook from "./EntityLook";
import EntityDispositionInformations from "./EntityDispositionInformations";

export default interface GameRolePlayMerchantInformations {
	contextualId: number;
	disposition: EntityDispositionInformations;
	look: EntityLook;
	name: string;
	options: any[]; // TODO: Find what kind of data is in there
	sellType: number;
	_type: "GameRolePlayMerchantInformations";
}
