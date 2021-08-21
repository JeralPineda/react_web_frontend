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
         return result;
      })
      .catch((err) => {
         return {
            ok: false,
            message: err.message,
         };
      });
};

export const getUsersApi = (token) => {
   const url = `${basePath}/${apiVersion}/user/users`;

   const params = {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err.message;
      });
};
