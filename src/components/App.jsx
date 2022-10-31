import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import FormInput from './FormInput';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMsg: 'Username should be 3-16 characters',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMsg: 'Enter a valid email',
      required: true
    },
    {
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMsg: 'Password should be 8-20 characters ans includes 1 letter, 1 number, 1 special character',
      pattern: `^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$`,
      required: true
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMsg: 'Passwords do not match',
      pattern: values.password,
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((el, id) => {
            return (
              <FormInput
              key={id + 1}
              {...el}
              value={values[el.name]}
              onChangeInputs={onChangeInputs} />
            )
          })
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
