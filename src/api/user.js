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

export const getUsersActiveApi = (token, status) => {
   const url = `${basePath}/${apiVersion}/user/users-active?active=${status}`;

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

export const uploadAvatarApi = (token, avatar, userId) => {
   const url = `${basePath}/${apiVersion}/user/upload-avatar/${userId}`;

   const formData = new FormData();

   formData.append('avatar', avatar, avatar.name);

   const params = {
      method: 'PUT',
      body: formData,
      headers: {
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

export const getAvatarApi = (avatarName) => {
   const url = `${basePath}/${apiVersion}/user/get-avatar/${avatarName}`;

   return fetch(url)
      .then((response) => {
         return response.url;
      })
      .catch((err) => {
         return err.message;
      });
};

export const updateUserApi = (token, user, userId) => {
   const url = `${basePath}/${apiVersion}/user/update-user/${userId}`;

   const params = {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify(user),
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

export const activateUserApi = (token, userId, status) => {
   const url = `${basePath}/${apiVersion}/user/activate-user/${userId}`;

   const params = {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify({
         active: status,
      }),
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result.msg;
      })
      .catch((err) => {
         return err.message;
      });
};

export const deleteUserApi = (token, userId) => {
   const url = `${basePath}/${apiVersion}/user/delete-user/${userId}`;

   const params = {
      method: 'DELETE',
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
         return result.msg;
      })
      .catch((err) => {
         return err.message;
      });
};

export const signUpAdminApi = (token, data) => {
   const url = `${basePath}/${apiVersion}/user/sign-up-admin`;

   const params = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result.msg;
      })
      .catch((err) => {
         return err.message;
      });
};
