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
