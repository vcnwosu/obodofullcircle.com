import React, { createContext, useContext, useEffect, useState } from 'react';
import { getRequest } from '../http/httpService';
import { useHistory } from 'react-router-dom';
import { dashboard } from '../routes';
import { usePlan } from './PlanContext';

interface Student {
  id: Number;
  level: String;
  plan: String;
  plan_expiry: string;
}

interface Parent {

}

interface Tutor {
    
}

interface User {
  id: String;
  first_name: String;
  last_name: String;
  email: String;
  firebase_uid: String;
  user_type: String;
  student?: Student;
  parent?: Parent;
  tutor?: Tutor;
}

interface LoginData {
  user: User;
  token: string;
  firebase_token: string;
}

interface AuthContextType {
  user: User | undefined;
  login: (data: LoginData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const history = useHistory();
  const plan = usePlan();

  const login = async (data: LoginData) => {
    localStorage.setItem("obodo-auth", data.token);
    localStorage.setItem("obodo-firebase", data.firebase_token);
    getRequest("api", "user")?.then((res) => {
      if (res.data.user.student) {
        plan?.setPlan(res.data.user.student.plan);
      }

      setUser(res.data.user);
      history.push(dashboard.path);
    });
  };

  const logout = async () => {
    setUser(undefined);
    plan?.setPlan(undefined);
    plan?.setDiscount(undefined);
    localStorage.removeItem("obodo-auth");
    localStorage.removeItem("obodo-firebase");
  }

  useEffect(() => {
    const obodoAuth = localStorage.getItem("obodo-auth");
    const obodoFirebase = localStorage.getItem("obodo-firebase");

    if (obodoAuth) {
      getRequest("api", "user")?.then((res) => {
        if (res.data.user.student) {
          plan?.setPlan(res.data.user.student.plan);
        }

        setUser(res.data.user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType | undefined => {
  return useContext(AuthContext);
}