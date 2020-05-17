import Socket from "../../type/socket";
import ChatServerMessage from "../../type/packet/ChatServerMessage";

export function ChatServerMessage(socket: Socket, data: ChatServerMessage) {
	console.log(data.content);
}
