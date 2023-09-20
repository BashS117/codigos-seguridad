import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        console.log("empezando efecto")
        setTimeout(()=>{
            console.log("Haciendo la validacion")
            setLoading(false);
            console.log("Terminando la validacion")
        },3000)
        
        
        console.log("terminando efecto")
    },[loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>

            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Loading..</p>
            )}

            <input placeholder="Codigo de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    )
}
export { UseState };