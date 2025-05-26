import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { postRequest, patchRequest } from "../../http/httpService";
import { login } from "../../routes";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("send-otp");

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as typeof e.currentTarget & {
      email: { value: string };
      otp: { value: string };
      password: { value: string };
      confirm_password: { value: string };
    };

    if (stage === "send-otp") {
      postRequest("api", "auth/forgot-password", {
        email: form.email.value
      })?.then(res => {
        if (res.data.success) {
          setStage("reset-password");
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      });
    } else if (stage === "reset-password") {
      patchRequest("api", "auth/reset-password", {
        email: form.email.value,
        otp: parseInt(form.otp.value),
        password: form.password.value,
        confirm_password: form.confirm_password.value
      })?.then((res) => {
        if (res.data.success) {
          history.push(login.path);
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div id="reset-password" className="d-flex flex-column align-items-center p-4">
      <h2>Reset Password</h2>
      <form className="d-flex flex-column align-items-center m-3" onSubmit={handleSubmit}>
        <Form.Control className="mb-2" type="email" placeholder="Email" name="email" disabled={loading} required />
        {stage === "reset-password" && (
          <>
            <Form.Control className="mb-2" type="text" placeholder="One-time PIN" name="otp" disabled={loading} required />
            <Form.Control className="mb-2" type="password" placeholder="New Password" name="password" disabled={loading} required />
            <Form.Control className="mb-2" type="password" placeholder="Confirm Password" name="confirm_password" disabled={loading} required />
          </>
        )}
        <Button variant="primary" type="submit">{stage === "send-otp" ? "Send OTP" : "Reset Password" }</Button>
      </form>
    </div>
  );
};

export default ResetPassword;