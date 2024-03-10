import { useState } from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import { completeTask, removeTask } from "../redux/taskSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import TaskFilter from "./TaskFilter";

const TaskList = ({ list, completeTask, removeTask }) => {
    const [priorityFilter, setPriorityFilter] = useState("all");

    const onChangeStatus = (id, checked) => {
        completeTask({ id, completed: checked });
    }

    const deleteTask = id => {
        removeTask(id);
    };

    const filterTasks = () => {
        if (priorityFilter === "all") {
            return list;
        } else {
            return list.filter(task => task.priority === priorityFilter);
        }
    };

    const getPriorityColor = priority => {
        switch (priority) {
            case "Alta":
                return "danger";
            case "Media":
                return "warning";
            case "Baja":
                return "success";
            default:
                return "secondary";
        }
    };

    const renderTasks = filterTasks().map(item => (
        <div key={item.id} className="p-4 text-black text-center pt-3 pb-2">
            <div className={`card-content card-body border border-${getPriorityColor(item.priority)}`}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <Checkbox
                        id={`task-${item.id}`}
                        checked={item.completed}
                        onChange={(event) => onChangeStatus(item.id, event.target.checked)}
                    />
                    <span className={`badge bg-${getPriorityColor(item.priority)}`}>{item.priority}</span>
                </div>
                <h5 className={`card-title ${item.completed ? 'completed' : ''}`}>{item.title}</h5>
                <p className={`card-content ${item.completed ? 'completed' : ''}`}>{item.description}</p>
                <button className="todo-list-action-delete mt-2" onClick={() => deleteTask(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    ));

    return (
        <div className="task-list">
            <TaskFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
            <h2 className="todo-subheading"></h2>
            {list.length ? renderTasks : "Sin tareas"}
        </div>
    );
}

const mapStateToProps = state => ({
    list: state.task
});

const mapDispatchToProps = {
    completeTask,
    removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);