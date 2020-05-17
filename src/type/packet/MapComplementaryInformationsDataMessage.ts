import HouseInformationsExtended from "./HouseInformationsExtended";
import HouseInformations from "./HouseInformations";
import GameRolePlayCharacterInformations from "./GameRolePlayCharacterInformations";
import GameRolePlayGroupMonsterInformations from "./GameRolePlayGroupMonsterInformations";
import GameRolePlayMerchantInformations from "./GameRolePlayMerchantInformations";
import GameRolePlayNpcInformations from "./GameRolePlayNpcInformations";
import GameRolePlayNpcWithQuestInformations from "./GameRolePlayNpcWithQuestInformations";
import GameRolePlayTaxCollectorInformations from "./GameRolePlayTaxCollectorInformations";
import GameRolePlayPrismInformations from "./GameRolePlayPrismInformations";
import FightCommonInformations from "./FightCommonInformations";
import InteractiveElement from "./InteractiveElement";
import StatedElement from "./StatedElement";
import MapObstacle from "./MapObstacle";

export default interface MapComplementaryInformationsDataMessage {
	subAreaId: number;
	mapId: number;
	houses: (HouseInformationsExtended | HouseInformations)[];
	actors: (
		| GameRolePlayCharacterInformations
		| GameRolePlayGroupMonsterInformations
		| GameRolePlayMerchantInformations
		| GameRolePlayNpcInformations
		| GameRolePlayNpcWithQuestInformations
		| GameRolePlayTaxCollectorInformations
		| GameRolePlayPrismInformations
	)[]; // TODO: There might be other actor types
	interactiveElements: InteractiveElement[];
	statedElements: StatedElement[]; // TODO: There might be other types
	obstacles: (MapObstacle | any)[]; // TODO: There might be other types
	fights: (FightCommonInformations | any)[]; // TODO: There might be other types
	_isInitialized: boolean;
	_messageType: "MapComplementaryInformationsDataMessage";
}
