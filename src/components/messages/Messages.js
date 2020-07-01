import React from "react"
import ScrollToBottom from "react-scroll-to-bottom"
import Message from "./Message"

import "./Messages.css"

const Messages = ({messages,name})=>
    (<ScrollToBottom>
        <div className="messagesContainer">
            {messages.map((message,i)=> <div key={i}><Message message={message} name={name}/></div>)}
        </div>
    </ScrollToBottom>)

export default Messages