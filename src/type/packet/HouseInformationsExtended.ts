import GuildInformations from "./GuildInformations";
import HouseInformations from "./HouseInformations";

export default interface HouseInformationsExtended extends HouseInformations {
	_type: "HouseInformationsExtended";
	guildInfo: GuildInformations;
}
