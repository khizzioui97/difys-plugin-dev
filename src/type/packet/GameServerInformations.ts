export default interface GameServerInformations {
	_type: "GameServerInformations";
	id: number;
	status: number;
	completion: number;
	isSelectable: true;
	charactersCount: number;
	date: number;
	_name: string;
	_gameTypeId: number;
}
