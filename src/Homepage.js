import React, { useRef } from 'react';
import './Homepage.css';
import gradPhoto from "./images/graduationphoto.JPEG";
import chessLogo from "./images/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import ghostSurvivalLogo from "./images/ghostsurvival.jpg";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.headerRef = React.createRef();
    this.briefAboutMeRef = React.createRef();
    this.cardsHeaderRef = React.createRef();
    this.cardsRef = React.createRef();
    this.linksRef = React.createRef()
    this.state = {visible: false};
  }

  componentDidMount(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else{
          entry.target.classList.add("fade-out");
          entry.target.classList.remove("fade-in");
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    })

    observer.observe(this.headerRef.current);
    observer.observe(this.briefAboutMeRef.current);
    observer.observe(this.cardsHeaderRef.current);
    observer.observe(this.cardsRef.current);
    observer.observe(this.linksRef.current)
  }

  render(){
    return (
      <div className="Homepage">
        <header className={"Homepage-header"} ref = {this.headerRef}>
          <h1>Hey!<h1 className = {"MyName"}>I'm Akil</h1></h1>
          {/*<NavigationBar />*/}
        </header>
        <BriefAboutMe refProp = {this.briefAboutMeRef}/>
        <h1 className = {"CardsHeader"} ref = {this.cardsHeaderRef}>Here are some of my projects</h1>
        <Cards
          refProp = {this.cardsRef}
          cardImagePaths = {[
            chessLogo, 
            ghostSurvivalLogo, 
            binarySortVisLogo
          ]}
          titles={[
            "Chess++",
            "Ghost Survival",
            "Binary Sort Visualization"
          ]}
          descriptions={[
            `Chess++ is a user friendly, fast and practical chess application me and my friend, Selim, 
            built using JavaFX during our Grade 12 computer science course. It supports full chess gameplay against 
            someone through pass and play, against a computer, or online. It also has accounts to keep track of game stats and the ability to save games
            locally to continue them later.`,
            `Ghost Survival is a Zombies style game I made in 11th grade computer science course. It is written in Python and uses Panda3D to
            to render the 3D environment and the ghosts. As the game progresses, the amount of ghosts increase and their health increases. The game also 
            has the option to use a microbit in the controls scheme.`,
            `This program is a simple program to help visualize a binary search tree, how nodes are inserted into the tree and how an in order traversal is
            performed. It is built in Java using JavaFX. It allows the user to modify the amount of nodes in the tree, generate random arrays to sort
            using the BST while giving the user the ability to step through the sorting process, or to watch the sort happen at a customized speed.`
          ]}
          links={[
            "https://github.com/HDSB-GWS-Brooks-202122-ICS4-01/Chess-Plus-Plus",
            "https://github.com/akilpath/GhostSurvival",
            "https://github.com/akilpath/Binary-Search-Tree-Visualization"
          ]}
          linkMessages={[
            "See on GitHub",
            "See on GitHub",
            "See on GitHub"
          ]}
          backgroundColors = {[
            "#ff6766",
            "#900b0c",
            "#16dffd",
          ]}
        />
        <Links refProp = {this.linksRef}/>
      </div>
    );
  }
}

class BriefAboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.ref = this.props.refProp
  }

  render() {
    return (
      <div className={"BriefAboutMe"} ref = {this.ref}>
        
        <img className="GraduationPhoto" src={gradPhoto} alt="Me from graduation" />
        <div className="Intro">
          <p>
            I'm a first year Mechatronics Engineering student at the University of Waterloo. 
            <br/>
            <br/>
            I have a passion for robotics and
            engineering and I love to take on new projects and challenges.
            <br/>
            <br/>
            I'm experienced in Java, Python and C++. I also built this website using React.js!
            I was a senior programmer for Team 5409 in the 2022 season, and am returning as a programming mentor for this upcoming 2023 season.
            <br/>
            <br/>
            <b>
            Continue down below to see some of my projects!
            </b>
          </p>
        </div>
      </div>
    );
  }
}

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.positionEnd = props.descriptions.length - 1;
    this.state = {
      pos: 0,
    }
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.backgroundColors = props.backgroundColors.slice();

    this.ref = this.props.refProp;
  }

  render() {
    return (
      <div className={"Cards"} ref = {this.ref}>
        <button className="LeftArrow" onClick={this.previousCard}></button>
        <div className="Card" style = {{backgroundColor: this.props.backgroundColors[this.state.pos]}}>
          <img className = "CardImage" src = {this.props.cardImagePaths[this.state.pos]}/>
          <h1 className="CardsTitle">{this.props.titles[this.state.pos]}</h1>
          <a href = {this.props.links[this.state.pos]} target = "_blank"><b>{this.props.linkMessages[this.state.pos]}</b></a>
          <p className="CardsDescription">{this.props.descriptions[this.state.pos]} </p>
        </div>
        <button className="RightArrow" onClick={this.nextCard}></button>
      </div>
    );
  }

  nextCard() {
    if (this.state.pos + 1 > this.positionEnd) return;

    this.setState({
      pos: this.state.pos + 1
    });
  }

  previousCard() {
    if (this.state.pos - 1 < 0) return; 

    this.setState({
      pos: this.state.pos - 1
    });
  }
}

class Links extends React.Component {

  constructor(props){
    super(props)
    this.ref = this.props.refProp

  }


  render(){
    return (
      <div className = "Links" ref = {this.ref}>
        <h1 className = "CardsHeader">Check out my LinkedIn and GitHub!</h1>
        <div className= "LinksContainer">
          <a href = "https://www.linkedin.com/in/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = "LinkImage" src = {linkedinLogo}/></a>
          <a href = "https://github.com/akilpath" target = "_blank" rel = "noopener noreferrer"><img className = "LinkImage" src = {githubLogo}/></a>
        </div>
      </div>
    )
  }

}

export default Homepage;
