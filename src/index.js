import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';

import ProjectMagnemite from './pages/projMagnemite/ProjectMagnemite'
import DQN from './pages/dqn/DQN'
import MLCam from './pages/mlsecuritycam/MLCam'
import Tictactoe from './pages/tictactoe/tictactoe'

import reportWebVitals from './reportWebVitals';

import NavCSS from './css/NavigationBar.module.css'
import LinksCSS from "./css/Links.module.css";
import linkedinLogo from "./images/linkedInLogo.png";
import githubLogo from "./images/githubLogo.png";

import {HashRouter, Routes, Route, Link} from "react-router-dom";
import Dunkirk from './pages/Dunkirk/Dunkirk';

const root = ReactDOM.createRoot(document.getElementById('root'));
//testss
class NavigationBar extends React.Component{

  render() {
    return (
      <div className = {NavCSS.Container}>
        <Link to = "/" className={NavCSS.Link}>HOME</Link>
        {/* <Link to = "/about" className = {NavCSS.Link}>ABOUT</Link> */}
        <div className={NavCSS.ProjDropdown}>
          PROJECTS
          <div className={NavCSS.ProjDropdownContent}>
            <Link to = "/DQN" className={NavCSS.ProjLink}>DEEP Q NETWORK</Link>
            <Link to = "/swerve" className={NavCSS.ProjLink}>PROJECT MAGNEMITE</Link>
            <Link to = "/mlsecuritycam" className={NavCSS.ProjLink}>ML SECURITY CAM</Link>
            <Link to = "/Dunkirk" className={NavCSS.ProjLink}>DUNKIRK</Link>
            <Link to = "/Tictactoe" className = {NavCSS.ProjLink}>TIC-TAC-TOE</Link>
          </div>
        </div>
      </div>
    )
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

class ScrollToTop extends React.Component{

  componentDidUpdate(){
    window.scrollTo(0, 0)
    console.log("Ok")
  }

  render() {
    return (<div></div>)
  }
}

root.render(
  <React.StrictMode>
      <ScrollToTop />
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route index path= "/" element = {<Homepage/>}/>
          <Route path = "/swerve" element = {<ProjectMagnemite/>}/>
          <Route path = "/DQN" element = {<DQN/>}/>
          <Route path = "/mlsecuritycam" element = {<MLCam/>}/>
          <Route path = "/Dunkirk" element = {<Dunkirk/>}/>
          <Route path = "/Tictactoe" element = {<Tictactoe />} />
        </Routes>
        <Links/>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
