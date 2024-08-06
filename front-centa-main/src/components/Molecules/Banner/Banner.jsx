import React from "react";
import './Banner.css';

const Banner = ({ src, Titulo, Subtitulo, Parrafo }) => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1 className="banner-title">{Titulo}</h1>
                <h2 className="banner-subtitle">{Subtitulo}</h2>
                <p className="banner-description">{Parrafo}</p>
            </div>
            <img src={src} alt="Banner" className="banner-image" />
        </div>
    );
};

export default Banner;
