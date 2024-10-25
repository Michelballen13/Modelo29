import {React, useState} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header';
import Comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './paginas/About';
import AboutIconLink from './componentes/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {

    const [comments, 
            setComments] = useState(Comentarios);


    const titulo = "App de Comentarios Modelos";
    const Autor = "Michel Ballen"
    const ficha = "2902093"
    const centro = "CGMLTI"

    const addComentario = ( newComentario ) => {
        //Utiliaze el operador spread
        //para añadir el newComentario
        //a la lista de comentarios(state: comments)
        setComments(prevComments => [ ...prevComments, newComentario ]);
    }
    
    return (
        <ComentariosProvider>
            <Router>
            <div className='container'>
    
            <Header titulo={titulo} autor={Autor} centro={centro} ficha={ficha}/>
            <Routes>
                <Route exact path= "/" element= {
                    <>
                        <ComentarioForm handleAdd={ addComentario } />
                        <ComentarioStats />
                        <ComentarioLista /> 
                        <AboutIconLink /> 
    
                    </>
                } 
                ></Route>
                <Route exact path= "/about" element= {
                    <>
                        <About  titulo={titulo} autor={Autor}ficha={ficha}centro={centro}/>
                    </>
                }>
                </Route>
            </Routes>           
            </div>
            </Router>
        </ComentariosProvider>
        
)
}

export default App