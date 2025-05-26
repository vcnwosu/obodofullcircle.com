import React, { createContext, useContext, useEffect, useState } from 'react';

interface PlanContextType {
  name: string | undefined;
  discount: string | undefined;
  setPlan: (name: string | undefined) => void;
  setDiscount: (discount: string | undefined) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plan, setPlanContext] = useState<string | undefined>(undefined);
  const [discount, setPlanContextDiscount] = useState<string | undefined>(undefined);

  const setPlan = async (name: string | undefined) => {
    setPlanContext(name);
  }

  const setDiscount = async (discount: string | undefined) => {
    if (discount) {
      localStorage.setItem("obodo-discount", discount);
    } else {
      localStorage.removeItem("obodo-discount");
      discount = undefined;
    }

    setPlanContextDiscount(discount);
  }

  useEffect(() => {
    const discount = localStorage.getItem("obodo-discount");

    if (discount) {
      setPlanContextDiscount(discount);
    }
  });

  return (
    <PlanContext.Provider value={{ name: plan, discount, setPlan, setDiscount }}>
      {children}
    </PlanContext.Provider>
  )
}

export const usePlan = (): PlanContextType | undefined => {
  return useContext(PlanContext);
}