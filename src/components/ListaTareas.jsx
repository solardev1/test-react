import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ListaTareas = () => {
  const [tareas, setTareas] = useState(() => {
    const storedTareas = localStorage.getItem('tareas');
    return storedTareas ? JSON.parse(storedTareas) : [];
  });
  const [tituloTarea, setTituloTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [prioridadTarea, setPrioridadTarea] = useState('Alta');
  const [filtro, setFiltro] = useState('');
  const [tareasFiltradas, setTareasFiltradas] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!usuario || !usuario.logueado) {
      navigate('/login');
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    if (filtro === '') {
      setTareasFiltradas(tareas);
    } else {
      const nuevasTareasFiltradas = tareas.filter(tarea =>
        tarea.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
        tarea.descripcion.toLowerCase().includes(filtro.toLowerCase()) ||
        tarea.prioridad.toLowerCase().includes(filtro.toLowerCase())
      );
      setTareasFiltradas(nuevasTareasFiltradas);
    }
  }, [tareas, filtro]);

  const handleTituloTareaChange = (event) => {
    setTituloTarea(event.target.value);
  };

  const handleDescripcionTareaChange = (event) => {
    setDescripcionTarea(event.target.value);
  };

  const handlePrioridadTareaChange = (event) => {
    setPrioridadTarea(event.target.value);
  };

  const handleAgregarTarea = () => {
    if (tituloTarea.trim() !== '' && descripcionTarea.trim() !== '') {
      const nuevaTarea = {
        titulo: tituloTarea,
        descripcion: descripcionTarea,
        prioridad: prioridadTarea,
        completada: false
      };
      setTareas([...tareas, nuevaTarea]);
      setTituloTarea('');
      setDescripcionTarea('');
      setPrioridadTarea('Alta');
    }
  };

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };
  const handleCompletarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Tareas</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre, descripción o prioridad"
          value={filtro}
          onChange={handleFiltroChange}
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="tituloTarea">Título de Tarea:</label>
            <input
              type="text"
              className="form-control"
              id="tituloTarea"
              value={tituloTarea}
              onChange={handleTituloTareaChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="descripcionTarea">Descripción:</label>
            <input
              type="text"
              className="form-control"
              id="descripcionTarea"
              value={descripcionTarea}
              onChange={handleDescripcionTareaChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="prioridadTarea">Prioridad:</label>
            <select
              className="form-control"
              id="prioridadTarea"
              value={prioridadTarea}
              onChange={handlePrioridadTareaChange}
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mb-3" onClick={handleAgregarTarea}>
        Agregar Tarea
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrip.</th>
            <th>Prioridad</th>
            <th>Hecho</th>
          </tr>
        </thead>
        <tbody>
          {tareasFiltradas.map((tarea, index) => (
            <tr key={index}>
              <td>{tarea.titulo}</td>
              <td>{tarea.descripcion}</td>
              <td>{tarea.prioridad}</td>
              <td>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => handleCompletarTarea(index)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleEliminarTarea(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTareas;
