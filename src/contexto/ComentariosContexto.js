import {  createContext , useState } from "react";

//Crear el contexto

const ComentariosContexto = createContext ()

//Crear provider: para que el contexto 
//se reconosca en todo component 

export const ComentariosProvider = ( {children }) => {

    
    const [comments, setComments] = useState ([
        {
            id: 1 ,
            comentario: "Este es el comentario de contexto 1",
            calificacion: 3
        }
    ])

    const borrarItem=id=>{
        if(window.confirm
                ("Esta seguro de borrar el comentario?")){
            //asignar nuevo estado a comments:
            //Filter: para quitar los comentarios
            //cuyo id concuerde con el parametro    
            setComments(comments.filter((c)=> c.id !== id ) )   
        }
    }



    return (<ComentariosContexto.Provider value={{ comments , setComments, borrarItem}}>
        { children }
    </ComentariosContexto.Provider>
)}


export default ComentariosContexto