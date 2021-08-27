const { apiVersion, basePath } = require('./config');

export const getMenuApi = () => {
   const url = `${basePath}/${apiVersion}/menu/get-menus`;

   return fetch(url)
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

export const updateMenuApi = (token, menuId, data) => {
   const url = `${basePath}/${apiVersion}/menu/update-menu/${menuId}`;

   const params = {
      method: 'PUT',
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

export const activateMenuApi = (token, menuId, status) => {
   const url = `${basePath}/${apiVersion}/menu/activate-menu/${menuId}`;

   const params = {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify({ active: status }),
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

export const addMenuApi = (token, menu) => {
   const url = `${basePath}/${apiVersion}/menu/add-menu`;

   const params = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify(menu),
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
