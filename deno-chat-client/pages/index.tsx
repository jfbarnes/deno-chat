/** @jsx h */
import { h, PageConfig, useState, useEffect, useCallback } from "../deps.ts";

interface Message {
  text: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = useCallback(async () => {
    const res = await fetch("https://jfbarnes-deno-chat-api.deno.dev/messages");
    const data = await res.json();
    setMessages(data);
  });

  useEffect(() => {
    getMessages();
  }, []);

  return <div>{JSON.stringify(messages)}</div>;
}

export const config: PageConfig = { runtimeJS: true };
