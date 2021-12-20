import React from "react";

import "./PersonForHelp.css";


export default function PersonForHelp(props) {

    return (

        <div className="user-info">
            <p className="user-name-help">{props.personName}</p>
            <p className="user-phone" onClick={()=> window.open(props.phoneLink, "_blank")} >{props.personPhone}</p>
        </div>

    );
}
