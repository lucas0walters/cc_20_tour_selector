import React, { useState } from "react";

const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState("");

    // Extract unique tour names
    const uniqueDestinations = [
        "All Destinations",
        ...new Set(
            tours.map((tour) => {
                return tour.name
            })
        ),
    ];

    // Handle dropdown change
    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination === "All Destinations" ? "" : destination); // Pass the selected destination up
    };

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a Destination: </label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;