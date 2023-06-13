import React from 'react';
import HomePageCSS from "./css/Homepage.module.css";
import BriefAboutMeCSS from "./css/BriefAboutMe.module.css";
import ProjectCSS from "./css/Project.module.css";
import LinksCSS from "./css/Links.module.css";

import dunkirk from "./images/dunkirk.JPG";
import legoSwerve from "./images/legoSwerve.jpg"
import chessLogo from "./images/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import securityCamImg from "./images/securitycam.jpg";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";

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
            imagePath = {securityCamImg} 
            title = "SMART CCTV" 
            description = { `This Smart Security Camera uses an AI to detect whether someone is at my door or not, notifying me by text if there is. It uses a binary image classifier trained
            using TensorFlow 2.0 and deployed on a RaspberryPi 3B+ through TensorFlow Lite. `}
            link = "https://github.com/akilpath/PiSecurityCamera"
            linkMessage = "See on GitHub"
            left = {true}
        />
        <Project
            imagePath = {legoSwerve}
            title = "PROJECT MAGNEMITE"
            description = {`
              Project Magnemite is a differential swerve drive robot created usings a Lego Mindstorms EV3 and 3D printed components. This was built by me and three other
              FRC alumni as our final project for our first year Mechatronics course.
            `}
            link = "https://github.com/Francis-Bui/LegoSwerve"
            linkMessage = "See on GitHub"
            left = {false}
        />
        <Project 
            imagePath = {dunkirk}
            title = "DUNKIRK"
            description = {`
              Dunkirk is Team 5409's 2022 robot. This robot is our most succesful robot yet, secured three district wins for our team, placed us 3rd in the
              province and qualified us for the World Championships. I played a heavy role in testing the robot, developing
              the robot subsystems and tuning the control systems of the robot. The hard work of our team allowed us to make our name in the FRC scene and also
              win two Innovation in Controls awards. 
            `}
            link = ""
            linkMessage = ""
            left = {true}
        
        />
        <Project 
            imagePath = {chessLogo} 
            title = "CHESS PLUS PLUS" 
            description = { `Chess Plus Plus is a user friendly chess application my friend and I 
              built using JavaFX during our senior year computer science course. It supports full chess gameplay against 
              someone through pass and play, against a computer, or online. It also has accounts to keep track of game stats and the ability to save games
              locally to continue them later.`}
            link = "https://github.com/HDSB-GWS-Brooks-202122-ICS4-01/Chess-Plus-Plus"
            linkMessage = "See on GitHub"
            left = {false}
        />
        <Project 
            imagePath = {binarySortVisLogo} 
            title = "BINARY SORT VISUALIZATION" 
            description = { `This program is a simple program to help visualize a binary search tree, how nodes are inserted into the tree and how an in order traversal is
            performed. It is built in Java using JavaFX. It allows the user to modify the amount of nodes in the tree, generate random arrays to sort
            using the BST while giving the user the ability to step through the sorting process, or to watch the sort happen at a customized speed.`}
            link = "https://github.com/akilpath/Binary-Search-Tree-Visualization"
            linkMessage = "See on GitHub"
            left = {true}
        />
        <Links refProp = {this.linksRef}/>
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.fadeIn();
        } else{
          this.fadeOut();
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.9
    })

    observer.observe(this.ref.current);
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
    this.color = props.col
    this.imagePath = props.imagePath
    this.linkMessage = props.linkMessage
    this.description = props.description
    this.link = props.link

    this.left = props.left;
    this.bannerRef = React.createRef();
    this.imageRef = React.createRef();
    this.descContainerRef = React.createRef();
    this.inView = this.inView.bind(this);
    this.outView = this.outView.bind(this);
    this.getElements = this.getElements.bind(this);
    this.state = {displayDesc: props.displayDesc};
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
    this.setState({displayDesc: false})
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
      threshold: 0.5
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
            {this.getElements()}
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
          {this.getElements()}
        </div>
        
    </div>
    );
    }
  }

  getElements(){
    let getLink = (linkUrl) => {
      if(linkUrl === ""){
        return null
      } else{
        return (<a className = {ProjectCSS.projButton} href = {this.link} target = "_blank" rel = "noopener noreferrer">{this.linkMessage} </a>)
      }

    }

    if(!this.state.displayDesc){
      return (
        <button className= {ProjectCSS.projButton} onClick = {() => this.setState({displayDesc: true})}>View more</button>
      )
    } else{
      return (
        <div>
          <p className = {ProjectCSS.description}>
              {this.description}
          </p>
          <div style = {{display: 'flex'}}>
            <button className= {ProjectCSS.projButton} onClick = {() => this.setState({displayDesc: false})}>Hide</button>
            {getLink(this.linkMessage)}
          </div>
        </div>
      )
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
