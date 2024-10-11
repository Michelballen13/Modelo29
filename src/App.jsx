import { React , useState } from 'react'
import Header from './componentes/Header'
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {

    const [comments 
        , setComments] 
        = useState(comentarios)

    const borrarItem=id=>  {
          if (window.confirm
            ('Esta seguro de borrar el comentario?')) {
          //asignar nuevo estado a comments:
          //filter: para quitar los comentarios
          //cuyo id concuerde con el parametro 
          setComments(comments.filter ((c)=> c.id !== id  ) )
            }
    }

    const titulo = "App de Comentarios";
    const Autor = "Michel Ballen"
    const ficha = "2902093"
    const centrodeformacion = "CGMLTI"


    const loading = false;
    if (loading === true) return (<h1> Cargando Comentarios...</h1>)

  return (
    <div className='container'>

        <Header 
        titulo={ titulo } 
        autor={Autor} 
        ficha={ficha} 
        centrodeformacion={centrodeformacion} />
        <ComentarioForm/>
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista 
        comments={comments}
        handleDelete={borrarItem} />


    </div>
  )

}
export default App