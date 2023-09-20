import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {

    const [estado,setEstado]=React.useState({
        value:"",
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,


    });

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        console.log("empezando efecto")
        if(!!estado.loading){
            setTimeout(()=>{
                console.log("Haciendo la validacion")
                if(estado.value === SECURITY_CODE){
                    setEstado({
                        ...estado,
                        error:false,
                        loading:false,
                        confirmed:true,

                    });
                    // setError(true)
                }else{
                    setEstado({
                        ...estado,
                        error: true,
                        loading:false,

                    });

                }
                
                setLoading(false);
                console.log("Terminando la validacion")
            },3000)
            
        }
     
        
        console.log("terminando efecto")
    },[estado.loading]);

   if(!estado.deleted && !estado.confirmed){
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>

            {(estado.error && !estado.loading) && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {estado.loading && (
                <p>Loading..</p>
            )}

            <input 

            placeholder="Codigo de seguridad" 
            value={estado.value}

            onChange={(event)=>{
                setEstado({
                    ...estado,
                    value: event.target.value
                })
                // setValue(event.target.value);

            }}
            />
            <button
                onClick={() => {
                    setEstado({
                        ...estado,
                        loading:true,
                    })
                    // setLoading(true)
                }}
            >Comprobar</button>
        </div>
    )
   }else if(!!estado.confirmed && !estado.deleted){
    return(
        <React.Fragment>
            <p>Pedimos confirmacion.¿estas seguro de eliminar?</p>
            <button
            onClick={()=>{
               setEstado({
                ...estado,
                deleted:true,

               });
            }}>si, eliminar</button>
            <button
             onClick={()=>{
                setEstado({
                 ...estado,
                 confirmed:false,
                 value:'',
 
                });
             }}
            >
                no, me arrepenti
                </button>

        </React.Fragment>
    );
   }else{
    return(
        <React.Fragment>
        <p>eliminado con exito</p>

        <button
             onClick={()=>{
                setEstado({
                 ...estado,
                 confirmed:false,
                 deleted:false,
                 value: '',
 
                });
             }}
            >
                Resetear,volver atras
                </button>

        </React.Fragment>
    )

   }
}
export { UseState };