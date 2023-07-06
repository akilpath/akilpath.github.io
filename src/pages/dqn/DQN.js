import React from 'react'
import ProjectCSS from "./proj.module.css"
import mainProjImg from "./dinogif.gif"


function DQN(){
    return (
        <div className={ProjectCSS.Container}>
            <h1 className={ProjectCSS.Title}>Deep Q Dino Runner</h1>
            <img className = {ProjectCSS.MainImage} src = {mainProjImg}/>
            <p className={ProjectCSS.p}>This project utilizes the Deep Q Learning algorithm to try and learn the google chrome dinosaur game. 
            </p>

            <p className={ProjectCSS.p}>I started this project to learn more about Reinforcement Learning and ways it can be applied.</p>
            <p className={ProjectCSS.p}>Right now, the A.I. performs well on a modified version of the game that I made. You can 
            read a more in depth explanation on my <a href = 'https://github.com/akilpath/DinoBot' target = "_blank" rel = "noopener noreferrer">github</a></p>
        </div>
    )
}

export default DQN;