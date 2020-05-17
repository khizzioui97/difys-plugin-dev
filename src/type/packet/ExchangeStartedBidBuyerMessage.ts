import SellerBuyerDescriptor from "./SellerBuyerDescriptor";

export default interface ExchangeStartedBidBuyerMessage {
	buyerDescriptor: SellerBuyerDescriptor;
	_isInitialized: boolean;
	_messageType: "ExchangeStartedBidBuyerMessage";
}
