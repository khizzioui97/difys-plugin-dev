import ObjectItemInformationWithQuantity from "./ObjectItemInformationWithQuantity";

export default interface StartupActionAddObject {
	_type: "StartupActionAddObject";
	uid: number;
	title: string;
	text: string;
	descUrl: string;
	pictureUrl: string;
	items: ObjectItemInformationWithQuantity[];
}
