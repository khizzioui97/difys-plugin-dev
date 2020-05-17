import FightOptionsInformations from "./FightOptionsInformations";
import FightTeamInformations from "./FightTeamInformations";

export default interface FightCommonInformations {
	fightId: number;
	fightTeams: FightTeamInformations[];
	fightTeamsOptions: FightOptionsInformations[];
	fightTeamsPositions: number[];
	fightType: number;
	_type: "FightCommonInformations";
}
