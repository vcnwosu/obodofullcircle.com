import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button, FormControl, FormGroup, FormCheck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CustomSpinner from "../../shared/components/Spinner";
import "./verifyotp.scss";
import { postRequest, patchRequest } from '../../http/httpService';
import { useHistory } from 'react-router-dom';
import { login, dashboard } from '../../routes';

const VerifyOTP = () => {
  const [verify, setVerify] = useState(true);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const Verify = () => (
    <>
      <h2>Verify Email</h2>
      <p>Verification code sent to email.</p>
      <FormControl type="text" name="otp" placeholder="One-time PIN" disabled={loading} required />
      <div id="verify-resend" className="mt-3">
        <Button type="submit" disabled={loading}>Verify OTP</Button>
        <Button variant="secondary" className="ml-2" disabled={loading} onClick={() => setVerify(false)}>Resend OTP</Button>
      </div>
    </>
  )

  const SendVerificationCode = () => (
    <>
      <h2>Send One-time PIN</h2>
      <p>Enter email to have verification code resent</p>
      <FormControl type="text" name="email" placeholder="Email" disabled={loading} required />
      <div id="verify-resend" className="mt-3">
        <Button variant="secondary" className="mr-2 mt-3" disabled={loading} onClick={() => setVerify(true)}>Back</Button>
        <Button type="submit" disabled={loading} className="mt-3">Send OTP</Button>
      </div>
    </>
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as typeof e.currentTarget & {
      otp: { value: string };
      email: { value: string };
    };

    if (verify) {
      postRequest("api", "auth/verify-otp", {
        email: form.email.value,
        otp: form.otp.value,
      })?.then(res => {
        if (res.data.success) {
          postRequest("api", "auth/verify-email", {
            email: form.email.value,
            otp: form.otp.value,
          })?.then(res => {
            if (res.data.success) {
              history.push(login.path);
            }
          })
        }
      })
    } else {
      patchRequest("api", "auth/resend-email-verification", {
        email: form.email.value
      })?.then(res => {
        if (res.data.success) {
          setVerify(false);
        }
      })
    }
  }

  return (
    <div id="verify-otp-module" className="d-flex flex-column align-items-center">
      <form className="d-flex flex-column align-items-center m-5" onSubmit={handleSubmit}>
        {verify && <Verify />}
        {!verify && <SendVerificationCode />}
        <CustomSpinner show={loading} />
      </form>
    </div>
  )
};

export default VerifyOTP;