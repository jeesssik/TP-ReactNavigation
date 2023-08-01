import React from 'react';
import data from '../data/Personas.json'; // importo el archivo json
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <div>
      <h1>Nombres:</h1>
      <ul>
        {data.map((persona) => (
          <li key={persona.id}>
           <Link to={`/persona/${persona.id}`}>{persona.nombre}</Link>
  
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Home;