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
        <div className="join-outer-wrapper">
            <div className="logo-container">
                <h1 className="logo">Untold</h1>
            </div>

            <div className="join-inner-wrapper">
                <div className="join-image-wrapper">
                    <img class="image" src="/join-image.png" alt="join-image" />
                </div>

                <div className="join-form-wrapper">
                    <div className="heading-wrapper">
                        <h1 className="heading">Join</h1>
                    </div>
                    
                    <label>Name:</label>
                    <div><input placeholder="Enter your name" className="join-input" onChange={nameHandler} autoFocus/></div>
                    
                    <label>Room:</label>
                    <div><input placeholder="Enter room number" className="join-input" onChange={roomHandler} /></div>
                    
                    <div className="button-wrapper">
                        <Link 
                        onClick={event=> (!name || !room)?event.preventDefault():null}
                        to={`/chat?name=${name}&room=${room}`}>
                            <button className="button">Sign In</button>
                        </Link>
                    </div>
                    <div className="info">
                        <h5>* Enter name to display in chats.</h5>
                        <h5>* Enter room name you want to enter or create.</h5>
                    </div>
                </div>

                
                
            </div>
            
            
            
        </div>
    )
}

export default Join