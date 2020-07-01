import React, {useState} from "react"
import {Link} from "react-router-dom"
import "./Join.css"

const Join = ()=> {

    const [name,setName] = useState("")
    const [room,setRoom] = useState("")

    function nameHandler(event){
        setName(event.target.value)
    }

    function roomHandler(event){
        setRoom(event.target.value)
    }
    
    return (
        <div className="joinOuterContainer">
            <h4>Enter name to display in chats.</h4>
            <h4>Enter room name you want to enter or create.</h4>
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" onChange={nameHandler} autoFocus/></div>
                <div><input placeholder="Room" className="joinInput" onChange={roomHandler} /></div>
                <Link 
                onClick={event=> (!name || !room)?event.preventDefault():null}
                to={`/chat?name=${name}&room=${room}`}>
                    <button className="button">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join