import React, {useEffect, useState} from 'react';

import Car from '../Car/Car';
import {carsServices} from "../../services/cars.services";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsServices.getAll().then(value => setCars([...value]))
    }, []);

    return (
        <div>
            {cars.map(car => <Car
            key={car.id}
            car={car}
            />)}
        </div>
    );
};

export default Cars;