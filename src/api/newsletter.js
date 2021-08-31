const { apiVersion, basePath } = require('./config');

export const suscribeNewsletterApi = (email) => {
   const url = `${basePath}/${apiVersion}/newsletter/suscribe-newsletter/${email}`;

   const params = {
      method: 'POST',
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err;
      });
};
