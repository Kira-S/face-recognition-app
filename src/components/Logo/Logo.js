import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height:170, width: 170 }} >
                <div className="Tilt-inner">
                    <img src={brain} alt="logo"></img>
                </div>
            </Tilt>   
        </div>
    )
}

export default Logo;