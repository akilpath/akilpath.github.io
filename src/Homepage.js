import React from 'react';
import HomePageCSS from "./css/Homepage.module.css";
import BriefAboutMeCSS from "./css/BriefAboutMe.module.css";
import ProjectCSS from "./css/Project.module.css";
import LinksCSS from "./css/Links.module.css";
import legoSwerve from "./images/legoSwerve.jpg"
import chessLogo from "./images/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import ghostSurvivalLogo from "./images/ghostsurvival.jpg";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";

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
            title = "Project Magnemite"
            description = {`
              Project Magnemite is my most recent project, where I worked in a group of four to develop a differential swerve drive using a
              LEGO Mindstorms EV3 and 3D printed parts. We pushed through the limits of the EV3
              and ended up making an amazing robot that caught the attention of everyone who saw it. 
            `}
            link = "https://github.com/Francis-Bui/LegoSwerve"
            linkMessage = "See on GitHub"
        />
        <Project 
            imagePath = {chessLogo} 
            title = "Chess++" 
            description = { `Chess Plus Plus is a user friendly chess application my friend and I 
              built using JavaFX during our senior year computer science course. It supports full chess gameplay against 
              someone through pass and play, against a computer, or online. It also has accounts to keep track of game stats and the ability to save games
              locally to continue them later.`}
            link = "https://github.com/HDSB-GWS-Brooks-202122-ICS4-01/Chess-Plus-Plus"
            linkMessage = "See on GitHub"
        />
        <Project
            imagePath = {ghostSurvivalLogo} 
            title = "Ghost Survival" 
            description = { `Ghost Survival is a Zombies style game I made in my for my final project in 11th grade. It is written in Python and uses Panda3D to
            to render the 3D environment and the ghosts. As the game progresses, it gets much more difficult as more ghosts spawn in and their health increases.`}
            link = "https://github.com/akilpath/GhostSurvival"
            linkMessage = "See on GitHub"
        />
        <Project 
            imagePath = {binarySortVisLogo} 
            title = "Binary Sort Visualization" 
            description = { `This program is a simple program to help visualize a binary search tree, how nodes are inserted into the tree and how an in order traversal is
            performed. It is built in Java using JavaFX. It allows the user to modify the amount of nodes in the tree, generate random arrays to sort
            using the BST while giving the user the ability to step through the sorting process, or to watch the sort happen at a customized speed.`}
            link = "https://github.com/akilpath/Binary-Search-Tree-Visualization"
            linkMessage = "See on GitHub"
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
        <div style = {{display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
          <div ref = {this.paraRef} className={BriefAboutMeCSS.Intro}>
            <h1 className= {BriefAboutMeCSS.HomepageHeader}>
              My name is Akil...
            </h1>
            <p>
              I'm a first year Mechatronics Engineering student at the University of Waterloo. 
              <br/>
              <br/>
              I've been coding for over four years and I have a passion for robotics with an interest in machine learning. 
              <br/>
              <br/>
              I've worked in Java, JavaScript, Python, C++, C and I also built this website using React.js. In my free time I like to take
              on new projects, learn new frameworks and push my limits. 
              <br/>
              <br/>
              <b>
              Scroll down to take a look at some of my past projects.
              </b>
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
    this.tite = props.title
    this.color = props.col
    this.imagePath = props.imagePath
    this.linkMessage = props.linkMessage
    this.description = props.description
    this.link = props.link

    this.bannerRef = React.createRef();
    this.imageRef = React.createRef();
    this.descContainerRef = React.createRef();
    this.inView = this.inView.bind(this);
    this.outView = this.outView.bind(this);
  }

  inView = () => {
    this.imageRef.current.classList.add(ProjectCSS.imageIn);
    this.imageRef.current.classList.remove(ProjectCSS.imageOut);
    this.descContainerRef.current.classList.add(ProjectCSS.descIn);
    this.descContainerRef.current.classList.remove(ProjectCSS.descOut);
  }

  outView = () => {
    this.imageRef.current.classList.remove(ProjectCSS.imageIn);
    this.imageRef.current.classList.add(ProjectCSS.imageOut);
    this.descContainerRef.current.classList.remove(ProjectCSS.descIn);
    this.descContainerRef.current.classList.add(ProjectCSS.descOut);
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
      threshold: 0
    })

    projObserver.observe(this.bannerRef.current)
  }

  render() {
    return (
      <div className= {ProjectCSS.Banner} ref  = {this.bannerRef}>
        <img className = {ProjectCSS.image} src = {this.imagePath} ref = {this.imageRef}/>
        <div className = {ProjectCSS.descriptionContainer} ref = {this.descContainerRef}>
          <p className = {ProjectCSS.description}>
            {this.description}
          </p>
          <a className = {ProjectCSS.projectlink} href = {this.link}>{this.linkMessage}</a>
        </div>
    </div>
    );
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
        <a href = "https://www.linkedin.com/in/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {linkedinLogo}/></a>
        <a href = "https://github.com/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = {LinksCSS.LinkImage} src = {githubLogo}/></a>
      </div>
    )
  }
}

export default Homepage;
