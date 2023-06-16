import React from 'react';
import HomePageCSS from "./css/Homepage.module.css";
import BriefAboutMeCSS from "./css/BriefAboutMe.module.css";
import ProjectCSS from "./css/Project.module.css";
import LinksCSS from "./css/Links.module.css";

import dunkirk from "./pages/Dunkirk/dunkirk.JPG";
import legoSwerve from "./pages/projMagnemite/legoSwerve.jpg"
import chessLogo from "./pages/chess/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import securityCamImg from "./pages/mlsecuritycam/securitycam.jpg";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";
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

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.briefAboutMeRef = React.createRef();
    this.linksRef = React.createRef()
    this.state = {visible: false};
  }

  render(){
    return (
      <div className={HomePageCSS.Homepage}>
        <BriefAboutMe/>
        <Project
            imagePath = {dinoGif} 
            title = "DEEP Q DINO RUNNER" 
            description = { `This Smart Security Camera uses an AI to detect whether someone is at my door or not, notifying me by text if there is. It uses a binary image classifier trained
            using TensorFlow 2.0 and deployed on a RaspberryPi 3B+ through TensorFlow Lite. `}
            link = "/DQN"
            linkMessage = "See on GitHub"
            left = {false}
        />
        <Project
            imagePath = {securityCamImg} 
            title = "SMART CCTV" 
            link = "/mlsecuritycam"
            left = {true}
        />
        <Project
            imagePath = {legoSwerve}
            title = "PROJECT MAGNEMITE"
            link = "/swerve"
            left = {false}
        />
        <Project 
            imagePath = {dunkirk}
            title = "DUNKIRK"
            link = "/Dunkirk"
            left = {true}
        
        />
        <Project 
            imagePath = {chessLogo} 
            title = "CHESS PLUS PLUS" 
            link = "https://github.com/HDSB-GWS-Brooks-202122-ICS4-01/Chess-Plus-Plus"
            left = {false}
        />
        <Project 
            imagePath = {binarySortVisLogo} 
            title = "BINARY SORT VISUALIZATION" 
            link = "https://github.com/akilpath/Binary-Search-Tree-Visualization"
            left = {true}
        />
      </div>
    );
  }
}

class BriefAboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.paraRef = React.createRef();
    this.headerRef = React.createRef();

    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);

    this.iconList = [0,1,2,3,4,5]
  }

  fadeIn = () => {
    this.paraRef.current.classList.add(BriefAboutMeCSS.inView);
    this.paraRef.current.classList.remove(BriefAboutMeCSS.outView);
  }

  fadeOut = () => {
    this.paraRef.current.classList.add(BriefAboutMeCSS.outView);
    this.paraRef.current.classList.remove(BriefAboutMeCSS.inView);
  }

  componentDidMount(){
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.fadeIn();
    //     } else{
    //       this.fadeOut();
    //     }
    //   })
    // }, {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.9
    // })

    // observer.observe(this.ref.current);
  }

  getIcons(n = 0){
    
  }

  render() {
    return (
      <div ref = {this.ref} className={BriefAboutMeCSS.BriefAboutMe}>
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
}

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title
    this.imagePath = props.imagePath
    this.link = props.link

    this.left = props.left;
    this.bannerRef = React.createRef();
    this.imageRef = React.createRef();
    this.descContainerRef = React.createRef();
    this.inView = this.inView.bind(this);
    this.outView = this.outView.bind(this);
  }

  inView = () => {
    // this.imageRef.current.classList.add(ProjectCSS.imageIn);
    // this.imageRef.current.classList.remove(ProjectCSS.imageOut);
    this.descContainerRef.current.classList.add(ProjectCSS.descIn);
    this.descContainerRef.current.classList.remove(ProjectCSS.descOut);
  }

  outView = () => {
    // this.imageRef.current.classList.remove(ProjectCSS.imageIn);
    // this.imageRef.current.classList.add(ProjectCSS.imageOut);
    this.descContainerRef.current.classList.remove(ProjectCSS.descIn);
    this.descContainerRef.current.classList.add(ProjectCSS.descOut);
  }

  componentDidMount() {
    const projObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          this.inView()
        } else{
          this.outView()
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    })
    projObserver.observe(this.bannerRef.current)
    this.outView();
  }

  render() {
    if(this.props.left){
      return (
        <div className= {ProjectCSS.Banner} ref  = {this.bannerRef}>
          <div className = {ProjectCSS.descriptionContainer} ref = {this.descContainerRef}>
            <h2 className = {ProjectCSS.projectHeader}>{this.title}</h2>
            <Link to = {this.link} className = {ProjectCSS.projButton}>View More </Link>
          </div>
          <div className= {ProjectCSS.imageContainer}>
            <img className = {ProjectCSS.image} src = {this.imagePath} ref = {this.imageRef} alt = "project" />
          </div>
      </div>
      );
    } else{
      return (
      <div className= {ProjectCSS.Banner} ref  = {this.bannerRef}>
        <div className= {ProjectCSS.imageContainer}>
          <img className = {ProjectCSS.image} src = {this.imagePath} ref = {this.imageRef} alt = "project" />
        </div>
        <div className = {ProjectCSS.descriptionContainer} ref = {this.descContainerRef}>
          <h2 className = {ProjectCSS.projectHeader}>{this.title}</h2>
          <Link to = {this.link} className = {ProjectCSS.projButton}>View More </Link>
        </div>
        
    </div>
    );
    }
  }

}

class Links extends React.Component {
  constructor(props){
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className = {LinksCSS.Links} ref = {this.ref}>
        <a href = "https://www.linkedin.com/in/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {linkedinLogo} alt = "linked in logo"/></a>
        <a href = "https://github.com/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {githubLogo} alt = "github logo" /></a>
      </div>
    )
  }
}

export default Homepage;
