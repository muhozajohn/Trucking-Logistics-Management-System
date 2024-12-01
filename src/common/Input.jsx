const Input = ({
  id,
  onBlur,
  values,
  style = "",
  inputStyle = "",
  label,
  onChange,
  placeholder,
  type,
  inputType,
  icon,
  rows,
  defaultValue,
}) => {
  return (
    <div className="input-container">
      <h1 className="input-label">{label}</h1>
      {type === "input" ? (
        <div className={`input-wrapper ${style}`}>
          {icon && <p>{icon}</p>}
          <input
            type={inputType}
            defaultValue={defaultValue}
            value={values}
            onBlur={onBlur}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            className={`input-field ${inputStyle}`}
          />
        </div>
      ) : (
        <textarea
          id={id}
          onBlur={onBlur}
          defaultValue={defaultValue}
          cols="30"
          rows={rows || 10}
          placeholder={placeholder}
          onChange={onChange}
          value={values}
          className="textarea-field"
        >
          {values}
        </textarea>
      )}
    </div>
  );
};

export default Input;
