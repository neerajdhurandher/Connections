import React from "react";
import { useHistory } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./About.css";

import Person from './Person.js'


import Himanshu from "./HimanshuImage.jpg";
import Neeraj from "./Neeraj.jpg";
import Divyansh from "./Divyansh.jpg";


export default function About() {

   const history = useHistory()

   function back() {
      history.push("/")
   }

   return (
      <div>
         <div className="about-navbar">
            <div className="backBtn">
               <a onClick={back}>&#8810;<span className="back">back</span></a>
            </div>
            <h1 className="header">Connections</h1>
         </div>

         <div className="main" >

            <div className="container">
               <div className="row">

                  <Person
                     image={Neeraj}
                     name="Neeraj Dhurandher"
                     email="neerajdhurandar@gmail.com"
                     linkedin="https://www.linkedin.com/in/neeraj-dhurandher/"
                     git="https://github.com/neerajdhurandher"
                     insta="https://www.instagram.com/neeraj_dhurandher/"
                  />

                  <Person
                     image={Himanshu}
                     name="Himanshu Sahu"
                     email="sahuhim1008@gmail.com"
                     linkedin="https://www.linkedin.com/in/himanshu-99/"
                     git="https://github.com/himanshu-sahu"
                     insta="https://www.instagram.com/_jarrvis/"
                  />

                  <Person
                     image={Divyansh}
                     name="Divyansh Kumar Sen"
                     email="divyanshsen10@gmail.com"
                     linkedin="https://www.linkedin.com/"
                     git="https://github.com/"
                     insta="https://www.instagram.com/_div_sen/"
                  />


               </div>
            </div>

         </div>
      </div>
   )
}