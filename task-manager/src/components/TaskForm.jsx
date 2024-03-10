import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskForm = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="todo-add">
            <button
                className="btn btn-primary mb-3"
                onClick={openModal}
                data-testid="add-task-button"
            >
                Agregar Tarea
            </button>
            <TaskModal showModal={showModal} closeModal={closeModal} data-testid="modal" />
        </div>
    );
};

export default TaskForm;