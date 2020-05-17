import InteractiveElementSkill from "./InteractiveElementSkill";

export default interface InteractiveElement {
	_type: "InteractiveElement";
	elementId: number;
	elementTypeId: number;
	enabledSkills: InteractiveElementSkill[]; // TODO: possible other types
	disabledSkills: any[]; // TODO: add this type
	_name?: string;
	_houseData?: {
		houseId: number;
		modelId: number;
		ownerName: string;
	};
}
