export default interface GameRolePlayNpcQuestFlag {
	questsToStartId: number[];
	questsToValidId: number[]; // TODO: Assumed type number because key 'questsToStartId' had numbers
	_type: "GameRolePlayNpcQuestFlag";
}
