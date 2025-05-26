import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { useAuth } from "../../store/AuthContext";
import { usePlan } from "../../store/PlanContext";
import { login, exchangeProgram } from "../../routes";

import "./dashboard.scss";

const Dashboard = () => {
  const auth = useAuth();
  const plan = usePlan();
  const history = useHistory();

  useEffect(() => {
    if (auth?.user === undefined) {
      history.push(login.path);
    }
  });

  let expiry: Date = new Date();

  if (auth?.user?.student?.plan_expiry) {
    expiry = new Date(auth?.user?.student.plan_expiry);
  }

  return (
    <div id="dashboard" className="m-5">
      <h1>Welcome, {auth?.user?.first_name} {auth?.user?.last_name}</h1>
      <h5>{auth?.user?.user_type}</h5>
      <br/>
      <br/>
      {auth?.user?.student && (
        <>
          <p>You are currently subscribed to the <b>{auth?.user?.student.plan}</b> plan which is set to expire or renew on {expiry.toDateString()}.</p>
          <h5>Change Plan</h5>
          <div id="change-plan-group" className="mb-3">
            <Form.Control placeholder="Optional Coupon Code" value={plan?.discount} onChange={(e: any) => plan?.setDiscount(e.target.value)} />
            <Button id="change-plan" variant="outline-secondary" onClick={() => history.push(`${exchangeProgram.path}#plans`)}>Change Plan</Button>
            <Button id="cancel-plan" variant="outline-secondary">Cancel Plan</Button>
          </div>
        </>
      )}
    </div>
  )
};

export default Dashboard;