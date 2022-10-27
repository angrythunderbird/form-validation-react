import './formInput.css';

const FormInput = (props) => {
  return (
    <div className="input-wrapper">
      <input type='text' placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput;
