import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        
        
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ejemplo01"> Ejemplo01</Link></li>
                <li><Link to="/Ejemplo02"> Ejemplo02</Link></li>
                <li><Link to="/Ejemplo03"> Ejemplo03</Link></li>
                <li><Link to="/Ejemplo04"> Ejemplo04</Link></li>
                <li><Link to="/Ejemplo05"> Ejemplo05</Link></li>



            </ul>
        </nav>
        
        
    )
}

export default Nav