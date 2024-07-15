import '../styles/ejemplo05.css';
import { useEffect, useState } from 'react';

const Ejemplo05 = (props) => {
    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }

        cargarDatos();
    }, [])

    return (
        <>
            <h2>carga de datos a traves de un API </h2>

            {cargando ? <p>Cargando...</p> : (
                <div className="personajes">
                    {personajes.map(personaje => (

                        <div className="personaje">
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name}/>

                                </div>
                                <div className="datos">
                                    <h6>Humano: si o no</h6>
                                    <h6>Vivo: si o no </h6>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            )}
        </>
    )
}

export default Ejemplo05