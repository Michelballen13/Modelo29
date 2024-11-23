import React from 'react'
import Card from '../componentes/Card'
import HomeLink from '../componentes/HomeLink'

const About = ({titulo, autor, centro, ficha}) => {
    return (
        <Card>
            <div className='home'>
                <HomeLink />
                <h1>Acerca de este proyecto </h1>
                <h3>Esta es una app en react</h3>
                <p><b>titulo:</b> {titulo}</p>
                <p><b>autor:</b> {autor}</p>
                <p><b>centro:</b> {centro}</p>
                <p><b>ficha:</b> {ficha}</p>
                <p><b>Version:</b>1.0.</p>
                
            </div>
        </Card>
        )
}

export default About