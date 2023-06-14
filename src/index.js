import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import ProjectMagnemite from './pages/ProjectMagnemite'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter, Routes, Route, createHashRouter} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

class Nav extends React.Component{

  constructor(props){
    super(props)
  }

  render() {

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">ProjectMagnemite</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }

}

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/ProjectMagnemite",
      element: <ProjectMagnemite />,
    }
  ]
)

root.render(
  <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route index exact path= "/" element = {<Homepage/>}/>
          <Route exact path = "/#proj" element = {<ProjectMagnemite/>}/>  
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
