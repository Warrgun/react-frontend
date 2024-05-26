import React, {useState} from "react";

const Carlist = () =>{

    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({year: new Date().getFullYear(), make: "", model: ""});
    
    const addCar = () =>{
        setCars(prevCars => [...prevCars,car]);
        setCar({year: new Date().getFullYear(), make: "", model: ""})
    };

    const carHandler = (e) =>{
        const {name, value} = e.target
        setCar(c =>({...c, [name]:value}))
    };

    const removeCar = (index) => setCars(c => c.filter((_,i) => i !==index));


    return(
        <div>
            <h1>List of cars</h1>
            <ul>
                {cars.map((elemnt, index) => <li key={index} style={{cursor:"pointer"}} onClick={() =>removeCar(index)}>{elemnt.year} {elemnt.make} {elemnt.model}</li>)}
            </ul>
            <input name ="year" type="number" value={car.year} onChange={carHandler}/><br/>
            <input name ="make" type="text" value={car.make} onChange={carHandler} placeholder="Make of the car"/><br/>
            <input name ="model" type="text" value={car.model} onChange={carHandler} placeholder="Model of the car"/><br/>
            <button onClick={addCar}>Add car</button>
        </div>
    );
}

export default Carlist