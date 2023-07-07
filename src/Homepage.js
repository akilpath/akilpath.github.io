import React from 'react';
import HomePageCSS from "./css/Homepage.module.css";
import BriefAboutMeCSS from "./css/BriefAboutMe.module.css";
import ProjectCSS from "./css/Project.module.css";

import dunkirk from "./pages/Dunkirk/dunkirk.JPG";
import legoSwerve from "./pages/projMagnemite/legoSwerve.jpg"
import chessLogo from "./pages/chess/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import securityCamImg from "./pages/mlsecuritycam/securitycam.jpg";
import dinoGif from "./pages/dqn/dinogif.gif"

import myphoto from "./images/myphoto.png"

import cpplogo from "./images/languageIcons/cpplogo.png";
import pythonlogo from "./images/languageIcons/pythonlogo.png";
import jslogo from "./images/languageIcons/javascriptlogo.png";
import htmllogo from "./images/languageIcons/htmllogo.png";
import csslogo from "./images/languageIcons/csslogo.png";
import javalogo from "./images/languageIcons/javalogo.png";
import tensorflowLogo from "./images/languageIcons/tensorflowlogo.png";
import waterlooLogo from "./images/languageIcons/uwaterloo.logo.png"
import solidworksLogo from "./images/languageIcons/solidworkslogo.png"
import reactlogo from "./images/languageIcons/reactlogo.png"
import firstLogo from "./images/languageIcons/FIRSTlogo.png"
import gitlogo from "./images/languageIcons/gitlogo.png"

import {Link} from "react-router-dom";

function Homepage(){
  return (
    <div className={HomePageCSS.Homepage}>
      <BriefAboutMe/>
      <Proj
          imagePath = {dinoGif} 
          title = "DEEP Q DINO RUNNER" 
          description = { `This Smart Security Camera uses an AI to detect whether someone is at my door or not, notifying me by text if there is. It uses a binary image classifier trained
          using TensorFlow 2.0 and deployed on a RaspberryPi 3B+ through TensorFlow Lite. `}
          link = "/DQN"
          linkMessage = "See on GitHub"
          left = {false}
      />
      <Proj
          imagePath = {securityCamImg} 
          title = "SMART CCTV" 
          link = "/mlsecuritycam"
          left = {true}
      />
      <Proj
          imagePath = {legoSwerve}
          title = "PROJECT MAGNEMITE"
          link = "/swerve"
          left = {false}
      />
      <Proj
          imagePath = {dunkirk}
          title = "DUNKIRK"
          link = "/Dunkirk"
          left = {true}
      
      />
      <Proj 
          imagePath = {chessLogo} 
          title = "CHESS PLUS PLUS" 
          link = "https://github.com/HDSB-GWS-Brooks-202122-ICS4-01/Chess-Plus-Plus"
          left = {false}
      />
      <Proj
          imagePath = {binarySortVisLogo} 
          title = "BINARY SORT VISUALIZATION" 
          link = "https://github.com/akilpath/Binary-Search-Tree-Visualization"
          left = {true}
      />
    </div>
  );
}

function BriefAboutMe(){
  return (
    <div className={BriefAboutMeCSS.BriefAboutMe}>
      <div style = {{margin: "auto"}}className= {BriefAboutMeCSS.LogoContainer}>
        <img className = {BriefAboutMeCSS.Icon} src = {waterlooLogo} alt = "" style = {{gridRow: "1", gridColumnStart: "1", gridColumnEnd: "3"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {cpplogo} alt = "" style = {{gridRow: "1", gridColumn: "3"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {pythonlogo} alt = "" style = {{gridRow: "1", gridColumn: "4"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {gitlogo} alt = "" style = {{gridColumnStart: "5", gridColumnEnd: "7"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {csslogo} alt = "" style = {{gridRow: "1", gridColumn: "7"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {javalogo} alt = "" style = {{gridRow: "1", gridColumn: "8"}}/>
        
        <img className = {BriefAboutMeCSS.Icon} src = {firstLogo} alt = "" style = {{gridColumnStart: "1", gridColumnEnd: "3"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {pythonlogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {jslogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {htmllogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {waterlooLogo} alt = "UW logo" style = {{gridColumnStart: "6", gridColumnEnd: "8"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {tensorflowLogo} alt = ""/>

        <img className = {BriefAboutMeCSS.Icon} src = {cpplogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {pythonlogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {reactlogo} alt = "" style = {{gridColumnStart: "3", gridColumnEnd: "5"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {csslogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {javalogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {reactlogo} alt = "" style = {{gridColumnStart: "7", gridColumnEnd: "9"}}/>

        <img className = {BriefAboutMeCSS.Icon} src = {pythonlogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {jslogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {htmllogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {firstLogo} alt = "" style = {{gridColumnStart: "4", gridColumnEnd: "6"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {tensorflowLogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {javalogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {cpplogo} alt = ""/>

        <img className = {BriefAboutMeCSS.Icon} src = {solidworksLogo} alt = "" style = {{gridColumnStart: "1", gridColumnEnd: "3"}}/>
        <img className = {BriefAboutMeCSS.Icon} src = {csslogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {javalogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {tensorflowLogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {javalogo} alt = ""/>
        <img className = {BriefAboutMeCSS.Icon} src = {gitlogo} alt = "" style = {{gridColumnStart: "7", gridColumnEnd: "9"}}/>
      </div>
      <div className= {BriefAboutMeCSS.Name}>
        <div>
          <img className = {BriefAboutMeCSS.Photo} src = {myphoto} alt = ""/>
          <h1>Akil Pathiranage</h1>
          <p>
            I'm a Mechatronics Engineering student @ UW with a passion for SWE and ML. 
          </p>
          <p>
            <b>Scroll to see some of my projects!</b>
          </p>
        </div>
      </div>
    </div>
  );
}

function Proj ({title, imagePath, link, left}){

  if (left){
    return (
      <div className= {ProjectCSS.Banner}>
        <div className = {ProjectCSS.descriptionContainer}>
          <h2 className = {ProjectCSS.projectHeader}>{title}</h2>
          <Link to = {link} className = {ProjectCSS.projButton}>View More </Link>
        </div>
        <div className= {ProjectCSS.imageContainer}>
          <img className = {ProjectCSS.image} src = {imagePath} alt = "project" />
        </div>
    </div>
    );
  } else{
    return (
      <div className= {ProjectCSS.Banner}>
          <div className= {ProjectCSS.imageContainer}>
            <img className = {ProjectCSS.image} src = {imagePath} alt = "project" />
          </div>
          <div className = {ProjectCSS.descriptionContainer}>
            <h2 className = {ProjectCSS.projectHeader}>{title}</h2>
            <Link to = {link} className = {ProjectCSS.projButton}>View More </Link>
          </div>
      </div>
    )
  }
}

export default Homepage;
