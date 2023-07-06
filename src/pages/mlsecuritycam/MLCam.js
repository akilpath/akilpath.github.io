import React from 'react'
import ProjectCSS from "./proj.module.css"

import mainProjImg from "./securitycam.jpg"
import modelOneData from "./training_accuracy.png"


function MLCam (){
    return (
        <div className={ProjectCSS.Container}>
            <h1 className={ProjectCSS.Title}>ML Security Cam</h1>
            <img className = {ProjectCSS.MainImage} src = {mainProjImg}/>
            <p className={ProjectCSS.p}>Using a Raspberry Pi running a TensorFlow Lite inference, a custom dataset and a binary image classifier, 
            this security camera detects people at my door. 
            </p>

            <p className={ProjectCSS.p}>
                I started by creating a case for the Raspberry Pi and the camera module using SOLIDWORKS. Then I 3D printed this case and put it all together.
                In the image above you can see simple assembly as an exploded view.
            </p>

            <p className={ProjectCSS.p}>Currently in this project, I've trained my first model on a dataset of over 1000 images and achieved a 
            validation accuracy of over 97%. I'm currently in the process of testing this model and collecting more images to improve the models
            performance in different times of day, weather and environments.</p>

            <p className = {ProjectCSS.p}>
                The model uses a CNN that takes a 500x500 rgb image as an input. During training, a random brightness layer and random contrast layer is used
                to simulate different weather/environments. Dropout layers are also used to reduce overfitting.
            </p>

            <p className = {ProjectCSS.p}>
                Here is an image of the accuracy and loss during training.
            </p>
            <img className={ProjectCSS.Figure} src = {modelOneData}/>

            <p className={ProjectCSS.p}>
            The current code is available on my {" "} 
            <a href = "https://github.com/akilpath/PiSecurityCamera" target = "_blank" rel = "noopener noreferrer" >
                GitHub
            </a>
            </p>
        </div>
    )
}

export default MLCam;