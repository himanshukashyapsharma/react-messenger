import React from "react"
import ReactEmoji from "react-emoji"

import "./Message.css"

const Message = ({message:{user,text},name})=>{
    let isSentByCurrentUser = false
    
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser
        ?(
            <div className="messageContainer user">
                <p>{trimmedName}</p>
                <div className="text-width">
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        :(
            <div className="messageContainer other">
                <div className="text-width">
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>
                <p>{user}</p>
            </div>

        )
    )

}

export default Message