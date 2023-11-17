import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        
        <Link className="Link" to="/profile">Acessar Perfil</Link>
        
      </ul>
    </nav>
  );
}; 

export default Menu;