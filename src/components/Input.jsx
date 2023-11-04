
const Input = ({handleChange,title, name, color, value}) => {
    return (
        <div>
            <label className="sidebar-label-container">
                <input onChange={handleChange} value={value}  type="radio" name={name} />
                <span className="checkmark" style={{backgroundColor: color}}></span> {title}
            </label>
        </div>
    );
};

export default Input;