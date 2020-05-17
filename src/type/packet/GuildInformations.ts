import GuildEmblem from "./GuildEmblem";

export default interface GuildInformations {
	_type: "GuildInformations";
	guildId: number;
	guildName: string;
	guildEmblem: GuildEmblem;
}
