import React from "react"
import "./InfoBar.css"

const InfoBar = ({room})=>{
    
    return (
        <div className="infoBarContainer">
            <div className="infoBarDetails">
                <span>•&nbsp;</span>
                <h3>{room}</h3>
            </div>
            <div className="infoBarCloseButton">
                <a href="/">Exit Room</a>
            </div>
        </div>
    )
}

export default InfoBar