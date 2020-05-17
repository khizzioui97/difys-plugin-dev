import ActorAlignmentInformations from "./ActorAlignmentInformations";
import ActorExtendedAlignmentInformations from "./ActorExtendedAlignmentInformations";
import ActorRestrictionsInformations from "./ActorRestrictionsInformations";
import AllianceInformations from "./AllianceInformations";
import AlliancePrismInformation from "./AlliancePrismInformation";
import AnimFunNpcData from "./AnimFunNpcData";
import BasicAckMessage from "./BasicAckMessage";
import BasicAllianceInformations from "./BasicAllianceInformations";
import BasicLatencyStatsRequestMessage from "./BasicLatencyStatsRequestMessage";
import BidExchangerObjectInfo from "./BidExchangerObjectInfo";
import CharacterBaseCharacteristic from "./CharacterBaseCharacteristic";
import CharacterBaseInformations from "./CharacterBaseInformations";
import CharacterCharacteristicsInformations from "./CharacterCharacteristicsInformations";
import CharacterSelectedSuccessMessage from "./CharacterSelectedSuccessMessage";
import CharactersListMessage from "./CharactersListMessage";
import CharacterStatsListMessage from "./CharacterStatsListMessage";
import ChatServerMessage from "./ChatServerMessage";
import CurrentMapMessage from "./CurrentMapMessage";
import EntityDispositionInformations from "./EntityDispositionInformations";
import EntityLook from "./EntityLook";
import ExchangeBidHouseBuyResultMessage from "./ExchangeBidHouseBuyResultMessage";
import ExchangeBidHouseInListUpdatedMessage from "./ExchangeBidHouseInListUpdatedMessage";
import ExchangeBidHouseItemAddOkMessage from "./ExchangeBidHouseItemAddOkMessage";
import ExchangeStartedBidBuyerMessage from "./ExchangeStartedBidBuyerMessage";
import ExchangeTypesExchangerDescriptionForUserMessage from "./ExchangeTypesExchangerDescriptionForUserMessage";
import ExchangeTypesItemsExchangerDescriptionForUserMessage from "./ExchangeTypesItemsExchangerDescriptionForUserMessage";
import FightCommonInformations from "./FightCommonInformations";
import FightOptionsInformations from "./FightOptionsInformations";
import FightTeamInformations from "./FightTeamInformations";
import FightTeamMemberWithAllianceCharacterInformations from "./FightTeamMemberWithAllianceCharacterInformations";
import GameContextCreateMessage from "./GameContextCreateMessage";
import GameContextRemoveElementMessage from "./GameContextRemoveElementMessage";
import GameMapMovementMessage from "./GameMapMovementMessage";
import GameRolePlayCharacterInformations from "./GameRolePlayCharacterInformations";
import GameRolePlayGroupMonsterInformations from "./GameRolePlayGroupMonsterInformations";
import GameRolePlayMerchantInformations from "./GameRolePlayMerchantInformations";
import GameRolePlayNpcInformations from "./GameRolePlayNpcInformations";
import GameRolePlayNpcQuestFlag from "./GameRolePlayNpcQuestFlag";
import GameRolePlayNpcWithQuestInformations from "./GameRolePlayNpcWithQuestInformations";
import GameRolePlayPrismInformations from "./GameRolePlayPrismInformations";
import GameRolePlayShowActorMessage from "./GameRolePlayShowActorMessage";
import GameRolePlayTaxCollectorInformations from "./GameRolePlayTaxCollectorInformations";
import GameServerInformations from "./GameServerInformations";
import GroupMonsterStaticInformations from "./GroupMonsterStaticInformations";
import GuildEmblem from "./GuildEmblem";
import GuildInformations from "./GuildInformations";
import GuildMembershipMessage from "./GuildMembershipMessage";
import HelloConnectMessage from "./HelloConnectMessage";
import HelloGameMessage from "./HelloGameMessage";
import HouseInformations from "./HouseInformations";
import HouseInformationsExtended from "./HouseInformationsExtended";
import HumanInformations from "./HumanInformations";
import HumanOptionAlliance from "./HumanOptionAlliance";
import HumanOptionGuild from "./HumanOptionGuild";
import HumanOptionOrnament from "./HumanOptionOrnament";
import HumanOptionTitle from "./HumanOptionTitle";
import IdentificationSuccessMessage from "./IdentificationSuccessMessage";
import InteractiveElement from "./InteractiveElement";
import InteractiveElementSkill from "./InteractiveElementSkill";
import InteractiveElementUpdatedMessage from "./InteractiveElementUpdatedMessage";
import InteractiveUsedMessage from "./InteractiveUsedMessage";
import InteractiveUseEndedMessage from "./InteractiveUseEndedMessage";
import kpiStartSessionMessage from "./kpiStartSessionMessage";
import MapComplementaryInformationsDataMessage from "./MapComplementaryInformationsDataMessage";
import MapObstacle from "./MapObstacle";
import MonsterInGroupInformations from "./MonsterInGroupInformations";
import MonsterInGroupLightInformations from "./MonsterInGroupLightInformations";
import NicknameAcceptedMessage from "./NicknameAcceptedMessage";
import NicknameRefusedMessage from "./NicknameRefusedMessage";
import NicknameRegistrationMessage from "./NicknameRegistrationMessage";
import Npc from "./Npc";
import ObjectEffect from "./ObjectEffect";
import ObjectEffectInteger from "./ObjectEffectInteger";
import ObjectGroundAddedMessage from "./ObjectGroundAddedMessage";
import ObjectGroundListAddedMessage from "./ObjectGroundListAddedMessage";
import ObjectItemInformationWithQuantity from "./ObjectItemInformationWithQuantity";
import ObjectItemToSellInBid from "./ObjectItemToSellInBid";
import OfflineOptionsMessage from "./OfflineOptionsMessage";
import PrismGeolocalizedInformation from "./PrismGeolocalizedInformation";
import PrismsListMessage from "./PrismsListMessage";
import PrismSubareaEmptyInfo from "./PrismSubareaEmptyInfo";
import SelectedServerDataMessage from "./SelectedServerDataMessage";
import SellerBuyerDescriptor from "./SellerBuyerDescriptor";
import SequenceNumberRequestMessage from "./SequenceNumberRequestMessage";
import serverDisconnecting from "./serverDisconnecting";
import ServersListMessage from "./ServersListMessage";
import StartupActionAddObject from "./StartupActionAddObject";
import StartupActionFinishedMessage from "./StartupActionFinishedMessage";
import StartupActionsListMessage from "./StartupActionsListMessage";
import StatedElement from "./StatedElement";
import StatedElementUpdatedMessage from "./StatedElementUpdatedMessage";
import SubEntity from "./SubEntity";
import SystemMessageDisplayMessage from "./SystemMessageDisplayMessage";
import TaxCollectorStaticExtendedInformations from "./TaxCollectorStaticExtendedInformations";
import TrustStatusMessage from "./TrustStatusMessage";

