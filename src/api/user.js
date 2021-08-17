const { apiVersion, basePath } = require('./config');

export const signUpApi = (data) => {
   const url = `${basePath}/${apiVersion}/user/signup`;

   const params = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         if (result.user) {
            return {
               ok: true,
               message: 'Usuario creado correctamente',
            };
         }

         return { ok: false, message: result.msg };
      })
      .catch((err) => {
         return {
            ok: false,
            message: err.message,
         };
      });
};

export const signIn = (data) => {
   const url = `${basePath}/${apiVersion}/auth/signin`;

   const params = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         //  return result;
         if (result.accessToken && result.refreshToken) {
            return {
               ok: true,
               message: 'Inicio de sesión exitosa',
            };
         }

         return { ok: false, message: result.msg };
      })
      .catch((err) => {
         return {
            ok: false,
            message: err.message,
         };
      });
};
