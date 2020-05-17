import AllianceInformations from "./AllianceInformations";

export default interface HumanOptionAlliance {
	_type: "HumanOptionAlliance";
	allianceInformations: AllianceInformations;
	aggressable: number;
}
