import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return <div></div>;
};

export default AuthContextProvider;
