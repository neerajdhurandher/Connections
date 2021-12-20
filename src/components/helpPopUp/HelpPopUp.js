import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import "./HelpPopUp.css";

import PersonForHelp from "./PersonForHelp";


export default function Nav() {

   return (
      <Popup
         trigger={<a> Help </a>}
         modal
         nested
      >
         {close => (
            <div className="modal">

               <div className="popupheader"> For technical help </div>

               <div className="help">

                  <PersonForHelp personName={"Neeraj Dhurandher"} personPhone={"7224010437"} phoneLink = {"tel:7224010437"}/>

                  <PersonForHelp personName={"Himanshu Sahu"} personPhone={"9630344899"}phoneLink = {"tel:9630344899"} />

                  <PersonForHelp personName={"Divyansh Kumar Sen"} personPhone={"7869194873"} phoneLink = {"tel:7869194873"} />

               </div>

               <div className="popupactions">

                  <div className="button" onClick={() => { close(); }}>
                     Close
                  </div>

               </div>
            </div>
         )}
      </Popup>
   );
}
