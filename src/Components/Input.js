function Input({ handleChange, title, color, value, name }) {
  return (
    <label className="sidebarLabelContainer">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}

export default Input;
