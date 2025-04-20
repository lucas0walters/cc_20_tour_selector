import React, { useState } from "react";

const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState("");

    // Extract unique tour names
    const uniqueDestinations = [
        "All Destinations",
        ...new Set(
            tours.map((tour) => {
                const words = tour.name.split(" "); // Split the name into words
                return words[2] || ""; // Extract the third word, or an empty string if it doesn't exist
            }).filter((destination) => destination) // Remove empty strings
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