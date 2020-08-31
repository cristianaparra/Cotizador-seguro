import React, { useState } from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'
import Resumen from './component/Resumen'
import Resultado from './component/Resultado'

import styled from '@emotion/styled';


const Contenedor = styled.div`
max-width: 600px;
margin:0 auto;
`;

const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen} />

        <Resumen
          datos={datos}
        />

        <Resultado 
        cotizacion={cotizacion}/>
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
