import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import ProjectMagnemite from './pages/ProjectMagnemite'
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
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
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }

}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage/>,
      children: [
        {
          path: "/projects/ProjectMagnemite",
          element: <ProjectMagnemite />
        }

      ]
    }
  ]
)

root.render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
