import { useState } from 'react';

// * Import Components
import Input from './Input';

export default function StateLogin() {
  const [enteredValues, setEnteredValue] = useState({ email: '', password: '' });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmission(event) {
    event.preventDefault();
    // setEnteredValue({ email: '', password: '' });
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({ ...prevValues, [identifier]: value }));

    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => {
            handleInputBlur('email');
          }}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={() => {
            handleInputBlur('password');
          }}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
