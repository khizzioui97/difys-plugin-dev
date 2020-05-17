import { GameServerInformations, GuildMembershipMessage } from "./packet";
import { SelectedServerDataMessage } from "../type/packet";

export interface ServersById {
	[key: number]: GameServerInformations;
}
export interface ServersIdByName {
	[key: string]: number;
}

export enum AccountStatus {
	OFFLINE,
	LOGGING_IN,
	WAITING_FOR_SERVER,
	SWITCHING_TO_GAME,
	INITIATING_GAME,
	SELECTING_CHARACTER,
	MAP_TRANSITION,
	IDLE,
	MOVING,
	FIGHTING,
	BANNED
}

export enum AccountDialogTypes {
	NPC_SHOP = 0,
	PLAYER_TRADE = 1,
	NPC_TRADE = 2,
	CRAFT = 3,
	DISCONNECTED_VENDOR = 4,
	STORAGE = 5,
	SHOP_STOCK = 6,
	TAXCOLLECTOR = 8,
	NPC_MODIFY_TRADE = 9,
	BIDHOUSE_SELL = 10,
	BIDHOUSE_BUY = 11,
	MULTICRAFT_CRAFTER = 12,
	MULTICRAFT_CUSTOMER = 13,
	JOB_INDEX = 14,
	MOUNT = 15,
	MOUNT_STABLE = 16,
	NPC_RESURECT_PET = 17,
	NPC_TRADE_MOUNT = 18,
	REALESTATE_HOUSE = 19,
	REALESTATE_FARM = 20,
	BANK = 23,
	TRASHBIN = 24,
	ALLIANCE_PRISM = 25
}

interface AccountExtra {
	status: AccountStatus;
	offlineOptions?: string;
	selectedCharacter?: any; // TODO: create a type
	salt?: string;
	key?: number[];
	token?: string;
	mapId?: number;
	gameContext?: number;
	useDefaultCharactersListMessage: boolean;
	selectedServerData?: SelectedServerDataMessage;
	selectedServer?: GameServerInformations; // Cleaned up at task/account-connection.ts
	serversById?: ServersById; // Cleaned up at task/account-connection.ts
	serversIdByName?: ServersIdByName; // Cleaned up at task/account-connection.ts
	guild?: GuildMembershipMessage;
	currentSequenceNumber: number;
	dialog?: number;
}

export default interface Account extends AccountExtra {
	disabled: boolean;
	username: string;
	password: string;
	directLogin: boolean;
	server?: string;
	characterName?: string;
	script?: string;
	proxy?: string;
	userAgent: string;
}
