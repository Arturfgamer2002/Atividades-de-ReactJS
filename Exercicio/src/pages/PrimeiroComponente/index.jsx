import React from 'react';
import './index.css'

const MeuComponente = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1> 
      <p>{props.texto}</p>
      <img src={props.imagem} alt={props.descricao} />
    </div>
  );
};

export default MeuComponente;