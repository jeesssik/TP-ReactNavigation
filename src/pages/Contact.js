import React from 'react';

const Contacto = () => {
  return (
    <div className="container">
      <h1>Página de Contacto</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido:</label>
          <input type="text" className="form-control" id="apellido" name="apellido" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <input type="number" className="form-control" id="edad" name="edad" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

