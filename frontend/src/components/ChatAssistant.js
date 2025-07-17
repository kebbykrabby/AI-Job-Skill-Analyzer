import { useState } from "react";
import { Link } from "react-router-dom";

export function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:4000/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process your request." },
      ]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">AI Chat Assistant</h2>
      <div className="border h-64 overflow-y-scroll p-2 mb-2 bg-white rounded shadow">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <p className={`inline-block px-2 py-1 rounded ${msg.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-grow border px-2 py-1 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me a question..."
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded-r" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
