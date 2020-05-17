import GuildInformations from "./GuildInformations";

export default interface GuildMembershipMessage {
	guildInfo: GuildInformations;
	memberRights: number;
	enabled: boolean;
	_isInitialized: boolean;
	_messageType: "GuildMembershipMessage";
}
