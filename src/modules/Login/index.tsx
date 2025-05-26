import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button, FormControl, FormGroup, FormCheck } from 'react-bootstrap';
import "./login.scss";

const Login = () => {
  const auth = useAuth();
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="login-module" className="d-flex flex-column align-items-center">
      <form className="d-flex flex-column align-items-center m-5" onSubmit={handleSubmit}>
        <h2>{!signup ? "Login" : "Signup"}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {signup && <FormControl type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />}
        {signup && <FormControl type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />}
        <FormControl type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <FormControl type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        {signup && <FormControl type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required />}
        {signup &&
          <FormGroup id="usertype" className="d-flex flex-row">
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="student" label="Student"/>
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="tutor" label="Tutor" />
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="parent" label="Parent" />
          </FormGroup>
        }
        <Button type="submit">{!signup ? "Login" : "Signup"}</Button>
      </form>
      {!signup ?
        <p>Don't already have an account? <Button variant="primary" type="button" onClick={() => setSignup(true)}>Sign up</Button></p> : 
        <p>Already have an account? <Button variant="primary" type="button" onClick={() => setSignup(false)}>Login</Button></p>
      }
    </div>
  );
};

export default Login;