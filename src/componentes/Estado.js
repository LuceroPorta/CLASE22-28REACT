import { useState } from "react";
import "../styles/estado.css"
function EjemploEstado (props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className="contenedor">
            <div className="counter">
                <h3>Contador: {counter} </h3>

            </div>

            <div className="botones">
                <button className="success">+</button>
                <button className="error">-</button>

            </div>

        </div>
    )
}

export {EjemploEstado}