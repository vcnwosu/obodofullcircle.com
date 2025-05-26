import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button, FormControl, FormGroup, FormCheck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CustomSpinner from "../../shared/components/Spinner";
import "./login.scss";
import { postRequest } from '../../http/httpService';
import { useHistory } from 'react-router-dom';
import { login, signup, dashboard, verifyotp } from '../../routes';

const Login = () => {
  const auth = useAuth();
  const history = useHistory();
  const [signupState, setSignupState] = useState(history.location.pathname === "/signup");
  const [userType, setUserType] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth?.user !== undefined) {
      history.push(dashboard.path);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as typeof e.currentTarget & {
      email: { value: string };
      password: { value: string };
      firstname: { value: string };
      lastname: { value: string };
      confirmpassword: { value: string };
    };

    if (!signupState) {
      postRequest("api", "auth/login", {
        email: form.email.value,
        password: form.password.value,
        fcm_token: `${form.email.value}-obodo-web`
      })?.then(res => {
        setLoading(false);
        if (res.data.success) {
          console.log('Login success', res.data);
          const user = res.data.data.user;
          user.token = res.data.data.token;
          user.firebase_token = res.data.data.firebase_token;
          auth?.login(user);
        } else {
          setError(res.data.message);
        }
      })
    } else {
      postRequest("api", "auth/signup", {
        email: form.email.value,
        first_name: form.firstname.value,
        last_name: form.lastname.value,
        password: form.password.value,
        confirm_password: form.confirmpassword.value,
        user_type: userType
      })?.then(res => {
        setLoading(false);
        if (res.data.success) {
          history.push(verifyotp.path);
        } else {
          setError(res.data.message);
        }
      });
    }
  };

  const signingUpAs = () => {
    if (userType === "STUDENT") {
      return "LEARNER";
    }

    return userType;
  }

  const LoginForm = () => (
    <>
      <h2>Log In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FormControl type="email" name="email" placeholder="Email" disabled={loading} required />
      <FormControl type="password" name="password" placeholder="Password" disabled={loading} required />
      <Button type="submit" disabled={loading}>Log In</Button>
    </>
  )

  const SelectUserTypeForm = () => (
    <>
      <h2>Sign up as a</h2>
      <div id="usertype">
        <div className="usertype-select" onClick={() => setUserType("TUTOR")}>
          <span>Tutor</span>
          <span>You want to teach Igbo</span>
        </div>

        <div className="usertype-select" onClick={() => setUserType("STUDENT")}>
          <span>Learner</span>
          <span>You want to learn Igbo</span>
        </div>

        <div className="usertype-select" onClick={() => setUserType("PARENT")}>
          <span>Parent</span>
          <span>You want to monitor your children as they learn Igbo</span>
        </div>
      </div>
    </>
  )

  const SignUpForm = () => (
    <>
      <h2>Sign Up</h2>
      <p>You are signing up as a <b>{signingUpAs().toLowerCase()}</b></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FormControl type="text" name="firstname" placeholder="First Name" disabled={loading} required />
      <FormControl type="text" name="lastname" placeholder="Last Name" disabled={loading} required />
      <FormControl type="email" name="email" placeholder="Email" disabled={loading} required />
      <FormControl type="password" name="password" placeholder="Password" disabled={loading} required />
      <FormControl type="password" name="confirmpassword" placeholder="Confirm Password" disabled={loading} required />
      <div>
        <Button id="back" variant="secondary" disabled={loading} onClick={() => setUserType("")}>Back</Button>
        <Button type="submit" disabled={loading}>Sign Up</Button>
      </div>
    </>
  )

  return (
    <div id="login-module" className="d-flex flex-column align-items-center">
      <form className="d-flex flex-column align-items-center m-5" onSubmit={handleSubmit}>
        {!signupState ? <LoginForm /> : (userType === "" ? <SelectUserTypeForm /> : <SignUpForm />)}
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