import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css"

function NavBar(){
    return (
        <div className="navBarContainer">
            <h1>TiendaMia</h1>
            <div className="linksContainer">
                <a href="../public/index.html">Inicio</a>
                <a href="../public/index.html">Historial</a>
                <a href="../public/index.html">Perfil</a>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;