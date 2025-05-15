import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

//TourList is responsible for fetching and rendering a list of tours.
const TourList = ({ tours, setTours, onRemove }) => {
    //State to manage loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Function to fetch tour data from the API
    const fetchTours = () => {
        fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent('https://course-api.com/react-tours-project'))
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch tours");
                }
                return response.json();
            })
            .then((data) => {
                setTours(data); // Setting the fetched data to global state
                setError(false); // Reset error state if successful
            })
            .catch((error) => {
                setError(true);
                console.log(error); // Logging the error to the console
            })
            .finally(() => {
                setLoading(false);
            });
    };

    //Calling the fetch function on component mount
    useEffect(() => {
        fetchTours();
    }, []); //Use useEffect to call the API

    //Render loading state
    if (loading) {
        return <h2>Loading...</h2>;
    }

    //Render error state
    if (error) {
        return <h2>Something went wrong...</h2>;
    }

    //Render if no tours are available
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours} className="refresh-btn">Refresh</button>
            </div>
        );
    }

    //Render the list of tours
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id} //Render each tour using map() with a unique key prop.
                        {...tour} //Pass individual tour data to the TourCard component.
                        onRemove={onRemove} //Passing the remove function to each TourCard
                    />
                );
            })}
        </section>
    );
};

export default TourList;