import React from 'react';
import HomePageCSS from "./css/Homepage.module.css";
import BriefAboutMeCSS from "./css/BriefAboutMe.module.css";
import ProjectCSS from "./css/Project.module.css";
import LinksCSS from "./css/Links.module.css";

import dunkirk from "./images/dunkirk.JPG";
import legoSwerve from "./images/legoSwerve.jpg"
import chessLogo from "./images/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import ghostSurvivalLogo from "./images/ghostsurvival.jpg";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";
import myPhoto from "./images/irelandphoto.JPG";

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
            imagePath = {legoSwerve}
            title = "PROJECT MAGNEMITE"
            description = {`
              Project Magnemite is my most recent project, where I worked in a group of four to develop a differential swerve drive using a
              LEGO Mindstorms EV3 and 3D printed parts. We pushed through the limits of the EV3
              and ended up making an amazing robot that caught the attention of everyone who saw it. 
            `}
            link = "https://github.com/Francis-Bui/LegoSwerve"
            linkMessage = "See on GitHub"
            left = {true}
        />
        <Project 
            imagePath = {dunkirk}
            title = "DUNKIRK"
            description = {`
              Dunkirk is Team 5409's 2022 robot. This robot is our most succesful robot yet, securing not only the first district win for the team ever,
              but also two more wins and placing us third in the province, qualifying us for worlds. I played a heavy role in testing the robot, developing
              the robot subsystems and tuning the control systems of the robot. The hard work of our team allowed us to make our name in the FRC scene and also
              win two Innovation in Controls awards. 
            `}
            link = ""
            linkMessage = ""
            left = {false}
        
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
            left = {true}
        />
        <Project
            imagePath = {ghostSurvivalLogo} 
            title = "GHOST SURVIVAL" 
            description = { `Ghost Survival is a Zombies style game I made in my for my final project in 11th grade. It is written in Python and uses Panda3D to
            to render the 3D environment and the ghosts. As the game progresses, it gets much more difficult as more ghosts spawn in and their health increases.`}
            link = "https://github.com/akilpath/GhostSurvival"
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

  render() {
    return (
      <div ref = {this.ref} className={BriefAboutMeCSS.BriefAboutMe}>
        <div ref = {this.paraRef} className={BriefAboutMeCSS.Intro}>
            <p>
              My name is Akil, <br/><br/> I'm a Mechatronics Engineering student at the University of Waterloo with a passion for
              software development and robotics.
              <br/>
              <br/>
              I've worked in Java, JavaScript, Python, C++, C and I also built this website using React.js. In my free time I like to take
              on new projects and learn new frameworks.
              <br/>
              <br/>
              <b>
              Scroll down to take a look at some of my past projects.
              </b>
            </p>
        </div>
        <img className = {BriefAboutMeCSS.MyPhoto} src = {myPhoto} alt = "Akil Pathiranage" />
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
        } else {
          this.outView()
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    })
    projObserver.observe(this.bannerRef.current)
    this.outView();
  }

  render() {
    if(this.left){
      return (
        <div className= {ProjectCSS.Banner} ref  = {this.bannerRef}>
          <img className = {ProjectCSS.image} src = {this.imagePath} ref = {this.imageRef} alt = "project" />
          <div className = {ProjectCSS.descriptionContainer} ref = {this.descContainerRef}>
            <h2 className = {ProjectCSS.projectHeader}>{this.title}</h2>
            {this.getElements()}
          </div>
      </div>
      );
    } else {
      return (
        <div className= {ProjectCSS.Banner} ref  = {this.bannerRef}>
          <div className = {ProjectCSS.descriptionContainer} ref = {this.descContainerRef}>
            <h2 className = {ProjectCSS.projectHeader}>{this.title}</h2>
            {this.getElements()}
          </div>
          <img className = {ProjectCSS.image} src = {this.imagePath} ref = {this.imageRef} alt = "project" />
      </div>
      );
    }

    
  }

  getElements(){
    let getLink = (linkUrl) => {
      if(linkUrl === ""){
        return null
      } else{
        return (<a className = {ProjectCSS.projButton} href = {this.link}>{this.linkMessage}</a>)
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
        <a href = "https://www.linkedin.com/in/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {linkedinLogo} alt = "Linkedin logo"/></a>
        <a href = "https://github.com/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {githubLogo} alt = "github logo" /></a>
      </div>
    )
  }
}

export default Homepage;
