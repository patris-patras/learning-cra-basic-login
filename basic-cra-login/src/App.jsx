import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='login-panel'>
        <header className='App-header'>
          <p>Login</p>

          <form action=''>
            <div className='input'>
              <label for='name'>Name:</label>
              <input name='name' placeholder='Name' type='text' required />
            </div>
            <div className='input'>
              <label for='email'>E-mail address:</label>
              <input type='email' id='email' placeholder='Email' required />
            </div>
            <div className='input'>
              <label for='password'>Password:</label>
              <input
                type='password'
                id='password'
                placeholder='Password'
                required
              />
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}

export default App;
