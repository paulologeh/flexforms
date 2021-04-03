import React, { useState, createContext, useEffect, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return user.updateEmail(email);
  };

  const updatePassword = (password) => {
    return user.updatePassword(password);
  };

  const deleteUser = () => {
    return user.delete();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    setLoading(false);

    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    deleteUser,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
};