interface BaseEventData {
	_isInitialized?: boolean;
	_messageType: string;
}

type GameRolePlayEntitiesInformations =
	| GameRolePlayCharacterInformations
	| GameRolePlayGroupMonsterInformations
	| GameRolePlayMerchantInformations
	| GameRolePlayNpcInformations
	| GameRolePlayNpcWithQuestInformations
	| GameRolePlayTaxCollectorInformations
	| GameRolePlayPrismInformations;

export {
	// Custom types
	BaseEventData,
	GameRolePlayEntitiesInformations,
	// Types
	ActorAlignmentInformations,
	ActorExtendedAlignmentInformations,
	ActorRestrictionsInformations,
	AllianceInformations,
	AlliancePrismInformation,
	AnimFunNpcData,
	BasicAckMessage,
	BasicAllianceInformations,
	BasicLatencyStatsRequestMessage,
	BidExchangerObjectInfo,
	CharacterBaseCharacteristic,
	CharacterBaseInformations,
	CharacterCharacteristicsInformations,
	CharacterSelectedSuccessMessage,
	CharactersListMessage,
	CharacterStatsListMessage,
	ChatServerMessage,
	CurrentMapMessage,
	EntityDispositionInformations,
	EntityLook,
	ExchangeBidHouseBuyResultMessage,
	ExchangeBidHouseInListUpdatedMessage,
	ExchangeBidHouseItemAddOkMessage,
	ExchangeStartedBidBuyerMessage,
	ExchangeTypesExchangerDescriptionForUserMessage,
	ExchangeTypesItemsExchangerDescriptionForUserMessage,
	FightCommonInformations,
	FightOptionsInformations,
	FightTeamInformations,
	FightTeamMemberWithAllianceCharacterInformations,
	GameContextCreateMessage,
	GameContextRemoveElementMessage,
	GameMapMovementMessage,
	GameRolePlayCharacterInformations,
	GameRolePlayGroupMonsterInformations,
	GameRolePlayMerchantInformations,
	GameRolePlayNpcInformations,
	GameRolePlayNpcQuestFlag,
	GameRolePlayNpcWithQuestInformations,
	GameRolePlayPrismInformations,
	GameRolePlayShowActorMessage,
	GameRolePlayTaxCollectorInformations,
	GameServerInformations,
	GroupMonsterStaticInformations,
	GuildEmblem,
	GuildInformations,
	GuildMembershipMessage,
	HelloConnectMessage,
	HelloGameMessage,
	HouseInformations,
	HouseInformationsExtended,
	HumanInformations,
	HumanOptionAlliance,
	HumanOptionGuild,
	HumanOptionOrnament,
	HumanOptionTitle,
	IdentificationSuccessMessage,
	InteractiveElement,
	InteractiveElementSkill,
	InteractiveElementUpdatedMessage,
	InteractiveUsedMessage,
	InteractiveUseEndedMessage,
	kpiStartSessionMessage,
	MapComplementaryInformationsDataMessage,
	MapObstacle,
	MonsterInGroupInformations,
	MonsterInGroupLightInformations,
	NicknameAcceptedMessage,
	NicknameRefusedMessage,
	NicknameRegistrationMessage,
	Npc,
	ObjectEffect,
	ObjectEffectInteger,
	ObjectGroundAddedMessage,
	ObjectGroundListAddedMessage,
	ObjectItemInformationWithQuantity,
	ObjectItemToSellInBid,
	OfflineOptionsMessage,
	PrismGeolocalizedInformation,
	PrismsListMessage,
	PrismSubareaEmptyInfo,
	SelectedServerDataMessage,
	SellerBuyerDescriptor,
	SequenceNumberRequestMessage,
	serverDisconnecting,
	ServersListMessage,
	StartupActionAddObject,
	StartupActionFinishedMessage,
	StartupActionsListMessage,
	StatedElement,
	StatedElementUpdatedMessage,
	SubEntity,
	SystemMessageDisplayMessage,
	TaxCollectorStaticExtendedInformations,
	TrustStatusMessage
};
