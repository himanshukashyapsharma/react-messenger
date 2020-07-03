import React,{useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../infobar/InfoBar"
import Input from "../input/Input"
import Messages from "../messages/Messages"

import "./Chat.css"

let socket

const Chat = ({ location })=>{

    const [name,setName] = useState("")
    const [room,setRoom] = useState("")
    const [message,setMessage] = useState("")
    const [messages,setMessages] = useState([])
    // const ENDPOINT = "http://localhost:5000/"
    const ENDPOINT = "https://kashyaps-messenger.herokuapp.com/"

    useEffect(()=>{
        const {name,room} = queryString.parse(location.search)

        // sends connection request to the ENDPOINT server
        socket = io(ENDPOINT)

        //to log data in socket object
        console.log("socket data from io function : " + socket)

        setName(name)
        setRoom(room)

        //send join message to server side while comonent loads
        socket.emit("join",{name,room})

        //sends disconnect message to server when component reloads or unloads
        return ()=>{
            socket.emit("disconnect")
        }
        //component reloads everytime querystring(location.search) changes
    },[ENDPOINT,location.search])

    useEffect(()=>{

        //listens for and updates messages array when message is recieved from server side

        //.once prevents from creating multiple listeners on server side
        //using socket.on will lead to creating multiple listeners on server side whenever client side is reloaded
        //or if it has multiple clients
        
        socket.once("message",(message)=>{   
            setMessages([...messages,message])
        }
        )
        // reloads whenever messages array is updated
    },[messages])

    //sends message to the server side 
    const sendMessage = (event)=>{
        event.preventDefault()
        
        //sends message only if message variable is not null
        if(message){
            socket.emit("sendMessage",message,()=> setMessage(""))
        } 
    }

    console.log(message,messages)

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages 
                    messages={messages}
                    name={name}
                />
                <Input 
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
                 
            </div>
        </div>
    )
}

export default Chat