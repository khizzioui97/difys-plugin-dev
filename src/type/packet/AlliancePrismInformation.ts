import AllianceInformations from "./AllianceInformations";

export default interface AlliancePrismInformation {
	alliance: AllianceInformations;
	nextVulnerabilityDate: number;
	placementDate: number;
	state: number;
	typeId: number;
	_type: "AlliancePrismInformation";
}
