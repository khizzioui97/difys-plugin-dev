import MonsterInGroupLightInformations from "./MonsterInGroupLightInformations";
import MonsterInGroupInformations from "./MonsterInGroupInformations";

export default interface GroupMonsterStaticInformations {
	_type: "GroupMonsterStaticInformations";
	mainCreatureLightInfos: MonsterInGroupLightInformations;
	underlings: MonsterInGroupInformations[];
}
