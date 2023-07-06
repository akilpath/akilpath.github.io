import React from 'react'
import ProjectCSS from "./proj.module.css"

import mainProjImg from "./legoSwerve.jpg"
import explodedView from "./explodedView.png"


function ProjectMagnemite(){

    return (
        <div className={ProjectCSS.Container}>
            <h1 className={ProjectCSS.Title}>Project Magnemite</h1>
            <img className = {ProjectCSS.MainImage} src = {mainProjImg} alt = ""/>
            <p className={ProjectCSS.p}>Project Magnemite is a Differential Swerve Drive built using only 3D printed components and Lego EV3 electronics.
            </p>

            <p className={ProjectCSS.p}>This was my 1st year final project that I worked on alongside a group of three other FRC alumni. We chose this project to challenge 
            ourselves and show our love for FIRST Robotics. </p>
            <h2 className={ProjectCSS.SubHeading}>
                What is a Differential Swerve Drive?
            </h2>
            <p className={ProjectCSS.p}>A <b>swerve drive</b> is a type of motor configuration that enables regular motor rotation, but also
            orientation of the motor itself. This allows the wheels to "spin on a dime". </p>
            <p className={ProjectCSS.p}> A <b>differential swerve drive</b> is a specific type of swerve drive that
            has both motors connecting to the wheel on the same gear. The motion of the wheels is controlled by varying the speeds of each motor relative to 
            one another.</p>

            <p className={ProjectCSS.p}>
                Here is an exploded view of our swerve module to show how they're connected. You can see both the top gear and bottom gear both drive the
                bevel gear, which then turns the motor axle. This is the principle concept behind the differential swerve module. 
            </p>
            <img src = {explodedView} className={ProjectCSS.Figure} alt = "" />

            <p className={ProjectCSS.p}> This project had several challenges with it. We were limited by the low precision of the motor encoders and the 
            low performance motors that come with the EV3. On top of this the EV3 itself is heavy and has little processing power. Despite all the odds against us,
            we were able to break through these limits and make a solid robot that could move quickly, accurately and follow autonomous routines. </p>

            <p className={ProjectCSS.p}>
                Watch the video below for a demo!
            </p>
            <iframe className = {ProjectCSS.video}
                    src="https://www.youtube.com/embed/txVdN2MEguU" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen/>

        </div>
    )
}

export default ProjectMagnemite;