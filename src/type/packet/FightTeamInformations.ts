import FightTeamMemberWithAllianceCharacterInformations from "./FightTeamMemberWithAllianceCharacterInformations";

export default interface FightTeamInformations {
	leaderId: number;
	teamId: number;
	teamMembers: (FightTeamMemberWithAllianceCharacterInformations | any)[]; // TODO: There are other types
	teamSide: number;
	teamTypeId: number;
	_type: "FightTeamInformations";
}
