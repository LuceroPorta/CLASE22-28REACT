import alumnos from '../data/alumnos.json';

const Ejemplo04 = (props) => {
    console.log(alumnos)
    return (
        <>
            <h3> Ejemplo de carga de un json</h3>
            <ul>
                {
                    alumnos.map(alumno=>(
                    <li key={alumno.id}>{alumno.nombre} {alumno.apellido} {alumno.edad}</li>)
                )
                    
                }
            </ul>
        </>

    )
}

export default Ejemplo04