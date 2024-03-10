
const Checkbox = ({ id, label, checked, onChange }) => {
    return (
        <div className={`checkbox ${checked ? 'completed' : ''}`}>
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {checked ? <span style={{ color: 'green' }}>Completado</span> : ''}
            </label>
        </div>
    );
};

export default Checkbox;
