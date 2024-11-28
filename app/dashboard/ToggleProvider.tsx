"use client";
import React, { createContext, useContext, useState } from "react";

interface ToggleContext {
  toggle: boolean;
  setToggle: (e: boolean) => void;
}

const ToggleContext = createContext<ToggleContext | null>(null);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export default function useToggle() {
  const context = useContext(ToggleContext);
  if (context == undefined) {
    throw new Error("Must be used inside context");
  }
  return context;
}
