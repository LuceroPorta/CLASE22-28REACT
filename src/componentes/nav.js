import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        
        
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ejemplo01"> Ejemplo01</Link></li>

            </ul>
        </nav>
        
        
    )
}

export default Nav