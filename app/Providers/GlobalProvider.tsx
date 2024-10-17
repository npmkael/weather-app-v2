"use client";

import React, { useState, useContext } from "react";
import { GlobalContextProvider } from "../context/globalContext";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default GlobalProvider;
