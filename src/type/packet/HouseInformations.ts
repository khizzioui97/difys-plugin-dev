export default interface HouseInformations {
	_type: string | "HouseInformations";
	houseId: number;
	doorsOnMap: number[];
	ownerName: string;
	isOnSale: boolean;
	isSaleLocked: boolean;
	modelId: number;
	_name: string;
}
