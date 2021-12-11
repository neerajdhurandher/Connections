import React from "react";
import 'reactjs-popup/dist/index.css';
import HelpPopUp from '../helpPopUp/HelpPopUp'

import mainlogoimp from './connectionslogo.png';
import "./Nav.css";

import { useHistory } from "react-router-dom"


export default function Nav() {

   const history = useHistory()

   function gotoabout() {
      history.push('/about')
   }
   function gotopptpage() {
      history.push('/ppt')
   }

   return (
      <div className="navbar">

         <div className="mainlogo">
            {/* <img className = "mainlogoimg"  alt="img" /> */}
            <a>Connections</a>
         </div>

         <div className="nav-info">
            <span onClick={gotoabout}>
               <a>About Us</a>
            </span>
            <span onClick={gotopptpage}>
               <a>PPT</a>
            </span>
            <span>
               <HelpPopUp/>
            </span>
         </div>
      </div>
   );
}
