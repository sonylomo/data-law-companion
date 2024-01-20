import { useContext } from "react";
import { WebChatContext } from "../context/WebChat";

const useWebChat = () => useContext(WebChatContext);

export default useWebChat;
