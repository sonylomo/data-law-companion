import { createContext, useState , type ReactNode} from "react";
import {
  type WebChatInstance,
} from "@ibm-watson/assistant-web-chat-react";

export const WebChatContext = createContext(null);

export const WebChatProvider = ({ children }: { children: ReactNode }) => {
  const [instance, setInstance] = useState<WebChatInstance | null>(null);

  return (
    <WebChatContext.Provider value={{ instance, setInstance }}>
      {children}
    </WebChatContext.Provider>
  );
};
