import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        console.log("empezando efecto")
        if(!!loading){
            setTimeout(()=>{
                console.log("Haciendo la validacion")
                if(value!==SECURITY_CODE){
                    setError(true)
                }
                
                setLoading(false);
                console.log("Terminando la validacion")
            },3000)
            
        }
     
        
        console.log("terminando efecto")
    },[loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>

            {(error && !loading) && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Loading..</p>
            )}

            <input 

            placeholder="Codigo de seguridad" 
            value={value}
            onChange={(event)=>{
                setValue(event.target.value);

            }}
            />
            <button
                onClick={() => {
                    setLoading(true)}}
            >Comprobar</button>
        </div>
    )
}
export { UseState };