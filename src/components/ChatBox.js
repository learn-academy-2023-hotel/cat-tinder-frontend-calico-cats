import React, { useState, useEffect } from "react"

const ChatBox = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || []
    return storedMessages
  })

  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage])
      setNewMessage("")
    }
  }

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages]
    updatedMessages.splice(index, 1)
    setMessages(updatedMessages)
  }

  return (
    <div className="chat-box">
      <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <div key={index} className="message-container">
            <div className="text-history">{message}</div>
            <button onClick={() => handleDeleteMessage(index)}>Delete</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={handleMessageChange}
        placeholder="Post something!"
      />
      <button onClick={handleSendMessage}>Post</button>
    </div>
  )
}

export default ChatBox
