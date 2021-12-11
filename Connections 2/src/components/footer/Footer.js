 import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCopyright } from '@fortawesome/free-solid-svg-icons';
 import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p className = "teamName">Developed by Connections Team</p>
            <p className = "copyrighttext">All rights reserved <FontAwesomeIcon icon={faCopyright} /> 2021, Connections INDIA, Inc. </p>
            <p className = "sorrytxt">Website is under development, sorry for the inconvenience. </p>
        </div>
    )
}

export default Footer
