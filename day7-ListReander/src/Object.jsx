import React from "react";

function Object(){
    const Car=[{id:1, brand:"BMW" ,rate:40},
                {id:2,brand:"Audi", rate:45},
                {id:3,brand:"Fortuner", rate:60}];
    const cars =  Car.map(car=><li key={car.id}>{car.brand}</li>)
    
    return <h1>{cars}</h1>



}
export default Object