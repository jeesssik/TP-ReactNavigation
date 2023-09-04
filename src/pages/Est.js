import React from 'react';
import data from '../data/Personas.json';

const Estadisticas = () => {
  // Filtrar las personas mayores de 35 años
  const mayoresDe35 = data.filter((persona) => parseInt(persona.edad) > 35);

  // Encontrar la persona de mayor edad
  const personaMayorEdad = data.reduce((prev, current) => {
    return parseInt(current.edad) > parseInt(prev.edad) ? current : prev;
  });

  // Encontrar la persona de menor edad
  const personaMenorEdad = data.reduce((prev, current) => {
    return parseInt(current.edad) < parseInt(prev.edad) ? current : prev;
  });

  // Si hay más de uno con la misma edad que la de mayor edad
  const igualesMayorEdad= data.filter((persona)=>parseInt(personaMayorEdad.edad)==parseInt(persona.edad))

  return (
    <div>
      <h1>Estadísticas</h1>
      <p>Cantidad de personas mayores de 35 años: {mayoresDe35.length}</p>
      <p>
        Persona de mayor edad:{' '}
        {personaMayorEdad.nombre} ({personaMayorEdad.edad} años y son {igualesMayorEdad.length} personas las que tienen la misma edad)
      </p>
      {igualesMayorEdad.map((pos)=>{
        return(
          <p>{pos.nombre}</p>
        )
      })}
      <p>
        Persona de menor edad:{' '}
        {personaMenorEdad.nombre} ({personaMenorEdad.edad} años)
      </p>
    </div>
  );
};

export default Estadisticas;

