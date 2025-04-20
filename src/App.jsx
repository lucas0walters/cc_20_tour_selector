import { useState } from "react";
import TourList from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

function App() {
    const [tours, setTours] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState("");

    // Function to remove a tour from the list
    const onRemove = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    // Filter tours based on the selected destination
    const filteredTours = selectedDestination
        ? tours.filter((tour) => tour.name === selectedDestination)
        : tours;

    return (
        <>
            <h1>Tour Explorer</h1>
            <DestinationSelector
                tours={tours}
                onDestinationChange={setSelectedDestination}
            />
            <TourList tours={filteredTours} setTours={setTours} onRemove={onRemove} />
        </>
    );
}

export default App;
