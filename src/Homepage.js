import React, { useRef } from 'react';
import './Homepage.css';
import gradPhoto from "./images/graduationphoto.JPEG";
import chessLogo from "./images/chesspluspluslogo.jpg";
import binarySortVisLogo from "./images/binarysortvislogo.jpg";
import ghostSurvivalLogo from "./images/ghostsurvival.jpg";

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.headerRef = React.createRef();
    this.briefAboutMeRef = React.createRef();
    this.cardsHeaderRef = React.createRef();
    this.cardsRef = React.createRef();
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
      threshold: 0.5
    })

    observer.observe(this.headerRef.current);
    observer.observe(this.briefAboutMeRef.current);
    observer.observe(this.cardsHeaderRef.current);
    observer.observe(this.cardsRef.current);
  }

  render(){
    return (
      <div className="Homepage">
        <header className={"Homepage-header"} ref = {this.headerRef}>
          <h1>Hey!</h1>
          <h1>I'm Akil</h1>
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
          ]}
          linkMessages={[
          ]}
        />
      </div>
    );
  }
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavigationBar">
        <button className="button" onClick={this.goToHome}>HOME </button>
        <button className="button" onClick={this.goToBio}>ABOUT ME</button>
        <button className="button" onClick={this.goToBio}>PROJECTS</button>
        <button className="button" onClick={this.goToBio}>CONTACT ME</button>

      </div>
    );
  }

  goToHome() {}

  goToBio() {}

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
          <p><b>
            I'm a first year Mechatronics Engineering student at the University of Waterloo. I have a passion for robotics and
            engineering. I'm an experienced programmer, fluent in Java and Python. I have also have some experience with React, JavaScript and C++. 
            <br/>Continue down below to see some of my projects!
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
    this.titles = props.titles.slice();
    this.descriptions = props.descriptions.slice();
    this.positionEnd = props.descriptions.length - 1;
    this.state = {
      pos: 0,
    }

    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);

    this.ref = this.props.refProp;
  }

  render() {
    return (
      <div className={"Cards"} ref = {this.ref}>
        <button className="LeftArrow" onClick={this.previousCard}></button>
        <div className="Card">
          <img className = "CardImage" src = {this.props.cardImagePaths[this.state.pos]}/>
          <h1 className="CardsTitle">{this.props.titles[this.state.pos]}</h1>
          <p className="CardsDescription">{this.props.descriptions[this.state.pos]}</p>
          <a href = {this.props.links[this.state.pos]} target = "_blank">{this.props.linkMessages[this.state.pos]}</a>
    
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

export default Homepage;
