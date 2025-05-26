import React, { useEffect } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../../routes';

const Dashboard = () => {
  const auth = useAuth();
  const history = useHistory();
  console.log('Dashboard Auth:', auth);

  useEffect(() => {
    if (auth?.user === undefined) {
      history.push(login.path);
    }
  }, [])

  let expiry: Date = new Date();

  if (auth?.user?.student?.plan_expiry) {
    expiry = new Date(auth?.user?.student.plan_expiry);
  }

  return (
    <div className="m-5">
      <h1>Welcome, {auth?.user?.first_name} {auth?.user?.last_name}</h1>
      <h5>{auth?.user?.user_type}</h5>
      <br/>
      <br/>
      {auth?.user?.student && (
        <>
          <p>You are currently subscribed to the <b>{auth?.user?.student.plan}</b> plan which is set to expire or renew on {expiry.toDateString()}.</p>
          <div>
            <Button variant="primary">Modify Plan</Button>
            <Button variant="danger" className="ml-3">Cancel Plan</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;