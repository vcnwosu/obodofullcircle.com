import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../store/AuthContext";
import { dashboard } from "../../routes";
import { postRequest } from "../../http/httpService";

import "./login.scss";

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth?.user !== undefined) {
      history.push(dashboard.path);
    }
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as typeof e.currentTarget & {
      email: { value: string };
      password: { value: string };
    }

    postRequest("api", "auth/login", {
      email: form.email.value,
      password: form.password.value,
      fcm_token: `${form.email.value}-obodo-web`
    })?.then(res => {
      setLoading(false);

      if (res.data.success) {
        const user = res.data.data.user;
        user.token = res.data.data.token;
        user.firebase_token = res.data.data.firebase_token;
        auth?.login(user);
      }
    })
  }

  return (
    <div id="login" className="d-flex flex-column align-items-center p-4">
      <h2>Log In</h2>
      <form className="d-flex flex-column align-items-center m-3" onSubmit={handleSubmit}>
        <Form.Control className="mb-2" type="email" placeholder="Email" name="email" disabled={loading} required />
        <Form.Control type="password" placeholder="Password" name="password" disabled={loading} required />
        <div className="m-3">
          <Button variant="primary" type="submit">Log In</Button>
        </div>
      </form>
      <p>Forgot Password? <a href="/reset-password">Reset Password</a></p>
      <p>Don't already have an account? <a href="/signup">Sign up</a></p>
    </div>
  )
}

export default Login;