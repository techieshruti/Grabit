import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type HelpBotProps = {
  isHelpOpen: boolean;
  setIsHelpOpen: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
};

const HelpBot = ({ isHelpOpen, setIsHelpOpen, setSearchText }: HelpBotProps) => {
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([
    { sender: "bot", text: "Hi! 👋 I'm your Food Assistant. How can I help you today?" }
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    const botReply = getBotResponse(userMessage);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: botReply }
    ]);

    setInput("");
  };

  const getBotResponse = (msg: string): string => {
    const message = msg.toLowerCase();

    if (
      message.includes("burger") ||
      message.includes("domino") ||
      message.includes("pizza")
    ) {
      setSearchText(msg);
      return `Searching for "${msg}" 🍴`;
    }

    if (message.includes("order")) {
      return "Sure! Tell me the restaurant name you want to order from 🍔";
    }

    if (message.includes("help")) {
      return `You can ask me:
1. Show me Burger King
2. Track my order
3. Cancel my order`;
    }

    return "Sorry 😅 I didn’t understand. Try asking about restaurants or orders.";
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsHelpOpen(!isHelpOpen)}
        className="fixed bottom-6 right-6 bg-[#f27318] p-4 rounded-full shadow-xl cursor-pointer text-white text-xl z-50"
      >
        💬
      </div>

      {/* Chat Window */}
      {isHelpOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-2xl rounded-xl p-4 z-50 border">

          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">AI Help</h2>
            <button onClick={() => setIsHelpOpen(false)}>❌</button>
          </div>

          {/* Messages */}
          <div className="h-60 overflow-y-auto flex flex-col gap-2 mb-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#f27318] text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full border rounded-md px-3 py-1 outline-none focus:ring-1 focus:ring-[#f27318]"
            />

            <button
              onClick={handleSend}
              className="bg-[#f27318] text-white px-3 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpBot;
