import react,{useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularMarca,obtenerPlan} from '../Helper';

const Campo = styled.div`

    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`

    display:block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #04deff;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`

    margin : 0 1rem;

`;
const Button =   styled.button`

    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.5s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;   
        background-color: #34edfecc; 
    }

`;
const Error = styled.div`

    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;

`;

const Formulario = ({guardarResumen, guardarCargando}) =>{

    const [datos, guardarDatos] = useState({
        marca:'',
        year:'',
        plan:'basico'
    })

    const [error,setError] = useState(false);

    //Extraer los valores:

    const {marca,year,plan} = datos;

    //Leer los datos del formulario y colocarlos en el state:

    const obtenerInformacion = e =>{

        guardarDatos(
            {
                ...datos,
                [e.target.name] : e.target.value
            }
        )

    }

    //Cuando el usuario presione buttom
    const cotizarSeguro = e =>{

        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() ===  ''){
            setError(true);
            return;
        }

        setError(false);

        // Una base de 2000
        let resultado = 2000;

        //Obtener la diferencia de año
        
        const diferencia = obtenerDiferenciaYear(year);
        
        //Disminuye
        //Por cada año hay que restar un 3% del valor 
        resultado-= ((resultado*0.03) *diferencia); 

        //Aumenta
        // Americano 15%
        //Asiatico 5%
        // Europeo 30%
        resultado *= calcularMarca(marca);

        //Basico aumenta 20%
        //Amplio 50%
        resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2);

        guardarCargando(true);

        setTimeout(() =>{

            //Elimina el Spinner
            guardarCargando(false);

            //Pasa la informacion al componente original
            guardarResumen({               
                cotizacion: resultado,
                datos: datos,
            })

        }, 3000)

        

    }

    return (

        <form
            onSubmit={cotizarSeguro}
        >
            {error ?<Error>Es necesario que llene todos los espacios</Error> :null}
            <Campo>
                <Label> Marca </Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value="">---Seleccione---</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>               
            </Campo>

            <Campo>
                <Label> Año </Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtenerInformacion}
                    >
                    <option value="">---Seleccione---</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label> Plan </Label>
                <InputRadio type='radio' name='plan'value='basico' checked={plan === 'basico'} onChange={obtenerInformacion}/>Basico
                <InputRadio type='radio' name='plan'value='completo' checked={plan === 'completo'} onChange={obtenerInformacion}/>Completo              
            </Campo>
            <Button type='submit'>Cotizar</Button>
        </form>

    );
    
}

export default Formulario;