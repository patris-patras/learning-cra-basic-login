import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  const [formData, updateFormData] = useState({
    name: '',
    password: '',
  });

  const { name, password } = formData;

  function validateForm(event) {
    event.preventDefault();

    if (name == 'Patricia' && password == 'parola') {
      alert('before routing');
      // routing in pag de hello page
      history.push('/');
      alert('after routing');
    } else {
      alert('Wrong username or password');
    }
  }

  function onChange(event) {
    updateFormData({
      ...formData,

      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className='App'>
      <div className='login-panel'>
        <header className='App-header'>
          <p>Login</p>
          <form onSubmit={validateForm}>
            <div className='input'>
              <label for='name'>Name:</label>
              <input
                name='name'
                type='text'
                value={name}
                onChange={onChange}
                placeholder='Name'
                required
              />
            </div>
            <div className='input'>
              <label for='password'>Password:</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Password'
                required
              />
            </div>
            <button className='button' type='submit' title='Login'>
              Login
            </button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default App;
