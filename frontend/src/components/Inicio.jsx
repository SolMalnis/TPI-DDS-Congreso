import { Link } from "react-router-dom"

function Inicio() {
    return ( 
      <div className="p-5 rounded" style={{backgroundColor:"lightgray"}} >
        Este es el inicio
        <Link to="/articulos" className="btn btn-lg btn-primary">
            <i className="fa fa-search"></i> Ver Articulos
        </Link>
    </div>
  
  
    )}
  
  export default Inicio