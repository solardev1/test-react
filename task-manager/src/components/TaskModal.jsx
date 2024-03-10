import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { Modal, Button } from 'react-bootstrap';


const idGenerator = () => {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 10000);
    return timestamp.toString() + randomNumber.toString();
}

const TaskModal = ({ showModal, closeModal }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Media");

    //Lista de prioridades
    const priorities = [
        { value: "Alta", label: "Alta" },
        { value: "Media", label: "Media" },
        { value: "Baja", label: "Baja" }
    ]

    const addTaskModal = () => {
        // Lógica para agregar la tarea aquí
        console.log('Tarea agregada:', { title, description, priority });

        dispatch(addTask({
            id: idGenerator(),
            title: title,
            description: description,
            priority: priority
        }));

        console.log("Titulo", title)
        console.log("Texto de la tarea!!", description);
        console.log("Prioridad:", priority);

        setTitle("");
        setDescription("");
        setPriority("Media");
        closeModal();

    };

    return (
        <Modal show={showModal} onHide={closeModal} >
            <Modal.Header closeButton>
                <Modal.Title>Agregar Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="taskTitle" data-testid="modal-title">Título de la tarea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="taskTitle"
                                    placeholder="Ingrese el título de la tarea"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="form-group">
                                <label htmlFor="taskPriority">Prioridad</label>
                                <select
                                    className="form-select"
                                    id="taskPriority"
                                    value={priority}
                                    onChange={e => setPriority(e.target.value)}
                                >
                                    {priorities.map(p => (
                                        <option key={p.value} value={p.value}>{p.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="taskDescription">Descripción de la tarea</label>
                                <textarea
                                    className="form-control"
                                    id="taskDescription"
                                    rows="5"
                                    placeholder="Ingrese la descripción de la tarea"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal} data-testid="modal-close-button">Cancelar</Button>
                <Button variant="primary" disabled={!description} onClick={addTaskModal}>Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskModal;