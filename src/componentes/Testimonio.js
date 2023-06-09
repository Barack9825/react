import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  
  return(
    <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Foto de Emma'/>
        <div className='contenedor-texto-testimonio'>
          <p className='cargo-testimonio'><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.testimonio.replace(props.destacar,`${props.destacar.bold()}`)}".</p> 
          
        </div>
    </div>
  );
}

export default Testimonio;