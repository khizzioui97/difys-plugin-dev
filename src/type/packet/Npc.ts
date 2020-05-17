import AnimFunNpcData from "./AnimFunNpcData";

export default interface Npc {
	actions: number[];
	actionsName: string[];
	animFunList: AnimFunNpcData[]; // TODO: Any other types than AnimFunNpcData ?
	dialogMessages: number[][];
	dialogReplies: number[][];
	gender: number;
	id: number;
	look: string;
	nameId: string;
	_type: "Npc";
}
