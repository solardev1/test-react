import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            const usuarioGuardado = JSON.parse(usuario);
            if (usuarioGuardado.nombre === nombre && usuarioGuardado.password === password) {
                alert('Logueo exitoso');
                const usuarioLogueado = { ...usuarioGuardado, logueado: true };
                localStorage.setItem('usuario', JSON.stringify(usuarioLogueado));
                navigate('/lista-tareas');

            } else {
                alert('Credenciales incorrectas');
            }
        } else {
            alert('No hay usuarios registrados');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
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
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button className="btn btn-success" onClick={handleLogin}>
                                Iniciar Sesión
                            </button>
                            <Link to="/create-user" className="btn btn-primary">
                                Registrarse
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
