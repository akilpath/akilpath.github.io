import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import ProjectMagnemite from './pages/projMagnemite/ProjectMagnemite'
import reportWebVitals from './reportWebVitals';
import NavCSS from './css/NavigationBar.module.css'
import {HashRouter, Routes, Route, createHashRouter, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

class NavigationBar extends React.Component{

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className = {NavCSS.Container}>
        <Link to = "/" className={NavCSS.Link}>HOME</Link>
        <Link to = "/about" className = {NavCSS.Link}>ABOUT</Link>
        <Link to = "/proj" className={NavCSS.Link}>PROJECT</Link>
      </div>
    )
  }
}


root.render(
  <React.StrictMode>
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route index path= "/" element = {<Homepage/>}/>
          <Route path = "/proj" element = {<ProjectMagnemite/>}/>  
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
