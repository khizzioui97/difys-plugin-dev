import GameRolePlayNpcInformations from "./GameRolePlayNpcInformations";
import GameRolePlayNpcQuestFlag from "./GameRolePlayNpcQuestFlag";

export default interface GameRolePlayNpcWithQuestInformations
	extends GameRolePlayNpcInformations {
	questFlag: GameRolePlayNpcQuestFlag;
}
