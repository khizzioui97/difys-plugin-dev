export default interface GameMapMovementMessage {
	actorId: number;
	keyMovements: number[];
	_isInitialized: boolean;
	_messageType: "GameMapMovementMessage";
}
