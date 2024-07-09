import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../componentes/Props";
const nombre2 = 'laura'
const frutas = ['manzana', 'banana', 'naranja','palta']
const equipos = ['argentina', 'colombia', 'uruguay', 'canada']

 const cambiarValor  = valor =>{
    console.log(valor)
} 

const Ejemplo01 = (props) => {
    return (
        <div>
            <h1>ejemplos de propiedades</h1>
            <EjemploProps1 nombre='Lucero'/>
            <EjemploProps1 nombre= {nombre2}/>
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={equipos} />
            <EjemploProps3 titulo='Hola soy el titulo' subtitulo='subtitulo grande' cuerpo='soy el contenido de esta noticia'/>
            <EjemploProps4 cambiarvalor={cambiarValor}/>
            <EjemploProps4 />
            {/* ese no anda porque si o si necesita una funcion */}
            <EjemploProps4 cambiarvalor={() => {}} />
                {/* como lo requiere si o si podemos pasarle una funcion vacia */}
                <EjemploProps5 eventoClick={cambiarValor}/>

        </div>


    )
}

export default Ejemplo01