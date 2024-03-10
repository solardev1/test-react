import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/fontawesome-free-solid'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Container = () => {

    return (
        <div className="todo-container">
            <div className="todo-heading">
                <div className="todo-heading-circle">
                    <FontAwesomeIcon className="iconFontawesome" icon={faList} />
                </div>
                <h1 className="todo-heading-text">Lista de Tarea</h1>
            </div>
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default Container