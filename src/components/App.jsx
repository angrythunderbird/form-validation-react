import { useState } from 'react';
import './App.css';
import FormInput from './FormInput';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });
  console.log(values)
  const inputs = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username'
    },
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email'
    },
    {
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday'
    },
    {
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password'
    },
    {
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password'
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
