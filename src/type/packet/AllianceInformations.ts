import GuildEmblem from "./GuildEmblem";

export default interface AllianceInformations {
	_type: "AllianceInformations";
	allianceId: number;
	allianceTag: string;
	allianceName: string;
	allianceEmblem: GuildEmblem;
}
