import './App.css';
import FormInput from './FormInput';

function App() {
  return (
    <div className="app">
      <form action="submit">
        <FormInput placeholder='Username' />
        <FormInput placeholder='Email' />
        <FormInput placeholder='Full Name' />
        <FormInput placeholder='Else' />
      </form>
    </div>
  );
}

export default App;
