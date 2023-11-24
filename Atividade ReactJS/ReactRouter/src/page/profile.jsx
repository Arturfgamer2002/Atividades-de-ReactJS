import { Link, useParams } from "react-router-dom";
import "/src/page/profile.css"

const Profile = () => {
  const { slug } = useParams();
  return (
    <>
      <Link className="Link" to="/home">Voltar Para a Pagina Anterior</Link>
      {slug ? <p>Perfil de{slug} </p> : <p>Perfil não encontrado</p>}
    </>
  );
}; 

export default Profile; 