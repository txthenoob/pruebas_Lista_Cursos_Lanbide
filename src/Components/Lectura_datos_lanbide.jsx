import {useState} from "react";

const Lectura_datos_lanbide = () => {
    const [data, setData] = useState({});

    
    const handle_datos_lanbide = () => {
        fetch('https://opendata.euskadi.eus/contenidos/ds_eventos/cursos_jornadas_ivap/opendata/cursos.json')
        .then(response=>{
            if (!response.ok) {
                throw new Error('No info');
            }
            return response.json();            
        })
        .then(data =>{
            setData(data);
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        });        
    }
        
        
        return (
            <>
                <button onClick={handle_datos_lanbide}>Fetch del Json</button>
            </>
        )
}

export default Lectura_datos_lanbide;