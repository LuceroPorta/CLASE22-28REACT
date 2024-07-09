const EjemploProps1 = props => {
    return (
        <h3>hola {props.nombre}</h3>
    )

}

const EjemploProps2 = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento} </li>)}
        </ul>
    )

}

const EjemploProps3 = ({ titulo, subtitulo, cuerpo }) => {
    return (
        <div>
            <h4>titulo</h4>
            <h5>subtitulo</h5>
            <p>cuerpo</p>
        </div>
    )
}

const EjemploProps4 = props => {
    return (
        <label> ver en la consola
            <input type="text" onChange={(e) => props.cambiarvalor(e.target.value)} />
        </label>

    )
}

const EjemploProps5 = props => {
    const handerClick = e => {
        if (props.eventoClick){
            props.eventoClick('me cliqueaste')
        }
    }
    return (
        <p><button onClick= {handerClick} >Cliqueame!</button></p >
    )
}

export {
    EjemploProps1,
    EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5
}

