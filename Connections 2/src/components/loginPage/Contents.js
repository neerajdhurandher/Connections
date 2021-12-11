import React from "react";
import img from "./images/connection-img.png";
import "./Contents.css";

import Typewriter from "typewriter-effect";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


import SimpleImageSlider from "react-simple-image-slider";


import { GoogleOutlined } from '@ant-design/icons'
import firebase from "firebase/app"
import { auth } from "../../firebase"

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";


function Contents() {

   const images = [
      { url: img1},
      { url: img2},
      { url: img3},
      { url: img4},
      { url: img5},
      { url: img6}
   ]
   
   return (
      <div className="main-contents">

         <img className="highlight-img" src={img} alt="" />
         

         <div className="login-contents">

            <div className="imgSlider">

               <AliceCarousel
                  fadeOutAnimation={true}
                  autoPlay="true"
                  disableButtonsControls = "true"
                  autoPlayInterval="1000"
                  infinite="true">

                  <img src={img1} className="sliderimg" />
                  <img src={img2} className="sliderimg" />
                  <img src={img3} className="sliderimg" />
                  <img src={img4} className="sliderimg" />
                  <img src={img5} className="sliderimg" />

               </AliceCarousel>

               {/* <SimpleImageSlider className = "sliderimg"
                  width={300}
                  height={300}
                  images={images}
                  loop={true}
                  slideDuration = {1}
                  autoPlayDelay={1}
                  autoPlay={true}
                  showBullets={true}
                  showNavs={false}
               /> */}


            </div>

            <div className="typeWriterDiv">

               <p >Connect to your &nbsp;</p>

               <div className="typeWriterText" >
                  <Typewriter
                     options={{
                        strings: ['Family', 'Buddies', 'BFF', 'Love', 'Mates'],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </div>

            </div>

            <button className="login-btn login-button google "
               onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
               <GoogleOutlined /> Sign in with Google
            </button>

         </div>
      </div>
   );
}

export default Contents;
