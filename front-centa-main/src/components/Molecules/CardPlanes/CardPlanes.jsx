import React from "react";
import { FaDumbbell, FaCalendarAlt, FaClock } from "react-icons/fa";
import './CardPlanes.css';

const CardPlanes = ({ title, description, price, imageUrl, features = [], onClick }) => {
    return (
        <div className="card-plan" onClick={onClick}>
            <img src={imageUrl} alt={title} className="card-plan-image" />
            <div className="card-plan-content">
                <h2 className="card-plan-title">{title}</h2>
                <p className="card-plan-description">{description}</p>
                <div className="card-plan-features">
                    {features.length > 0 ? (
                        features.map((feature, index) => (
                            <div className="card-plan-feature" key={index}>
                                {feature.icon}
                                <span className="feature-text">{feature.text}</span>
                            </div>
                        ))
                    ) : (
                        <p>No features available.</p>
                    )}
                </div>
                <div className="card-plan-footer">
                    <div className="card-plan-price">{price}</div>
                    <button className="card-plan-button">Comprar Ahora</button>
                </div>
            </div>
        </div>
    );
};

export default CardPlanes;
