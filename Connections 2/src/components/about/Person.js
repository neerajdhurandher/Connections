import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Person.css";


export default function Person(props) {

   return (
     
               <div className="card">
                  <img className="profile-pic" src={props.image} alt="" />
                  <div className="user-details">
                     <div className="user-name">{props.name}</div>
                     <div className="user-email">{props.email}</div>
                     <div className="social-tab">
                        <a href={props.linkedin} target="_blank">
                           <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={props.git} target="_blank">
                           <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href = {props.insta} target="_blank"> <FontAwesomeIcon icon={faInstagram}/> </a>
                     </div>
                  </div>
               </div>
               
   )
}