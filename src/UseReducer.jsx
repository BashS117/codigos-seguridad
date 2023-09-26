import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {

    const [estado,dispatch]=React.useReducer(reducer,initialState);

   
console.log(estado)
    
    // const onWrite=(newValue )=>{
        
    //     setEstado({
    //         ...estado,
    //         value:newValue,
    //     })
    // }
    





    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    
    const onConfirm = ()=>{
     dispatch({type: actionTypes.CONFIRM})
    }

    const onError =()=>[
        
       dispatch({type:actionTypes.ERROR})
    ]
    const onWrite=(event)=>{
        
       dispatch({type:actionTypes.WRITE, payload: event.target.value})
    }
    const onCheck=()=>{
        
       dispatch({type:actionTypes.CHECK})
    }

    const onDelete=()=>{
        
       dispatch({type:actionTypes.DELETE})
    }


    const onReset=()=>{
       dispatch({type: actionTypes.RESET})
    }



    React.useEffect(()=>{
        console.log("empezando efecto")
        if(!!estado.loading){
            setTimeout(()=>{
                console.log("Haciendo la validacion")
                if(estado.value === SECURITY_CODE){
                    onConfirm();
                    // setError(true)
                }else{
                    onError();

                }
                
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

            onChange={
                // dispatch({type:actionTypes.WRITE, payload:event.target.value});
                onWrite
                // setValue(event.target.value);

            }
            />
            <button
                onClick={
                    onCheck
                  }
            >Comprobar</button>
        </div>
    )
   }else if(!!estado.confirmed && !estado.deleted){
    return(
        <React.Fragment>
            <p>Pedimos confirmacion.¿estas seguro de eliminar?</p>
            <button
            onClick={
                onDelete
            }>si, eliminar</button>
            <button
             onClick={onReset
             }
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
             onClick={
                onReset
             }
            >
                Resetear,volver atras
                </button>

        </React.Fragment>
    )

   }
}


    const initialState = {
        value:"",
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    }

    // const reducer = (state,action)=>{
    // }

    //

    //OBVIOUSLY REDUCER

    // const reducer = (state,action)=>{
    //     if(action.type=== "ERROR"){
    //         return{
    //             ...state,
    //             error: true,
    //             loading: false,
    //         };
    //     }else if (action.type===" CHECK"){
    //         return{
    //             ...state,
    //             loading:true,
    //         };

    //     }
    //     else{
    //         return{
    //             ...initialState,
    //         };
    //     }
    // };

    // ///MOST POPULAR
    // const reducerSwitch=(state,action)=>{
    //     switch(action.type){
    //         case 'ERROR': return{
    //             ...state,error:true,
    //             loading:false,
    //         };
    //         case 'Check':return{
    //             ...state,
    //         loading:true,
    //         };
    //         default: return {
    //             ...state,
    //         }
    //     }
    // }


    const actionTypes ={
        CONFIRM: 'CONFIRM',
        ERROR: "ERROR",
        WRITE: "WRITE",
        CHECK: 'CHECK',
        DELETE: 'DELETE',
        RESET:'RESET'
    }

    //REDUCER OBJECT

    const reducerObject=(estado, payload )=>({
        [actionTypes.ERROR]: {
            ...estado,
            error: true,
            loading: false
        },
        [actionTypes.CHECK]: {
            ...estado,
            loading: true,
        },
        [actionTypes.CONFIRM]:{
            ...estado,
            error:false,
            loading:false,
            confirmed:true,

        },
       [ actionTypes.DELETE]: {
            ...estado,
            deleted:true,
           },
        [actionTypes.RESET]:{
            ...estado,
            confirmed:false,
            deleted:false,
            value: '',

           },
           [actionTypes.WRITE]:{
            ...estado,
             value: payload,
           }
    })

    const reducer = (estado,action)=>{
    if(reducerObject(estado)[action.type]){
        return reducerObject(estado, action.payload)[action.type];
    }else{
        estado;
    }
    }

    
export { UseReducer };
