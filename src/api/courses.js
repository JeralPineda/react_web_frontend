const { basePath, apiVersion } = require('./config');

export const getCoursesApi = () => {
   const url = `${basePath}/${apiVersion}/courses/get-courses`;

   return fetch(url)
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
