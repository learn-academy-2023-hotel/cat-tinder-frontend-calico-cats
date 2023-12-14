import React, { useState } from "react"

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage])
      setNewMessage("")
    }
  }

  return (
    <div className="chat-box">
      <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default ChatBox
