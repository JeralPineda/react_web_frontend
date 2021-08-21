import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import { getAccessTokenApi, getRefreshTokenApi, logout, refreshAccessTokenApi } from 'api/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({
      user: null,
      isLoading: true,
   });

   useEffect(() => {
      checkUserLogin(setUser);
   }, []);

   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const checkUserLogin = (setUser) => {
   const accessToken = getAccessTokenApi();

   if (!accessToken) {
      const refreshToken = getRefreshTokenApi();

      if (!refreshToken) {
         //si el refresh token es nulo, venció, etc cerramos sesión
         logout();

         setUser({
            user: null,
            isLoading: false,
         });
      } else {
         refreshAccessTokenApi(refreshToken);
      }
   } else {
      setUser({
         isLoading: false,
         user: jwt_decode(accessToken),
      });
   }
};

export default AuthProvider;
