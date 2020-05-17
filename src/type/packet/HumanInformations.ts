import ActorRestrictionsInformations from "./ActorRestrictionsInformations";
import HumanOptionGuild from "./HumanOptionGuild";
import HumanOptionAlliance from "./HumanOptionAlliance";
import HumanOptionTitle from "./HumanOptionTitle";
import HumanOptionOrnament from "./HumanOptionOrnament";

export default interface HumanInformations {
	_type: "HumanInformations";
	restrictions: ActorRestrictionsInformations;
	sex: boolean;
	options: (
		| HumanOptionGuild
		| HumanOptionAlliance
		| HumanOptionTitle
		| HumanOptionOrnament
	)[];
}
