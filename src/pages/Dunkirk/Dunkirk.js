import React from 'react'
import ProjectCSS from "./proj.module.css"

import mainProjImg from "./dunkirk.JPG"

import provincialBanner from "./2022 Provincial Championship.png"
import humber from "./2022 Humber.png"
import humberTwo from "./2022 Humber II.png"
import york from "./2022 York.png"
import yorkTwo from "./2022 York II.png"
import stMary from "./2022 St Mary.png"
import stMaryTwo from "./2022 St Mary II.png"


class Dunkirk extends React.Component{

    render(){

        return (
            <div className={ProjectCSS.Container}>
                <h1 className={ProjectCSS.Title}>Dunkirk</h1>
                <img className = {ProjectCSS.MainImage} src = {mainProjImg} alt = ""/>
                <p className={ProjectCSS.p}>Dunkirk is Team 5409's robot from the 2022 FIRST Robotics season. 
                </p>

                <p className={ProjectCSS.p}>This robot made records for our team, winning all three district events we competed at, placed us 3rd overall
                in the province and for the first team in team history, qualified us for world championships. This robot established Team 5409's name in the FRC scene.</p>

                <p className = {ProjectCSS.p}>
                    This robots performance was the result of the unbelievable dedication of our team and our unstoppable desire to win. The robot consisted of multiple
                    complex and robust subsystems working together. You can watch the teaser video of the robot below. 
                </p>
                <iframe width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/_PVtUcRWT0Q" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen/>

                <h2 className={ProjectCSS.SubHeading}>
                    Awards
                </h2>
                <img className = {ProjectCSS.AwardBanner} src = {provincialBanner} alt = ""/>
                <img className = {ProjectCSS.AwardBanner} src = {humber} alt = "" />
                <img className = {ProjectCSS.AwardBanner} src = {humberTwo} alt = ""/>
                <img className = {ProjectCSS.AwardBanner} src = {york} alt = ""/>
                <img className = {ProjectCSS.AwardBanner} src = {yorkTwo} alt = ""/>
                <img className = {ProjectCSS.AwardBanner} src = {stMary} alt = ""/>
                <img className = {ProjectCSS.AwardBanner} src = {stMaryTwo} alt = ""/>

            </div>
        )
    }
}

export default Dunkirk;