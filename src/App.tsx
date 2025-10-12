import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Assalamu Alaikum! আমি তোমার চ্যাটবট। কী জানতে চাও?" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simple bot reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: `তুমি বলেছো: "${input}"` }
      ]);
    }, 600);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🤖 Bismillah Chatbot</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#d1e7ff" : "#f1f1f1"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="লিখে পাঠাও..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: 400,
    margin: "30px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontFamily: "sans-serif"
  },
  title: {
    textAlign: "center",
    marginBottom: 15
  },
  chatBox: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    minHeight: 300,
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 10,
    overflowY: "auto",
    marginBottom: 15
  },
  message: {
    padding: "8px 12px",
    borderRadius: 10,
    maxWidth: "75%"
  },
  inputArea: {
    display: "flex",
    gap: 10
  },
  input: {
    flex: 1,
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 6
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "8px 14px",
    cursor: "pointer"
  }
};

export default App;
