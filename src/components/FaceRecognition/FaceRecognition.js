import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="Face-recognition center">
            <img src={imageUrl} alt="" id="inputImage"></img>
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    )
}

export default FaceRecognition;