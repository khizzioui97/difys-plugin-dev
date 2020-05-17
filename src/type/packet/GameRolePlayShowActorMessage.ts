import { GameRolePlayEntitiesInformations } from "./index";

export default interface GameRolePlayShowActorMessage {
	informations: GameRolePlayEntitiesInformations;
	_isInitialized: boolean;
	_messageType: "GameRolePlayShowActorMessage";
}
