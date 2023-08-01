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

  return (
    <div>
      <h1>Estadísticas</h1>
      <p>Cantidad de personas mayores de 35 años: {mayoresDe35.length}</p>
      <p>
        Persona de mayor edad:{' '}
        {personaMayorEdad.nombre} ({personaMayorEdad.edad} años)
      </p>
      <p>
        Persona de menor edad:{' '}
        {personaMenorEdad.nombre} ({personaMenorEdad.edad} años)
      </p>
    </div>
  );
};

export default Estadisticas;
