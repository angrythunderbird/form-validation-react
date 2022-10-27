import './formInput.css';

const FormInput = (props) => {
  const { label, onChangeInputs, ...inputProps } = props;

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input {...inputProps} onChange={onChangeInputs} />
    </div>
  )
}

export default FormInput;
