import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
