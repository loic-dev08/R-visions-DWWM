import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

function Frontend () {
    const { progression, mettreAJour} = useContext(ProgressContext);

    return (

        <div>
        <h2>React Router : {progression["React Router"]}%</h2>
        <input
         type="range"
         min= "0"
         max= "100"
         value= {progression["React Router"]}
         onChange= {(e) => mettreAJour("React Router", number(e.target.value))}
         
         />
        </div>
    );
}

