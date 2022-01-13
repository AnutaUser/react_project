import React, {useEffect, useState} from 'react';

import Flight from "../Flight/Flight";

const Flights = () => {
    let [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(flights => flights.json())
            .then(flights => setFlights(flights.filter (flights => flights.launch_year!=='2020')))
    })
    return (
        <div>
            {flights.map(flights => <Flight
                key={flights.mission_name}
                mission_name={flights.mission_name}
                launch_year={flights.launch_year}
                mission_patch_small ={<img src={flights.links.mission_patch_small} alt="mission_patch"/>}
            />)}
        </div>
    )
};

export default Flights;