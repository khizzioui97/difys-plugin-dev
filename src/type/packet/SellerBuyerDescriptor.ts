export default interface SellerBuyerDescriptor {
	maxItemLevel: number;
	maxItemPerAccount: number;
	npcContextualId: number;
	quantities: number[];
	taxPercentage: number;
	types: number[];
	unsoldDelay: number;
	_type: "SellerBuyerDescriptor";
}
