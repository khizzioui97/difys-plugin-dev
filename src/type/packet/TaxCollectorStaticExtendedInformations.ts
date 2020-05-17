import AllianceInformations from "./AllianceInformations";
import GuildInformations from "./GuildInformations";

export default interface TaxCollectorStaticExtendedInformations {
	allianceIdentity: AllianceInformations;
	firstNameId: number;
	guildIdentity: GuildInformations;
	lastNameId: number;
	_type: "TaxCollectorStaticExtendedInformations";
}
