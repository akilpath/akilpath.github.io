import React from 'react'
import ProjectCSS from "./proj.module.css"

import mainProjImg from "../../images/legoSwerve.jpg"


class ProjectMagnemite extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
            <div className={ProjectCSS.Container}>
                <h1 className={ProjectCSS.Title}>Project Magnemite</h1>
                <img className = {ProjectCSS.MainImage} src = {mainProjImg}/>
                <p className={ProjectCSS.p}>Project Magnemite is a Differential Swerve Drive built using only 3D printed components and Lego EV3 electronics.
                </p>

                <p className={ProjectCSS.p}>This was my 1st year final project that I worked on alongside a group of three other FRC alumni. We chose this project to challenge 
                ourselves and show ourlove for FIRST Robotics. </p>
                <h2 className={ProjectCSS.SubHeading}>
                    What is a Differential Swerve Drive?
                </h2>
            </div>
        )
    }
}

export default ProjectMagnemite;