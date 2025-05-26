import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button, FormControl, FormGroup, FormCheck } from 'react-bootstrap';
import CustomSpinner from "../../shared/components/Spinner";
import "./login.scss";
import { postRequest } from '../../http/httpService';
import { useHistory } from 'react-router-dom';
import { dashboard, login, signup } from '../../routes';

interface Login {
  email: String;
  password: String;
  fcm_token: String;
}

interface Signup extends Login {
  first_name: String;
  last_name: String;
  confirm_password: String;
  user_type: String;
};

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  const [signupState, setSignupState] = useState(history.location.pathname === "/signup");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);

    if (!signupState) {
      const formData: Login = {
        email,
        password,
        fcm_token: `${email}-obodo-web`,
      };

      postRequest("api", "auth/login", formData)?.then(res => {
        setLoading(false);
        if (res.data.success) {
          console.log('Login success', res.data);
          const user = res.data.data.user;
          user.token = res.data.data.token;
          user.firebase_token = res.data.data.firebase_token;
          auth?.login(user);
          history.push(dashboard.path);
        } else {
          setError(res.data.message);
        }
      })
    }
  };

  return (
    <div id="login-module" className="d-flex flex-column align-items-center">
      <form className="d-flex flex-column align-items-center m-5" onSubmit={handleSubmit}>
        <h2>{!signupState ? "Login" : "Signup"}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {signupState && <FormControl type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" disabled={loading} required />}
        {signupState && <FormControl type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" disabled={loading} required />}
        <FormControl type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" disabled={loading} required />
        <FormControl type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" disabled={loading} required />
        {signupState && <FormControl type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" disabled={loading} required />}
        {signupState &&
          <FormGroup id="usertype" className="d-flex flex-row">
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="STUDENT" label="Student" disabled={loading} required />
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="TUTOR" label="Tutor" disabled={loading} required />
            <FormCheck type="radio" name="usertype" onChange={(e) => setUserType(e.target.value)} value="PARENT" label="Parent" disabled={loading} required />
          </FormGroup>
        }
        <Button type="submit" disabled={loading}>{!signupState ? "Login" : "Signup"}</Button>
      </form>
      {!signupState ?
        <p>Don't already have an account? <a onClick={() => history.push(signup.path)}>Sign up</a></p> :
        <p>Already have an account? <a onClick={() => history.push(login.path)}>Login</a></p>
      }
      <CustomSpinner show={loading} />
    </div>
  );
};

export default Login;