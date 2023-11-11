import React from 'react';
import ReactDOM from 'react-dom';
import MeuComponente from './pages/PrimeiroComponente';

ReactDOM.render(
  <MeuComponente 
    titulo="Bem-vindo a meu mural"
    texto="Artur Felippe Pellenz Ferreira"
    imagem="src\assets\perfil.jpeg"
    descricao="Mão"
  />,
  document.getElementById('root')
);