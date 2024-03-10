
const TaskFilter = ({ priorityFilter, setPriorityFilter }) => {
    const priorityFilterChange = event => {
        setPriorityFilter(event.target.value);
    };

    return (
        <div className="mb-3">
            <label htmlFor="priority-filter" className="form-label">Filtrar por prioridad:</label>
            <select id="priority-filter" className="form-select" value={priorityFilter} onChange={priorityFilterChange}>
                <option value="all">Todas</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>
        </div>
    );
};

export default TaskFilter;
