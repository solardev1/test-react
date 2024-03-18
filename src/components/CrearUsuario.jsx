import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
const CrearUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGuardarUsuario = () => {
    const usuario = {
      nombre: nombre,
      password: password
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Usuario guardado correctamente.');
    navigate('/login');

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Crear Usuario</h2>
              <div className="form-group">
                <label htmlFor="nombre">Nombre de Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                />
              </div>
              <div className="form-group password">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={handleGuardarUsuario}
              >
                Guardar Usuario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrearUsuario;