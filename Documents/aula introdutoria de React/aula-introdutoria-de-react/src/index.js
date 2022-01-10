import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteComProps from './componentes/ComponenteComProps';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import './index.css';

ReactDOM.render(
  <div>
    <PrimeiroComponente/>
    <ComponenteComProps nome = "Larissa" cargo = "Dev" />
  </div>
  ,
  document.getElementById('root')
);

