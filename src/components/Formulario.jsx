import react,{useState} from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`

    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`
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

const Formulario = () =>{

    const [datos, guardarDatos] = useState({
        marca:'',
        year:'',
        plan:'basico'
    })

    //Extraer los valores:

    const {marca,year,plan} = datos;

    //Leer los datos del formulario y colocarlos en el state:



    return (

        <form>
            <Campo>
                <Label> Marca </Label>
                    <Select
                        name="marca"
                        value={marca}
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
                <Label>Plan </Label>
                <InputRadio type='radio' name='plan'value='basico' checked={plan == 'basico'}/>Basico
                <InputRadio type='radio' name='plan'value='completo' checked={plan == 'completo'}/>Completo              
            </Campo>
            <Button type='button'>Cotizar</Button>
        </form>

    );
    
}

export default Formulario;