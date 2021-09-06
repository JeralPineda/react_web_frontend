import { basePath, apiVersion } from './config';

export const getPostApi = (limit, page) => {
   const url = `${basePath}/${apiVersion}/post/get-posts?limit=${limit}&page=${page}`;

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
