import react,{useState} from   'react';
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import styled from '@emotion/styled';
import Resumen from './components/Resumen.jsx'

const Contenedor = styled.div`

  max-width: 600px;
  margin: 0 auto;
  
`;
const ContenedorFormulario = styled.div`

  background-color: #FFF;
  padding: 3rem;


`;

function App() {

  const [resumen, guardarResumen] = useState({

    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: ''
    }
  });
  // const { datos } = resumen; del ejemplo de la opcion 1
  
  //Extraer datos (opcion 2)
  const { datos } = resumen; //Extrae solo la parte del objeto

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />

      <ContenedorFormulario>
      
      <Formulario 
        guardarResumen={guardarResumen}
      />

      <Resumen datos={datos} />
      {/* Opcion para mostrar Resumen */}
      {/* {datos ? (<Resumen />) : null} */}
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
