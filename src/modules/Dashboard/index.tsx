import React from 'react';
import { useAuth } from '../../store/AuthContext';

const Dashboard = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Welcome, {auth?.user?.name}</h1>
    </div>
  );
};

export default Dashboard;