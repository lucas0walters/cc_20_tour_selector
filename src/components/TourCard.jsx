import React, { useState } from "react";

//TourCard renders individual tour cards with the tour name, image, and description. It also includes buttons to toggle the visibility of the description and remove the card.

const TourCard = ({ id, name, info, price, image, onRemove }) => {
    //Local state to manage the visibility of the description
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <article className="tour-card">
            {/* Displaying tour information */}
            <h3>{name}</h3>
            <img src={image} alt={name} className="tour-image" />
            <p className="tour-price">${price}</p>

            {/* Displaying tour information with a toggle button */}
            <p className="tour-info">
                {isReadMore ? info : `${info.substring(0, 50)}...`}
                <button onClick={() => setIsReadMore(!isReadMore)} className="read-more-btn">
                    {isReadMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* Button to remove the tour card */}
            <button onClick={() => onRemove(id)} className="remove-btn">
                Not Interested
            </button>
        </article>
    )
}

export default TourCard;