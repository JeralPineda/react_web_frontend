import jwt_decode from 'jwt-decode';

import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constant';
import { apiVersion, basePath } from './config';

export const getAccessToken = () => {
   const accessToken = localStorage.getItem(ACCESS_TOKEN);

   //    si el token caduco o no existe
   if (!accessToken || accessToken === 'null') {
      return null;
   }

   return expiredToken(accessToken) ? null : accessToken;
};

export const getRefreshToken = () => {
   const refreshToken = localStorage.getItem(REFRESH_TOKEN);

   if (!refreshToken || refreshToken === 'null') {
      return null;
   }

   return expiredToken(refreshToken) ? null : refreshToken;
};

const expiredToken = (token) => {
   const seconds = 60;

   //    decodificamos el token
   const metaToken = jwt_decode(token);

   //    obtenemos la fecha de expiración del token
   const { exp } = metaToken;

   //    fecha actual
   const now = (Date.now() + seconds) / 1000;

   //    devuelve true si el token expiro y false si no expiro
   return now > exp;
};
