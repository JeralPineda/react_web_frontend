import React, { createContext, useEffect, useState } from 'react';

import { getAccessTokenApi, getRefreshTokenApi, refreshAccessTokenApi } from 'api/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({
      user: null,
      isLoading: true,
   });

   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
