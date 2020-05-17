import AlliancePrismInformation from "./AlliancePrismInformation";

export default interface PrismGeolocalizedInformation {
	allianceId: number;
	enrichData: {
		subAreaName: string;
		isConquestVillage: boolean;
		areaName: string;
	};
	mapId: number;
	prism: AlliancePrismInformation;
	subAreaId: number;
	worldX: number;
	worldY: number;
	_type: "PrismGeolocalizedInformation";
}
