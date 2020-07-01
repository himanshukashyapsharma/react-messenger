import React from "react"
import "./Input.css"

const Input = ({message,setMessage,sendMessage})=>{
    return (
            <form>
                <div className="inputContainer">
                    <input 
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(event)=> setMessage(event.target.value)}
                    onKeyPress={event => event.key === "Enter" ? sendMessage(event): null}
                    autoFocus
                    />
                    <button className="inputButton" onClick={event => sendMessage(event)}>&#9658;</button>
                </div>
            </form>
        
    )
}

export default Input