// en este componente se muestra la información de la persona seleccionada
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/Personas.json';

const Persona = () => {
  const { id } = useParams();
  const persona = data.find((p) => p.id === id);

  if (!persona) {
    return <div>No se encontró la persona.</div>;
  }

  return (
    <div>
      <h2>Detalles de la persona:</h2>
      <p>ID: {persona.id}</p>
      <p>Nombre: {persona.nombre}</p>
      <p>Apellido: {persona.apellido}</p>
      <p>Email: {persona.email}</p>
      <p>Edad: {persona.edad}</p>
    </div>
  );
};

export default Persona;
