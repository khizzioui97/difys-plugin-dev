import BasicAllianceInformations from "./BasicAllianceInformations";

export default interface FightTeamMemberWithAllianceCharacterInformations {
	allianceInfos: BasicAllianceInformations;
	id: number;
	level: number;
	name: string;
	_type: "FightTeamMemberWithAllianceCharacterInformations";
}
