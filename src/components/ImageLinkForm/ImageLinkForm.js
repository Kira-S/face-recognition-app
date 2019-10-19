import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className="ImageLinkForm">
            <p>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
                <div className="form">
                    <input className="form-input" type="text" onChange={onInputChange} />
                    <button className="button" onClick={onSubmit}>Detect</button>
            </div>
               
            </div>
        </div>
    )
}

export default ImageLinkForm;